/**
 * Class that encapsulates audio playback.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/audioclip_dz
 */
declare class DzAudioClip extends DzRefCountedItem {

    /* Properties */

    /**
     * The current position of the audio clip from the start.
     */
    currentPosition: DzTime;

    /**
     * The name of the file the audio clip was loaded from (Read Only)
     */
    filename: string; // String

    /**
     * The length of the audio clip (Read Only)
     */
    length: DzTime;

    /**
     * The current rate multiplier for the audio clip
     */
    rate: number; // Number

    /* Methods */

    /**
     * Opens the file specified by filename and sets up the audio clip.
     * @param filename string - The name of the audio file to load.
     * @returns DzError true if the file was successfully opened, false otherwise;
     */
    openFile(filename: string): DzError;

    /**
     * Pauses the audio clip without resetting current position.
     */
    pause(): void;

    /**
     * Plays the audio clip from current position.
     */
    play(): void;

    /**
     * Resets the current position of the audio clip to the beginning.
     */
    reset(): void;
}
