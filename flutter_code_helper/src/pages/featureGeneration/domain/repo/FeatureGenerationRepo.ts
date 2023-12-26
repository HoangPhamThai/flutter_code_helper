
import { generateListEntityParams } from "../useCases/generateListEntityUseCase";

export abstract class FeatureGenerationRepo {
    abstract generateListEntity: (params:generateListEntityParams) => string
}