

import serviceLocator from "../../core/service_locator/ServiceLocator";
import { CodeBlockDataSource } from "./data/dataSource/CodeBlockDataSource";
import { DataCodeBlockRepo } from "./data/repo/DataCodeBlockRepo";

export function configCodeBlock(){
    serviceLocator.registerFactory(CodeBlockDataSource.name, () => new CodeBlockDataSource())
    serviceLocator.registerFactory(DataCodeBlockRepo.name, () => new DataCodeBlockRepo(serviceLocator.get(CodeBlockDataSource.name)))
}