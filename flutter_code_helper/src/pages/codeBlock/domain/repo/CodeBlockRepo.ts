
import { IClass } from "../../../../core/interfaces/IClass";
import { getModelsFromJsonParams } from "../useCases/getModelsFromJsonUseCase";

export abstract class CodeBlockRepo {
    abstract getModelsFromJson: (params:getModelsFromJsonParams) => IClass[]
}