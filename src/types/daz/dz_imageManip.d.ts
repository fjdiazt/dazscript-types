/**
 * The base class for image manipulators. (deprecated).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/imagemanip_dz
 */
declare class DzImageManip extends QObject {

    /* Methods */

    /**
     * @returns string The description of the manipulator that will be displayed to the user.
     */
    getDescription(): string; // String

    /**
     * Applies the manipulator to img.
     * @param img DzImage - The image to apply the manipulation to.
     */
    manipulate(img: DzImage): void;

    /* Signals */

    /**
     * Emitted when the value of the manipulator has changed and it needs to be reapplied.
     */
    manipulationChanged: ISignal<void>;
}
