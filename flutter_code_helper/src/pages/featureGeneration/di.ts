import { FeatureGenerationDataSource } from './data/dataSource/FeatureGenerationDataSource';
import serviceLocator from "../../core/service_locator/ServiceLocator";
import { DataFeatureGenerationRepo } from "./data/repo/DataFeatureGenerationRepo";

export function configFeatureGeneration() {

    serviceLocator.registerFactory(FeatureGenerationDataSource.name, () => new FeatureGenerationDataSource())
  serviceLocator.registerFactory(
    DataFeatureGenerationRepo.name,
    () => new DataFeatureGenerationRepo(serviceLocator.get(FeatureGenerationDataSource.name))
  );
}
