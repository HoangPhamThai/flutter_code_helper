import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IClass } from "../../../../core/interfaces/IClass";
import {
  generateListEntityParams,
  generateListEntityUseCase,
} from "../../domain/useCases/generateListEntityUseCase";

interface FeatureGenerationState {
  listEntity: string | null;
  listEntityConfig: IClass[] | null;
}

const initialState = {
  listEntityConfig: [],
  listEntity: null,
};

const featureGenerationSlice = createSlice({
  name: "featureGenerationSlice",
  initialState,
  reducers: {
    generateListEntity: generateListEntityReducer,
  },
});

export const { generateListEntity } = featureGenerationSlice.actions;

export default featureGenerationSlice.reducer;

function generateListEntityReducer(
  state: FeatureGenerationState,
  action: PayloadAction<generateListEntityParams>
) {
  state.listEntityConfig = action.payload.data;
  state.listEntity = generateListEntityUseCase(action.payload);
}
