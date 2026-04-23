/**
 * Implements a basic reference counting mechanism.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/refcounteditem_dz
 */
declare class DzRefCountedItem {

    /* Undocumented Augment Members */

    /** @undocumented */
    getRefCount(): number;

    /** @undocumented */
    isShared(): boolean;

    /** @undocumented */
    isUnique(): boolean;

    /** @undocumented */
    ref(): void;

    /** @undocumented */
    unref(): void;
}
