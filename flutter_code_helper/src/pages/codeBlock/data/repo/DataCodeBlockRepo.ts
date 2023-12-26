import { CodeBlockDataSource } from "../dataSource/CodeBlockDataSource";
import { CodeBlockRepo } from "../../domain/repo/CodeBlockRepo";

import { getModelsFromJsonParams } from "../../domain/useCases/getModelsFromJsonUseCase";
import { IClass } from "../../../../core/interfaces/IClass";

export class DataCodeBlockRepo implements CodeBlockRepo {
  dataSource: CodeBlockDataSource;

  constructor(dataSource: CodeBlockDataSource) {
    this.dataSource = dataSource;
  }

  getModelsFromJson(params: getModelsFromJsonParams): IClass[] {
    
    return this.dataSource.getModelsFromJson(params);
  }
}

