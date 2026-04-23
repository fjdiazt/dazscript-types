/**
 * A sharable object that stores information for a layered texture (image map).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/layeredtexture_dz
 */
declare class DzLayeredTexture extends DzRefCountedItem {

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

    /**
     * Holds the size of the texture.
     */
    size: Size;

    /* Methods */

    /**
     * Adds a layer to (the bottom of) this layered texture.
     * @param layer DzTextureLayer - The layer to add.
     */
    addLayer(layer: DzTextureLayer): void;

    /**
     * Must be called before editing and paired with a call to endEditing().
     */
    beginEditing(): void;

    /**
     * Copies the settings of the given layered texture to this layered texture.
     * @param texture DzLayeredTexture - The layered texture to cupy settings from.
     */
    copyFrom(texture: DzLayeredTexture): void;

    /**
     * Creates a new (white) layer with the specified name in this layered texture.
     * @param name string - The name to assign to the layer.
     * @returns DzTextureLayer The new layer.
     */
    createLayer(name: string): DzTextureLayer;

    /**
     * Must be called after editing is completed and after beginEditing() is called.
     */
    endEditing(): void;

    /**
     * @param layer DzTextureLayer - The layer to find the index of in this layered texture.
     * @returns number The index of the found layer (if any), otherwise -1.
     */
    findLayer(layer: DzTextureLayer): number; // Number

    /**
     * @param index number - The index of the layer to get.
     * @returns DzTextureLayer The layer at the specified index (if valid), otherwise null.
     */
    getLayer(index: number): DzTextureLayer;

    /**
     * @returns number The number of layers in this layered texture.
     */
    getNumLayers(): number; // Number

    /**
     * @returns string The full path of the image file for this layered texture.
     */
    getSourceDSI(): string; // String

    /**
     * Inserts a layer into this layered texture at the specified index.
     * @param index number - The index to insert the layer at.
     * @param layer DzTextureLayer - The layer to insert.
     */
    insertLayer(index: number, layer: DzTextureLayer): void;

    /**
     * @param fromIndex number - The index of the layer to move.
     * @param toIndex number - The index to move the layer to.
     * @returns boolean true if the layer is moved, otherwise false.
     */
    moveLayer(fromIndex: number, toIndex: number): boolean; // Boolean

    /**
     * Refreshes each layer of this layered texture.
     */
    refeshLayeredTexture(): void;

    /**
     * Removes (deletes) all layers from this layered texture.
     */
    removeAllLayers(): void;

    /**
     * @param index number - The index of the layer to remove (and delete).
     * @returns boolean true if the specified layer is removed from this layered texture, otherwise false.
     */
    removeLayer(index: number): boolean; // Boolean

    /**
     * @param layer DzTextureLayer - The layer to remove (and delete).
     * @returns boolean true if the specified layer is removed from this layered texture, otherwise false.
     */
    removeLayer(layer: DzTextureLayer): boolean; // Boolean

    /**
     * @param oldLayer DzTextureLayer - The layer in this layered texture to replace.
     * @param newLayer DzTextureLayer - The new layer to replace the old layer with.
     * @returns boolean true if replacing the layer succeeds, otherwise false.
     */
    replaceLayer(oldLayer: DzTextureLayer, newLayer: DzTextureLayer): boolean; // Boolean

    /**
     * Removes the layer at the specified index.
     * @param index number - The index of the layer to remove.
     * @returns DzTextureLayer The layer at the specified index (if valid), otherwise null.
     */
    takeLayer(index: number): DzTextureLayer;

    /* Signals */

    /**
     * Emitted immediately before layers are inserted into this layered texture.
     * @param index number - The index of the first layer about to be inserted.
     * @param count number - The number of layers about to be inserted.
     */
    aboutToInsertLayers: ISignal<number, number>;

    /**
     * Emitted immediately before layers are removed from this layered texture.
     * @param index number - The index of the first layer about to be removed.
     * @param count number - The number of layers about to be removed.
     */
    aboutToRemoveLayers: ISignal<number, number>;

    /**
     * Emitted when the layered texture has been modified.
     */
    assetModified: ISignal<void>;

    /**
     * Emitted after the layered texture has been saved.
     */
    assetWasSaved: ISignal<void>;

    /**
     * Emitted when the layer list has changed.
     */
    layerListChanged: ISignal<void>;

    /**
     * Emitted when layers are inserted into this layered texture.
     * @param index number - The index of the first layer inserted.
     * @param count number - The number of layers inserted.
     */
    layersInserted: ISignal<number, number>;

    /**
     * Emitted when layers are removed from this layered texture.
     * @param index number - The index of the first layer removed.
     * @param count number - The number of layers removed.
     */
    layersRemoved: ISignal<number, number>;

    /**
     * Emitted when the size of this layered texture has changed.
     * @param size Size - The new size.
     */
    sizeChanged: ISignal<Size>;
}
