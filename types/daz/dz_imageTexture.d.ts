declare class DzImageTexture extends QObject {
    objectName: string; // Scott6_EyesD.jpg
    drawnDataChanged(): any;
    tempFilenameChanged(s: string): any;
    refresh(): any;
    getFilename(): any;
    getTempFilename(): any;
    getGLTextureSize(): any;
    getGLAlphaTextureSize(): any;
    getOriginalImageSize(): QSize;
    getPreviewPixmap(width: number, height: number): any;
    getPreviewPixmap(size: QSize): any;
    setGamma(value: number): any;
    getGamma(): any;
    getTextureType(): any;
    setTextureType(value: number): any;
    loadImageData(image: QImage): any;
    getImageData(image: QImage): any;
    invalidate(): any;
    refreshSources(): any;
    setTextureToRefresh(): any;
    assetModified(): any;
    assetWasSaved(): any;
    Standard: number; // 0
    LatLong: number; // 1
    LightProbe: number; // 2
    CustomTexture: number; // 65536
    name: string; // Scott6_EyesD.jpg
}