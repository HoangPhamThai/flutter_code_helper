
import { FeatureGenerationRepo } from "../../domain/repo/FeatureGenerationRepo";
import { generateListEntityParams } from "../../domain/useCases/generateListEntityUseCase";
import { FeatureGenerationDataSource } from "../dataSource/FeatureGenerationDataSource";

export class DataFeatureGenerationRepo implements FeatureGenerationRepo{
    dataSource:FeatureGenerationDataSource

    constructor(dataSource:FeatureGenerationDataSource){
        this.dataSource = dataSource;
    }

    generateListEntity(params: generateListEntityParams) : string {
        return this.dataSource.generateListEntity(params); 
    }
    
}