/**
 * Allows drawing three dimensional debugging information in the scene.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/debugviewutil_dz
 */
declare class DzDebugViewUtil extends QObject {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Adds a line to the specified channel.
     * @param channel number - The index of the channel to add the line to.
     * @param startPosWS DzVec3 - The world space starting position of the line to add.
     * @param endPosWS DzVec3 - The world space ending position of the line to add.
     */
    addLine(channel: number, startPosWS: DzVec3, endPosWS: DzVec3): void;

    /**
     * Adds a point to the specified channel.
     * @param channel number - The index of the channel to add the point to.
     * @param posWS DzVec3 - The world space position of the point to add.
     */
    addPoint(channel: number, posWS: DzVec3): void;

    /**
     * Clears the point and line channels for this object (i.e., local).
     */
    clearChannels(): void;

    /**
     * Clears the point and line channels for this object from the scene (i.e., global).
     */
    clearChannelsFromScene(): void;

    /**
     * Creates a channel to use for drawing lines in the scene.
     * @param channel number - The index of the channel.
     * @param color Color - The color to use when drawing the channel.
     * @param range DzTimeRange - The range of time to draw this channel.
     */
    createLineChannel(channel: number, color: Color, range?: DzTimeRange): void;

    /**
     * Creates a channel to use for drawing points in the scene.
     * @param channel number - The index of the channel.
     * @param color Color - The color to use when drawing the channel.
     * @param range DzTimeRange - The range of time to draw this channel.
     */
    createPointChannel(channel: number, color: Color, range?: DzTimeRange): void;

    /**
     * Posts the point and line channel data for this object (i.e., local) to the scene (i.e., global).
     */
    postDebugData(): void;
}
