declare class DzImageMgr extends QObject {

    /* Properties */

    /* Methods */
    imageListChanged(): void;
    autoRefreshChanged(onOff: boolean): void;
    loadImage(filename: QString, img: QImage, importerIdx: number): DzError;
    loadImage(filename: QString): QImage;
    loadImage(filename: QString, img: QImage, importerIdx: number): DzError;
    loadImage(filename: QString): QImage;
    loadImage(filename: QString, img: QImage, importerIdx: number): DzError;
    loadImage(filename: QString): QImage;
    saveImage(filename: QString, image: QImage, exporterIdx: number): DzError;
    saveImage(filename: QString, image: QImage, exporterIdx: number): DzError;
    loadLayeredImage(filename: QString, img: DzLayeredImage, importerIdx: number): DzError;
    loadLayeredImage(filename: QString, img: DzLayeredImage, importerIdx: number): DzError;
    saveLayeredImage(filename: QString, image: DzLayeredImage, exporterIdx: number): DzError;
    saveLayeredImage(filename: QString, image: DzLayeredImage, exporterIdx: number): DzError;
    setImageOpenPath(path: QString): void;
    setImageSavePath(path: QString): void;
    prepareAllImages(r: DzRenderer): void;
    imagePrepared(img: DzTexture, tempName: QString): void;
    deleteUnusedTextureObjects(): void;
    refresh(): void;
    getNumImages(): number;
    getImage(fullPath: QString): DzImageTexture;
    getImage(which: number): DzImageTexture;
    findImage(fullPath: QString): DzTexture;
    findImageByName(name: QString): DzTexture;
    findTexture(): any; // TODO ;
    findLayeredTexture(uri: DzUri): DzLayeredTexture;
    createLayeredTexture(name: QString): DzLayeredTexture;
    getImageOpenPath(): QString;
    getImageSavePath(): QString;
    getUniqueImageName(name: QString): QString;
    beginEditingImage(): void;
    finishedEditingImage(img: DzTexture): void;
    findLayerImageFiles(filename: QString): boolean;
    findLayerImageFile(path: QString, askUser: boolean): QString;
    addGLImageToDelete(): any; // TODO ;
}