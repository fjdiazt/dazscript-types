declare class DzUberIrayMaterial extends DzMaterial {
    /** Methods */
    openGLPreviewOpacity: any;
    openGLIOR: any;

    getBumpStrength(): any;
    getBumpMap(): any;
    getDisplacementStrength(): any;
    getDisplacementMin(): any;
    getDisplacementMax(): any;
    getDisplacementMap(): any;
    getHorizontalOffset(): any;
    getHorizontalTiles(): any;
    getVerticalOffset(): any;
    getVerticalTiles(): any;
    restoreDefaults(): any;
    topCoatLayerModeChanged(): void;
    topCoatLayerWeightChanged(topCoatLayerWeight?: boolean): void;
    metallicFlakeLayerWeightChanged(metallicFlakeLayerWeight?: boolean): void;
    layerMixingModeChanged(): void;
    shareGlossyInputsChanged(shareGlossyInputs?: boolean): void;
    volumeEnableChanged(): void;
    emissionColorChanged(): void;
    emissionFluxUnitChanged(emissionFluxUnit?: boolean): void;
    refractionWeightChanged(refractionWeight?: boolean): void;
    backscatteringWeightChanged(): void;
    displacementWeightChanged(): void;
    translucencyWeightChanged(): void;
    diffuseColorTransmitChanged(diffuseColorTransmit?: boolean): void;
    diffuseStrengthChanged(): void;
    glossyRoughnessChanged(): void;
    glossyGlossinessChanged(): void;
    backscatterRoughnessChanged(): void;
    backscatterGlossinessChanged(): void;
    updateGlossyRotation(): any;
    baseThinFilmThicknessChanged(): void;
    glossyWeightChanged(glossyWeight?: boolean): void;
    refractionGlossinessChanged(refractionGlossiness?: boolean): void;
    refractionRoughnessChanged(refractionRoughness?: boolean): void;
}