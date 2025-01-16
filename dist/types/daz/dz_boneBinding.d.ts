declare class DzBoneBinding extends DzModifier {
    getWeights(): DzWeightMap;
    setBone(bone: DzBone): void;
    setWeights(weights: DzWeightMap): void;
}