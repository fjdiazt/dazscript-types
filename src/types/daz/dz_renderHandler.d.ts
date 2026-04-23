/**
 * Base class for all render handlers.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/renderhandler_dz
 */
declare class DzRenderHandler extends QObject {

    /* Methods */

    /**
     * @returns Color The background color
     */
    getBackColor(): Color;

    /**
     * @returns Rect The area of the view to render, if the whole view is not to be rendered
     */
    getCropWindow(): Rect;

    /**
     * @returns number The number of frames to be rendered
     */
    getNumFrames(): number; // Number

    /**
     * @returns Size The size (width, height) of the rendered image
     */
    getSize(): Size;

    /**
     * @returns DzTime The scene time at which rendering will begin
     */
    getStartingTime(): DzTime;

    /**
     * @returns boolean true if only a portion of the view will be rendered, otherwise false.
     */
    getUseCropWindow(): boolean; // Boolean

    /**
     * Set background color for the render
     * @param color Color
     */
    setBackColor(color: Color): void;

    /**
     * Set the portion of the view to be rendered, if the whole view is not to be rendered
     * @param window Rect
     */
    setCropWindow(window: Rect): void;

    /**
     * Set the render to be limited to a portion of the view, or the whole view
     * @param onOff boolean
     */
    setUseCropWindow(onOff: boolean): void;
}
