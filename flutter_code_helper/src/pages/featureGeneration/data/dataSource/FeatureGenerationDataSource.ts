import { IClassProp } from "../../../../core/interfaces/IClassProp";
import { generateListEntityParams } from "../../domain/useCases/generateListEntityUseCase";

export class FeatureGenerationDataSource {

    private generateVariableDeclarations(props: IClassProp[]):string{
        let result = ''
        let dataType = ''
        props.forEach((value) =>{
            dataType = value.isList ? `\tList<${value.type}>` : `\t${value.type}`
            result += `${dataType}${value.isNullable ? '?':''} ${value.propName};\n`
        })
        return result
    }

    private generateConstructor(props:IClassProp[], className:string):string{
        let result = `\t${className}{(\n`
        props.forEach((value) =>{
            result += `\t\t${value.isNullable ? '' : 'required '}this.${value.propName},\n`
        })
        result += '\t)};\n'
        return result
    }

  generateListEntity(params: generateListEntityParams): string {
    let result = "";
    if (params.data){
        params.data.forEach((classItem) => {
            result += `class ${classItem.name} {\n` 
            + this.generateVariableDeclarations(classItem.props)
            + '\n'
            + this.generateConstructor(classItem.props, classItem.name)
            + '}\n'
        })
    }
    return result;
  }
}
