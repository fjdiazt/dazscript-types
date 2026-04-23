/**
 * A render handler that renders into a viewport.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/3dviewrenderhandler_dz
 */
declare class Dz3DViewRenderHandler extends DzImageRenderHandler {

    /* Constructors */

    /**
     * @param view DzViewport
     * @param startTime DzTime
     * @param filename string
     */
    constructor(view: DzViewport, startTime: DzTime, filename: string);

    /* Methods */

    /**
     * @returns number The offset for this handler, from the left of the view.
     * @since 4.6.4.18
     */
    getLeftOffset(): number; // Number

    /**
     * @returns number The offset for this handler, from the top of the view.
     * @since 4.6.4.18
     */
    getTopOffset(): number; // Number

    /**
     * @returns any The render view for this handler. Undocumented DAZ type: renderview_dz.
     * @since 4.6.4.18
     */
    getView(): any; // renderview_dz; undocumented type

    /**
     * @returns DzViewport The viewport for this handler.
     * @since 4.6.4.18
     */
    getViewport(): DzViewport;
}
