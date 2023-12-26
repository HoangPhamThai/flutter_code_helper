import { configCodeBlock } from "../pages/codeBlock/di";
import { configFeatureGeneration } from "../pages/featureGeneration/di";

export function configServiceLocator() {
  configCodeBlock();
  configFeatureGeneration();
}
