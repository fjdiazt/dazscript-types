declare class DzWeightMap extends DzElement {
    copyFrom(element: DzElement): void;
    getNumWeights(): number;
    getFloatWeight(idx: number): number;
    setFloatWeight(idx: number, weight: number): void;
    setNumWeights(nWeights: number): void;
    setNumWeights(nWeights: number, keepExisting: boolean): void;
}