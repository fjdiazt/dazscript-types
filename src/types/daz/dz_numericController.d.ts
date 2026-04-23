/**
 * Base class for controllers that operate on DzNumericProperty types.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/numericcontroller_dz
 */
declare class DzNumericController extends DzController {

    /* Methods */

    /**
     * This function is called to apply the controller to the numeric property that it controls.
     * @param val number - The raw value of the property
     * @param tm DzTime - The scene time at which the controller is being evaluated
     * @param local boolean
     * @returns number The final value for the property
     */
    apply(val: number, tm: DzTime, local: boolean): number; // Number

    /**
     * This function is called to 'unapply' the controller to the numeric property that it controls.
     * @param val number - The final value of the property
     * @param tm DzTime - The scene time at which the controller is being evaluated
     * @param local boolean
     * @returns number The raw value for the property
     */
    applyInverse(val: number, tm: DzTime, local: boolean): number; // Number
}
