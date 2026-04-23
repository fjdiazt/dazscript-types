/**
 * A sharable object that stores information for a texture (image map).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/imagetexture_dz
 */
declare class DzImageTexture extends DzRefCountedItem {

    /* Properties */

    /**
     * Holds the author of the file for this texture. (Read Only)
     * @since 4.8.1.21
     */
    assetAuthor: DzAuthor;

    /**
     * Holds the revision version of the asset file for this texture. (Read Only)
     * @since 4.8.1.21
     */
    assetFileRevision: DzVersion;

    /**
     * Holds the asset id for this texture.
     * @since 4.8.1.18
     */
    assetId: string; // String

    /**
     * Holds the modified date of the asset file for this texture. (Read Only)
     * @since 4.8.1.21
     */
    assetModifiedDate: Date;

    /**
     * Holds whether or not the asset for this texture needs to be saved. (Read Only)
     * @since 4.11.0.249
     */
    assetNeedSave: boolean; // Boolean

    /**
     * Holds the URI of the asset source for this texture; only valid when the asset is in an embedded state - i.e. modified. (Read Only)
     * @since 4.8.1.21
     */
    assetSource: DzUri;

    /**
     * Holds the asset URI for this texture. (Read Only)
     * @since 4.8.1.18
     */
    assetUri: DzUri;

    /* Signals */

    /**
     * Emitted when the image texture has been modified.
     */
    assetModified: ISignal<void>;

    /**
     * Emitted after the image texture has been saved.
     */
    assetWasSaved: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    objectName: string; // Scott6_EyesD.jpg

    /** @undocumented */
    drawnDataChanged(): any;

    /** @undocumented */
    tempFilenameChanged(s: string): any;

    /** @undocumented */
    refresh(): any;

    /** @undocumented */
    getFilename(): any;

    /** @undocumented */
    getTempFilename(): any;

    /** @undocumented */
    getGLTextureSize(): any;

    /** @undocumented */
    getGLAlphaTextureSize(): any;

    /** @undocumented */
    getOriginalImageSize(): QSize;

    /** @undocumented */
    getPreviewPixmap(width: number, height: number): any;

    /** @undocumented */
    getPreviewPixmap(size: QSize): any;

    /** @undocumented */
    setGamma(value: number): any;

    /** @undocumented */
    getGamma(): any;

    /** @undocumented */
    getTextureType(): any;

    /** @undocumented */
    setTextureType(value: number): any;

    /** @undocumented */
    loadImageData(image: QImage): any;

    /** @undocumented */
    getImageData(image: QImage): any;

    /** @undocumented */
    invalidate(): any;

    /** @undocumented */
    refreshSources(): any;

    /** @undocumented */
    setTextureToRefresh(): any;

    /** @undocumented */
    Standard: number; // 0

    /** @undocumented */
    LatLong: number; // 1

    /** @undocumented */
    LightProbe: number; // 2

    /** @undocumented */
    CustomTexture: number; // 65536

    /** @undocumented */
    name: string; // Scott6_EyesD.jpg
}
