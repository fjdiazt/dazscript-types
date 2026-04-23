/**
 * A single layer in a multi-layer texture image. (deprecated).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/imagecomponent_dz
 */
declare class DzImageComponent extends QObject {

    /* Properties */

    /**
     * The label for the layer.
     */
    label: string; // String

    /**
     * Holds whether or not the layer contributes to the final image.
     */
    visible: boolean; // Boolean

    /* Methods */

    /**
     * @param manip DzImageManip
     */
    addManipulator(manip: DzImageManip): void;

    freeImageData(): void;

    /**
     * @returns DzImage The image data of the component.
     */
    getImageData(): DzImage;

    /**
     * @param idx number
     * @returns DzImageManip
     */
    getManipulator(idx: number): DzImageManip;

    /**
     * @returns number
     */
    getNumManipulators(): number; // Number

    /**
     * @returns Size The size of the image data of the component.
     */
    getSize(): Size;

    /**
     * @param idx number
     * @param manip DzImageManip
     */
    insertManipulator(idx: number, manip: DzImageManip): void;

    /**
     * @param idx number
     * @returns boolean
     */
    removeManipulator(idx: number): boolean; // Boolean

    /**
     * @param manip DzImageManip
     * @returns boolean
     */
    removeManipulator(manip: DzImageManip): boolean; // Boolean

    /**
     * @param layer DzTextureLayer
     * @param imageSize Size
     * @returns boolean
     */
    toTextureLayer(layer: DzTextureLayer, imageSize: Size): boolean; // Boolean

    /* Signals */

    /**
     * Emitted when the image data for the component has been changed.
     */
    imageDataChanged: ISignal<void>;

    /**
     * Emitted when the label of the component has been changed.
     * @param label string
     */
    labelChanged: ISignal<string>;

    /**
     * Emitted when the list of manipulators for the component has been changed.
     */
    manipulatorListChanged: ISignal<void>;

    /**
     * Emitted when the visibility of the component has been changed.
     * @param onOff boolean
     */
    visibilityChanged: ISignal<boolean>;
}
