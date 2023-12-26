import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getModelsFromJsonParams, getModelsFromJsonUseCase } from "../../domain/useCases/getModelsFromJsonUseCase";
import { IClass } from "../../../../core/interfaces/IClass";


interface CodeBlockState {
  modelsFromJson: IClass[] | null;
}

const initialState: CodeBlockState = {
  modelsFromJson: null,
};

const codeBlockSlice = createSlice({
  name: "codeBlockSlice",
  initialState,
  reducers: {
    getModelsFromJson: getModelsFromJsonReducer,
  },
});

export const { getModelsFromJson } = codeBlockSlice.actions;

export default codeBlockSlice.reducer;


function getModelsFromJsonReducer(
  state: CodeBlockState,
  action: PayloadAction<getModelsFromJsonParams>
) {
  state.modelsFromJson = getModelsFromJsonUseCase(action.payload);
}
