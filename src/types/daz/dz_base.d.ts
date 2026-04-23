/**
 * Base class for a considerable portion of the Daz Studio API.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/base_dz
 */
declare class DzBase extends QObject {

    /* Methods */

    /**
     * Provides scripts a way to make objects persistent; i.e., so that Qt will not delete them when they are no longer referenced by the script. This allows object instances to be created in script, then passed into the core and remain after the script has finished execution.
     */
    makePersistent(): void;

    /* Signals */

    /**
     * Emitted when the internal name of the object has changed.
     * @param name string - The new name of the object.
     */
    nameChanged: ISignal<string>;

    /* Undocumented Augment Members */

    /** @undocumented */
    assertCast(className: string): DzBase;

    /** @undocumented */
    finishLoad(file: DzInFile): DzError;

    /** @undocumented */
    getClassFactory(): any;

    /** @undocumented */
    getName(): QString;

    /** @undocumented */
    iskindof(clname: QString): boolean;

    /** @undocumented */
    loadSection(file: DzInFile, sectionID: number): void;

    /** @undocumented */
    postLoadFile(file: DzInFile): void;

    /** @undocumented */
    save(file: DzOutFile): void;

    /** @undocumented */
    setName(newName: QString): void;

    /** @undocumented */
    setPointer(file: DzInFile, sectionID: number, pointerID: number, ptr: DzBase): void;

    /** @undocumented */
    setStorablePaths(path: QString): void;

    /** @undocumented */
    startLoad(file: DzInFile): void;
}
