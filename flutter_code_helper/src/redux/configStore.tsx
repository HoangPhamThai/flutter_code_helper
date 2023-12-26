import { configureStore } from "@reduxjs/toolkit"
import codeBlockSlice from "../pages/codeBlock/presentation/redux/codeBlockSlice"
import featureGenerationSlice from "../pages/featureGeneration/presentation/redux/featureGenerationSlice"

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch


export const store = configureStore({
    reducer: {
        codeBlockSlice: codeBlockSlice,
        featureGenerationSlice: featureGenerationSlice
    }
})