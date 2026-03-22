declare class DzTexture extends DzRefCountedItem {
    static CustomTexture: number;	// 65536
    static LatLong: number;	// 1
    static LightProbe: number;	// 2
    static Standard: number;	// 0

    assetModified(): void;
    assetWasSaved(): void;
    drawnDataChanged(): void;
    getFilename(): string;
    getGLAlphaTextureSize(): any;
    getGLTextureSize(): any;
    getGamma(): any;
    getImageData(p0: QImage): any;
    getOriginalImageSize(): any;
    getPreviewPixmap(p0: QSize): any;
    getPreviewPixmap(p0: number, p1: number): any;
    getTempFilename(): string;
    getTextureType(): any;
    inherits(): any;
    invalidate(): any;
    loadImageData(p0: QImage): any;
    refresh(): any;
    refreshSources(): any;
    setGamma(p0: number): any;
    setTextureToRefresh(): any;
    setTextureType(p0: number): any;
    tempFilenameChanged(p0: string): void;
}