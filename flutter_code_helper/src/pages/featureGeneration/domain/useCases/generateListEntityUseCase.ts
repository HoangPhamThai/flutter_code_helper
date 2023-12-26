import { IClass } from "../../../../core/interfaces/IClass";
import serviceLocator from "../../../../core/service_locator/ServiceLocator";
import { DataFeatureGenerationRepo } from "../../data/repo/DataFeatureGenerationRepo";
import { FeatureGenerationRepo } from "../repo/FeatureGenerationRepo";

export function generateListEntityUseCase(
  params: generateListEntityParams
): string {
  const repo: FeatureGenerationRepo = serviceLocator.get(
    DataFeatureGenerationRepo.name
  );
  return repo.generateListEntity(params);
}

export interface generateListEntityParams {
  data: IClass[];
}
