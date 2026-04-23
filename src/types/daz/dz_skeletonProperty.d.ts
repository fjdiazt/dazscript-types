/**
 * A non-animatable skeleton property.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/skeletonproperty_dz
 */
declare class DzSkeletonProperty extends DzNodeProperty {

    /* Constructors */

    constructor();

    /**
     * @param name string
     * @param canAnimate boolean
     * @param isUserProperty boolean
     */
    constructor(name: string, canAnimate: boolean, isUserProperty: boolean);

    /* Methods */

    /**
     * @returns DzSkeleton The value of the property, NULL if no skeleton is selected.
     */
    getSkeletonValue(): DzSkeleton;
}
