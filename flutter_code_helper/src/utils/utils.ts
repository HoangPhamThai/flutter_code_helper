export const formatCamel = (data: string): string => {
  const dataSplit: string[] = data.split(/-|_/);
  if (dataSplit.length == 1) {
    return dataSplit[0];
  }

  return dataSplit
    .slice(1)
    .reduce((accumulator: string, currentValue: string) => {
      return accumulator + capitalizeWord(currentValue);
    }, dataSplit[0]);
};

export const capitalizeWord = (input: string): string => {
  return input.charAt(0).toUpperCase() + input.slice(1);
};

export const formatClassName = (data: string): string => {
  const dataSplit: string[] = data.split(/-|_/);
  if (dataSplit.length == 1) {
    return capitalizeWord(dataSplit[0]);
  }
  return dataSplit.reduce((accumulator: string, currentValue: string) => {
    return accumulator + capitalizeWord(currentValue);
  }, "");
};

export const checkListOfType = (obj: any, exactNumberType:boolean=true): {isList:boolean, type:string} => {
    let isList : boolean = Array.isArray(obj)
    let type : string = ''
    if (isList){
        type = typeof obj[0]
        if (type === 'number' && exactNumberType){
          type = getExactNumberType(obj[0])
        }
    }
    return {isList: isList, type: type}
}

export const getExactNumberType = (value:number):string =>{
    return Number.isInteger(value) ? "int" : "double"
}