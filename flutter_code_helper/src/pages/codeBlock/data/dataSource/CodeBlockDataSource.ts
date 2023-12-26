import { IClass } from "../../../../core/interfaces/IClass";
import { getModelsFromJsonParams } from "../../domain/useCases/getModelsFromJsonUseCase";
import { generateClasses } from "./modelGeneration";

export class CodeBlockDataSource {
  getModelsFromJson(params:getModelsFromJsonParams): IClass[] {
    let jsonData = JSON.parse(params.data);

    return generateClasses(params.name, jsonData);

  }
}
