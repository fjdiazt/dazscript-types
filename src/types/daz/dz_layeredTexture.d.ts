declare class DzLayeredTexture extends DzTexture {
    size: QSize;	// [object object]
    aboutToInsertLayers(p0: number, p1: number): any;
    aboutToRemoveLayers(p0: number, p1: number): any;
    addLayer(p0: DzTextureLayer): any;
    beginEditing(): any;
    copyFrom(p0: DzLayeredTexture): any;
    createLayer(imageFile: string): DzTextureLayer;
    endEditing(): any;
    findLayer(p0: DzTextureLayer): any;
    getLayer(p0: number): DzTextureLayer;
    getNumLayers(): number;
    getSourceDSI(): any;
    insertLayer(p0: number, p1: DzTextureLayer): any;
    layerListChanged(): void;
    layersInserted(p0: number, p1: number): void;
    layersRemoved(p0: number, p1: number): void;
    moveLayer(p0: number, p1: number): any;
    refeshLayeredTexture(): any;
    removeAllLayers(): any;
    removeLayer(p0: number): any;
    removeLayer(p0: DzTextureLayer): any;
    replaceLayer(p0: DzTextureLayer, p1: DzTextureLayer): any;
    sizeChanged(p0: QSize): void;
    takeLayer(p0: number): any;
}