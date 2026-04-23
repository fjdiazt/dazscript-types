/**
 * Class that implements multi-layered images. (deprecated).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/layeredimage_dz
 */
declare class DzLayeredImage extends DzBase {

    /* Methods */

    /**
     * Add a layer to the image.
     * @param layer DzImageLayer - The layer to add to the image. The image takes ownership of this object and deletes it when it is no longer needed.
     */
    addLayer(layer: DzImageLayer): void;

    /**
     * @param freeMem boolean - If true, any image layers loaded from file will be unloaded immediately after flattening. They will have to be re-loaded again for future flattening operations.
     * @returns DzImage An image that is the final result of merging all the visible layers in the image.
     */
    getFlattenedImage(freeMem?: boolean): DzImage;

    /**
     * @param which number
     * @returns DzImageLayer The layer at index which. This object is owned by the image.
     */
    getLayer(which: number): DzImageLayer;

    /**
     * @returns number The number of layers in this image.
     */
    getLayerCount(): number; // Number

    /**
     * @returns Size The size of the canvas for this image.
     */
    getSize(): Size;

    /**
     * Insert a layer at a specific index.
     * @param layer DzImageLayer - The layer to add to the image. The image takes ownership of this object and deletes it when it is no longer needed.
     * @param idx number - The index in the list to insert the layer at.
     */
    insertLayer(layer: DzImageLayer, idx: number): void;

    /**
     * Adjust layer order.
     * @param from number - The index of the layer to move.
     * @param to number - The index in the list to move the layer to.
     */
    moveLayer(from: number, to: number): void;

    /**
     * Remove the specified layer.
     * @param layer DzImageLayer - The layer to remove from the image. The layer will be deleted if it is owned by the image.
     * @returns boolean true if the layer was removed from the image, otherwise false.
     */
    removeLayer(layer: DzImageLayer): boolean; // Boolean

    /**
     * Replace a layer with a new layer.
     * @param oldLayer DzImageLayer - A pointer to the layer to remove from the image. The layer will be deleted if it is owned by the image.
     * @param newLayer DzImageLayer - The new layer to add to the image in place of the old layer. The image takes ownership of this object and deletes it when it is no longer used.
     * @returns boolean true if the layer was successfully replaced, otherwise false.
     */
    replaceLayer(oldLayer: DzImageLayer, newLayer: DzImageLayer): boolean; // Boolean

    /**
     * Sets the size of the image's canvas.
     * @param size Size - The new size for the image's canvas.
     */
    setSize(size: Size): void;

    /**
     * @param img DzLayeredTexture - The layered texture to copy/convert the layered image into.
     * @returns boolean true if the image was successfully copied to img, otherwise false.
     */
    toLayeredTexture(img: DzLayeredTexture): boolean; // Boolean

    /* Signals */

    /**
     * Emits a signal when the list of layers has changed.
     */
    layerListChanged: ISignal<void>;

    /**
     * Emits a signal that the size of canvas has changed.
     * @param size Size - The new size of the canvas.
     */
    sizeChanged: ISignal<Size>;

    /* Undocumented Augment Members */

    /** @undocumented */
    getName(): any;

    /** @undocumented */
    iskindof(p0: string): any;
}
