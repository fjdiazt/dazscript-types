/**
 * Class that encapsulates a simple video clip with per frame images.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/videoclip_dz
 */
declare class DzVideoClip extends QObject {

    /* Constructors */

    constructor();

    /**
     * @param width number
     * @param height number
     * @param rate number
     */
    constructor(width: number, height: number, rate: number);

    /* Methods */

    /**
     * Adds a frame to the end of the clip
     * @param img DzImage - Image to add as a frame.
     */
    appendFrame(img: DzImage): void;

    /**
     * Adds a frame to the end of the clip
     * @param imgFilename string
     */
    appendFrameFile(imgFilename: string): void;

    /**
     * @returns DzAudioClip The audio (if any) that is associated with the video.
     */
    getAudio(): DzAudioClip;

    /**
     * @returns DzTime The time offset from the beginning of the video that the audio clip begins. This can be negative (the beginning of the video starts part way into the audio clip).
     */
    getAudioStartTime(): DzTime;

    /**
     * @param i number
     * @returns DzImage The i'th frame in still image form
     */
    getFrame(i: number): DzImage;

    /**
     * @returns number The number of frames per second for the clip
     */
    getFrameRate(): number; // Number

    /**
     * @returns number The height of the video clip.
     */
    getHeight(): number; // Number

    /**
     * @returns number The number of frames in the video clip.
     */
    getNumFrames(): number; // Number

    /**
     * @returns number The width of the video clip.
     */
    getWidth(): number; // Number

    /**
     * Set the audio that accompanies the video clip
     * @param audio DzAudioClip - The audio clip for the video.
     * @param audioStartTime DzTime - The time offset from the beginning of the video that the audio clip begins. This can be negative (the beginning of the video starts part way into the audio clip).
     */
    setAudio(audio: DzAudioClip, audioStartTime: DzTime): void;

    /**
     * Set the frame rate of the clip
     * @param rate number - The number of frames per second for the clip
     */
    setFrameRate(rate: number): void;
}
