import { DataCodeBlockRepo } from "../../data/repo/DataCodeBlockRepo";
import { CodeBlockRepo } from "../repo/CodeBlockRepo";
import serviceLocator from "../../../../core/service_locator/ServiceLocator";
import { IClass } from "../../../../core/interfaces/IClass";

export function getModelsFromJsonUseCase(params:getModelsFromJsonParams): IClass[] {
  
  const repo : CodeBlockRepo = serviceLocator.get(DataCodeBlockRepo.name)
  return repo.getModelsFromJson(params);
}

export interface getModelsFromJsonParams {
  name:string,
  data:any
}