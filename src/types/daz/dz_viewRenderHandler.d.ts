/**
 * A render handler that renders to a new window.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/viewrenderhandler_dz
 */
declare class DzViewRenderHandler extends DzImageRenderHandler {

    /* Constructors */

    /**
     * @param size Size
     * @param time DzTime
     * @param filename string
     * @param isSoftware boolean
     */
    constructor(size: Size, time: DzTime, filename: string, isSoftware: boolean);
}
