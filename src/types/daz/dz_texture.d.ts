/**
 * Base class for sharable objects that store information for a texture (image map).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/texture_dz
 */
declare class DzTexture extends DzRefCountedItem {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of TextureType.
     */
    static Standard: number;

    /**
     * DAZ enum member of TextureType.
     */
    static LatLong: number;

    /**
     * DAZ enum member of TextureType.
     */
    static LightProbe: number;

    /**
     * DAZ enum member of TextureType.
     */
    static CustomTexture: number;

    /* Methods */

    /**
     * @returns string The source file name for this image.
     */
    getFilename(): string; // String

    /**
     * @returns number The gamma of the source file for this image.
     */
    getGamma(): number; // Number

    /**
     * @returns Size The actual size of the OpenGL texture alpha image.
     */
    getGLAlphaTextureSize(): Size;

    /**
     * @returns Size The actual size of the OpenGL texture image.
     */
    getGLTextureSize(): Size;

    /**
     * @returns Size The size of the original image that was the source of this texture.
     */
    getOriginalImageSize(): Size;

    /**
     * @param size Size - The size for the pixmap.
     * @returns Pixmap A preview pixmap of this texture with the specified size.
     */
    getPreviewPixmap(size: Size): Pixmap;

    /**
     * @param width number - The width for the pixmap.
     * @param height number - The height for the pixmap.
     * @returns Pixmap A preview pixmap of this texture with the specified dimensions.
     */
    getPreviewPixmap(width: number, height: number): Pixmap;

    /**
     * @returns number The revision of this texture.
     * @since 4.12.0.75
     */
    getRevision(): number; // Number

    /**
     * @returns string The temporary file name for this image.
     */
    getTempFilename(): string; // String

    /**
     * @returns number The texture type of this texture.
     */
    getTextureType(): number; // Number

    /**
     * Increments the texture to indicated that it's data has changed.
     * @param emitDataChanged boolean - Whether or not to emit the drawnDataChanged() signal.
     * @since 4.12.0.75
     */
    incrementRevision(emitDataChanged?: boolean): void;

    /**
     * Loads the image data from the specified image into this texture.
     * @param image DzImage - The image to load the data from.
     * @returns boolean true if the image data was loaded, false if there was an error or the image could not be loaded.
     * @since 4.6.2.23
     */
    loadImageData(image: DzImage): boolean; // Boolean

    /**
     * Reloads the image if its source file has changed.
     */
    refresh(): void;

    /**
     * @param gamma number - The gamma to set; gamma ⇐ 0 - do best guess of the image gamma; gamma == 1 - no gamma correction needed; gamma > 0 != 1 - the image is at the specified gamma.
     */
    setGamma(gamma: number): void;

    /**
     * Sets the texture type for this texture.
     * @param val number - The texture type to set.
     */
    setTextureType(val: number): void;

    /* Signals */

    /**
     * Emitted when the data of the texture has changed - e.g. after a call to refresh()
     */
    drawnDataChanged: ISignal<void>;

    /**
     * Emitted when the temporary filename for the image has changed.
     * @param filename string - The new temporary filename.
     */
    tempFilenameChanged: ISignal<string>;

    /* Undocumented Augment Members */

    /** @undocumented */
    assetModified(): void;

    /** @undocumented */
    assetWasSaved(): void;

    /** @undocumented */
    getImageData(p0: QImage): any;

    /** @undocumented */
    inherits(): any;

    /** @undocumented */
    invalidate(): any;

    /** @undocumented */
    refreshSources(): any;

    /** @undocumented */
    setTextureToRefresh(): any;
}
