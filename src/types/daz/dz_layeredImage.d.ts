declare class DzLayeredImage extends QObject {
    static className(): string
    name: string;	//
    objectName: string;	//
    addLayer(layer: DzImageLayer): any;
    className(): string;

    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    getFlattenedImage(): any;
    getFlattenedImage(p0: boolean): any;
    getLayer(p0: number): any;
    getLayerCount(): any;
    getName(): any;
    getSize(): any;
    inherits(): any;
    inherits(p0: string): any;
    insertLayer(layer: DzImageLayer, idx: number): any;
    iskindof(p0: string): any;
    layerListChanged(): void;
    makePersistent(): any;
    moveLayer(p0: number, p1: number): any;
    nameChanged(p0: string): void;
    removeLayer(p0: DzImageLayer): any;
    replaceLayer(p0: DzImageLayer, p1: DzImageLayer): any;
    setSize(p0: QSize): any;
    sizeChanged(p0: QSize): void;
    toLayeredTexture(p0: DzLayeredTexture): any;
}