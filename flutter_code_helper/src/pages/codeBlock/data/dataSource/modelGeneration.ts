import { IClass } from "../../../../core/interfaces/IClass";
import { IClassProp } from "../../../../core/interfaces/IClassProp";
import {
  formatCamel,
  formatClassName,
  checkListOfType,
  getExactNumberType,
  capitalizeWord,
  //   isList,
} from "./../../../../utils/utils";


const determinePropType = (key: string, value: any): IClassProp => {
  const formatedKey: string = formatCamel(key);
  let dataType: string = "";
  let parseMethod: string = "";
  let isNullable: boolean = false;
  let isList:boolean = false;

  switch (typeof value) {
    case "string":
      dataType = "String";
      parseMethod = `parseString(json['${key}'])`;
      break;
    case "number":
      dataType = getExactNumberType(value);
      parseMethod = `parse${capitalizeWord(dataType)}(json['${key}'])`;
      break;
    case "boolean":
      dataType = "bool";
      parseMethod = `parseBool(json['${key}'])`;
      break;
    default:
      let { isList, type } = checkListOfType(value);
      // case list
      if (isList) {
        isList = true
        if (type === "string") {
          dataType = "List<String>";
          parseMethod = `parseList<String>(json['${key}'])`;
        } else if (type === "object") {
          let className = formatClassName(formatedKey);
          dataType = `List<${className}>`;
          parseMethod = `parseList<${className}>(json['${key}'], generatorFromJson: ${className}.fromJson)`;
        } else {
          dataType = `List<${type}>`;
          parseMethod = `parseList<${type}>(json['${key}'])`;
        }
      }
      // case object
      else {
        let className = formatClassName(formatedKey);
        parseMethod = `parseObject<${className}?>(json['${key}'], generatorFromJson: ${className}.fromJson, defaultValue: null)`;
        isNullable = true
        dataType = `${className}?`;
        
      }
  }
  return {
    propName: formatedKey,
    type: dataType,
    parseMethod: parseMethod,
    isNullable: isNullable,
    isList: isList,
  };
};

const generateAtomicClass = (
  name: string,
  data: any,
  listClass: IClass[]
): IClass => {
  let generatedClass: IClass = {
    name: name,
    props: [],
  };
  const listKeys: string[] = Object.keys(data);

  for (let i = 0; i < listKeys.length; i++) {
    const key = listKeys[i];
    generatedClass.props.push(determinePropType(key, data[key]));
    if (typeof data[key] === "object") {
      let { isList, type } = checkListOfType(data[key]);
      if (isList) {
        if (type === "object") {
          generateAtomicClass(formatClassName(key), data[key][0], listClass);
        }
      } else {
        generateAtomicClass(formatClassName(key), data[key], listClass);
      }
    }
  }
  listClass.push(generatedClass);
  return generatedClass;
};

export const generateClasses = (name: string, data: any): IClass[] => {
  let listClass: IClass[] = [];
  generateAtomicClass(name, data, listClass);
  console.log(listClass);

  return listClass;
};
