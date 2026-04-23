/**
 * A render handler that renders into an image (or images).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/imagerenderhandler_dz
 */
declare class DzImageRenderHandler extends DzRenderHandler {

    /* Properties */

    /**
     * Holds whether or not a post-process operation occurs when the render is finished.
     * @since 4.8.0.21
     */
    postProcessOnRenderFinish: boolean; // Boolean

    /**
     * Holds whether each frame is written to file when finishFrame is called. The internal images is reset on each new frame.
     * @since 4.9.3.57
     */
    writeToFile: boolean; // Boolean

    /* Constructors */

    /**
     * @param size Size
     * @param renderTime DzTime
     * @param filename string
     */
    constructor(size: Size, renderTime: DzTime, filename: string);

    /**
     * @param size Size
     * @param startingTime DzTime
     * @param numFrames number
     * @param filename string
     * @param isMovie boolean
     */
    constructor(size: Size, startingTime: DzTime, numFrames: number, filename: string, isMovie: boolean);

    /* Methods */

    /**
     * Adds files to this handler's list of rendered files.
     * @param files any[] - The list of files to add.
     * @since 4.8.0.21
     */
    addRenderFiles(files: any[]): void;

    /**
     * Begins rendering the given frame.
     * @param frame number - The index of the frame.
     */
    beginFrame(frame: number): void;

    /**
     * Starts a render.
     */
    beginRender(): void;

    /**
     * Finishes rendering the current frame
     */
    finishFrame(): void;

    /**
     * Finishes the render and saves it to file.
     */
    finishRender(): void;

    /**
     * @returns boolean true if a thumbnail is created, otherwise false.
     */
    getCreateThumbnail(): boolean; // Boolean

    /**
     * @returns DzImage The current frame's image. This image is reset at every call to beginFrame.
     */
    getCurrentFrameImage(): DzImage;

    /**
     * @returns string The filename that this handler is rendering to (if any), otherwise an empty string.
     * @since 4.8.0.18
     */
    getFilename(): string; // String

    /**
     * Sets whether a thumbnail is created.
     * @param createThumb boolean - If true, a thumbnail is created.
     */
    setCreateThumbnail(createThumb: boolean): void;
}
