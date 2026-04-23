/**
 * Manager responsible for the importing/exporting of images/textures.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/imagemgr_dz
 */
declare class DzImageMgr extends QObject {

    /* Static Methods */

    /**
     * Gets exporter information.
     * @param i number - The index of the image exporter to get information about.
     * @returns Object The exporter information - i.e., description, extension.
     * @since 4.15.1.97
     */
    static getExporterInfo(i: number): Object;

    /**
     * @param imagePath string - The full path of an image file to get the size of.
     * @returns Size The size of the image, without actually reading the image contents. If the image format does not support this feature, this function returns an invalid size.
     * @since 4.9.3.82
     */
    static getImageSize(imagePath: string): Size;

    /**
     * Gets importer information.
     * @param i number - The index of the image importer to get information about.
     * @returns Object The importer information - i.e., description, extensions.
     * @since 4.15.1.97
     */
    static getImporterInfo(i: number): Object;

    /**
     * @returns number The number of exporters currently supported.
     * @since 4.15.1.97
     */
    static getNumExporters(): number; // Number

    /**
     * @returns number The number of importers currently supported.
     * @since 4.15.1.97
     */
    static getNumImporters(): number; // Number

    /* Methods */

    /**
     * Called prior to editing an image; pauses image preparation.
     */
    beginEditingImage(): void;

    /**
     * @param name string - The name of the layered texture to create.
     * @returns DzLayeredTexture A sharable object that stores information for a layered texture (image map) that is used in OpenGL.
     */
    createLayeredTexture(name: string): DzLayeredTexture;

    /**
     * This method is called from the 3D viewports to clear out any texture objects that are no longer being used. It has to be called only when a Studio OGL context is current.
     */
    deleteUnusedTextureObjects(): void;

    /**
     * @param fullPath string
     * @returns DzTexture A currently loaded image object whose source matches the given image filename (if any), otherwise NULL.
     */
    findImage(fullPath: string): DzTexture;

    /**
     * @param name string - The name of the image to find.
     * @returns DzTexture The image with the given name (if any), otherwise NULL.
     */
    findImageByName(name: string): DzTexture;

    /**
     * @param uri DzUri - The URI of the layered texture to find.
     * @returns DzLayeredTexture The found layered texture (if any), otherwise null.
     */
    findLayeredTexture(uri: DzUri): DzLayeredTexture;

    /**
     * @param uri DzUri - The URI of the texture to find.
     * @returns DzTexture The found texture (if any), otherwise null.
     */
    findTexture(uri: DzUri): DzTexture;

    /**
     * Called after editing an image; restarts image preparation.
     * @param img DzTexture - The image to add to the preparation list.
     */
    finishedEditingImage(img: DzTexture): void;

    /**
     * @param which number - The index of the image to return.
     * @returns DzTexture The image at the given index (if valid), otherwise NULL.
     */
    getImage(which: number): DzTexture;

    /**
     * @param fullPath string - The full path of the image file to get a DzTexture instance for.
     * @param creationGamma number - The gamma to set on this DzTexture instance if this function creates it.
     * @returns DzTexture A currently loaded image object whose source matches the given image filename. If the image is not already loaded, it is loaded and the new image is returned.
     */
    getImage(fullPath: string, creationGamma: number): DzTexture;

    /**
     * @param fullPath string - The full path of the image file to get a DzTexture instance for.
     * @returns DzTexture A currently loaded image object whose source matches the given image filename. If the image is not already loaded, it is loaded and the new image is returned.
     */
    getImage(fullPath: string): DzTexture;

    /**
     * @param fullPath string - The full path of the image file to get a DzTexture instance for.
     * @param creationGamma number - The gamma to set on this DzTexture instance if this function creates it.
     * @param creationType number - The texture type to set on this DzTexture instance if this function creates it.
     * @returns DzTexture A currently loaded image object whose source matches the given image filename. If the image is not already loaded, it is loaded and the new image is returned.
     */
    getImage(fullPath: string, creationGamma: number, creationType: number): DzTexture;

    /**
     * @returns string The path of the last directory that images were loaded from.
     */
    getImageOpenPath(): string; // String

    /**
     * @returns string The path of the last directory that images were saved to.
     */
    getImageSavePath(): string; // String

    /**
     * @returns number The number of currently available images.
     */
    getNumImages(): number; // Number

    /**
     * Creates a modified version of the given name if necessary to make it unique.
     * @param name string - The image name to make unique.
     * @returns string The given name if it is already unique, otherwise a modified copy of the name that is unique.
     */
    getUniqueImageName(name: string): string; // String

    /**
     * Called by the framework to notify the manager that the image has been prepared for the off-line renderer.
     * @param img DzTexture - The image that has been prepared.
     * @param tempName string - The new temporary name for the image.
     */
    imagePrepared(img: DzTexture, tempName: string): void;

    /**
     * Reads an image from a file.
     * @param filename string - The name of the image file to load.
     * @returns DzImage The loaded image.
     */
    loadImage(filename: string): DzImage;

    /**
     * Reads an image from a file.
     * @param filename string - The name of the image file to load.
     * @param img DzImage - The image that the file will be loaded into.
     * @param importerIdx number - The index of the importer to use to load the image. If less than zero, the manager will attempt to find an importer that can load the file.
     * @returns DzError DZ_NO_ERROR if the file was loaded successfully, otherwise an appropriate error code.
     */
    loadImage(filename: string, img: DzImage, importerIdx?: number): DzError;

    /**
     * Forces a flush of the background image processing buffer.
     * @param r DzRenderer - The renderer that is about to render the scene.
     */
    prepareAllImages(r: DzRenderer): void;

    /**
     * Reloads any images whose source files have changed.
     */
    refresh(): void;

    /**
     * Writes an image to a file.
     * @param filename string - The name of the image file to save.
     * @param image DzImage - The image to save.
     * @param exporterIdx number - The index of the exporter to use to save the image. If less than zero, the manager will attempt to find an appropriate exporter based on the filename extension.
     * @returns DzError DZ_NO_ERROR if the file was saved successfully, otherwise an appropriate error code.
     */
    saveImage(filename: string, image: DzImage, exporterIdx?: number): DzError;

    /**
     * Sets the file path that a file open dialog will point to for images.
     * @param path string - The folder path that the open image dialogs will default to.
     */
    setImageOpenPath(path: string): void;

    /**
     * Sets the file path that a file save dialog will point to for images.
     * @param path string - The folder path that the save image dialogs will default to.
     */
    setImageSavePath(path: string): void;

    /* Signals */

    /**
     * Emitted when the auto refresh state changes.
     * @param onOff boolean
     */
    autoRefreshChanged: ISignal<boolean>;

    /**
     * Emitted when an image is added to or removed from the list.
     */
    imageListChanged: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    loadLayeredImage(filename: QString, img: DzLayeredImage, importerIdx: number): DzError;

    /** @undocumented */
    loadLayeredImage(filename: QString, img: DzLayeredImage, importerIdx: number): DzError;

    /** @undocumented */
    saveLayeredImage(filename: QString, image: DzLayeredImage, exporterIdx: number): DzError;

    /** @undocumented */
    saveLayeredImage(filename: QString, image: DzLayeredImage, exporterIdx: number): DzError;

    /** @undocumented */
    findLayerImageFiles(filename: QString): boolean;

    /** @undocumented */
    findLayerImageFile(path: QString, askUser: boolean): QString;

    /** @undocumented */
    addGLImageToDelete(): any; // TODO ;
}
