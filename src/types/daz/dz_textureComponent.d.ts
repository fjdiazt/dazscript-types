/**
 * Base class for components of a layered texture.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/texturecomponent_dz
 */
declare class DzTextureComponent extends QObject {

    /* Properties */

    /**
     * Holds the color of the component.
     */
    color: Color;

    /**
     * Holds whether or not the component is enabled.
     */
    enabled: boolean; // Boolean

    /**
     * Holds whether or not the component is flipped horizontally.
     */
    flippedHorizontal: boolean; // Boolean

    /**
     * Holds whether or not the component is flipped vertically.
     */
    flippedVertical: boolean; // Boolean

    /**
     * Holds the path of the image file for the component.
     */
    imageFile: string; // String

    /**
     * Holds whether or not the color channels of the component are inverted.
     */
    invert: boolean; // Boolean

    /**
     * Holds the label of the component.
     * @since 4.11.0.225
     */
    label: string; // String

    /**
     * Holds the offset of the component.
     */
    offset: Point;

    /**
     * Holds the opacity of the component. This should be in the range 0.0 - 1.0.
     */
    opacity: number; // Number

    /**
     * Holds the rotation of the component.
     */
    rotation: number; // Rotation

    /**
     * Holds the horizontal offset of the component.
     */
    xOffset: number; // Number

    /**
     * Holds the scale of the component across its width.
     */
    xScale: number; // Number

    /**
     * Holds the vertical offset of the component.
     */
    yOffset: number; // Number

    /**
     * Holds the scale of the component across its height.
     */
    yScale: number; // Number

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of Rotation.
     */
    static RotNone: number;

    /**
     * DAZ enum member of Rotation.
     */
    static Rot90: number;

    /**
     * DAZ enum member of Rotation.
     */
    static Rot180: number;

    /**
     * DAZ enum member of Rotation.
     */
    static Rot270: number;

    /* Methods */

    /**
     * Copies another texture component into this one.
     * @param comp DzTextureComponent - The texture component to copy from.
     */
    copyFrom(comp: DzTextureComponent): void;

    /**
     * Flips the image horizontally and/or vertically.
     * @param horizontal boolean - If true, the image is flipped horizontally.
     * @param vertical boolean - If true, the image is flipped vertically.
     */
    flip(horizontal: boolean, vertical: boolean): void;

    /**
     * Loads image data from the specified image.
     * @param image DzImage - The image to load data from.
     * @returns boolean true if image data is loaded, otherwise false.
     */
    loadImageData(image: DzImage): boolean; // Boolean

    /**
     * @returns boolean true if this texture component has been modified on disk since it was last loaded/updated, otherwise false.
     */
    needsImageRefresh(): boolean; // Boolean

    /**
     * Sets the scale of the component.
     * @param xScale number - The scale of the component across its width. 1.0 is equivalent to 100%.
     * @param yScale number - The scale of the component across its height. 1.0 is equivalent to 100%.
     * @since 4.11.0.225
     */
    setScale(xScale: number, yScale: number): void;

    /* Signals */

    /**
     * Emitted when the color of the texture component has changed.
     * @param color Color - The new color.
     */
    colorChanged: ISignal<Color>;

    /**
     * Emitted when the data of the texture component has changed.
     */
    dataChanged: ISignal<void>;

    /**
     * Emitted when the enabled state of the texture component has changed.
     * @param onOff boolean - The new enabled state.
     */
    enabledChanged: ISignal<boolean>;

    /**
     * Emitted when the state of whether or not the texture component has been flipped horizontally has changed.
     * @param onOff boolean - The new state.
     */
    flippedHorizontalChanged: ISignal<boolean>;

    /**
     * Emitted when the state of whether or not the texture component has been flipped vertically has changed.
     * @param onOff boolean - The new state.
     */
    flippedVerticalChanged: ISignal<boolean>;

    /**
     * Emitted when the filename of the image for the texture component has changed.
     * @param filename string - The new filename.
     */
    imageChanged: ISignal<string>;

    /**
     * Emitted when the state of whether or not the texture component has been inverted has changed.
     * @param onOff boolean - The new state.
     */
    invertedChanged: ISignal<boolean>;

    /**
     * Emitted when the label of the texture component has changed.
     * @param label string - The new label.
     */
    labelChanged: ISignal<string>;

    /**
     * Emitted when the offset position of the texture component has changed.
     * @param offset Point - The new offset position.
     */
    offsetChanged: ISignal<Point>;

    /**
     * Emitted when the opacity of the texture component has changed.
     * @param opacity number - The new opacity value.
     */
    opacityChanged: ISignal<number>;

    /**
     * Emitted when the rotation of the texture component has changed.
     * @param rotation number - The new rotation value.
     */
    rotationChanged: ISignal<number>;

    /**
     * Emitted when the scale of the texture component has changed.
     * @param x number - The new scale on the X axis.
     * @param y number - The new scale on the Y axis.
     */
    scaleChanged: ISignal<number, number>;
}
