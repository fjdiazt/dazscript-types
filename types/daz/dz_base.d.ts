declare class DzBase extends DzSceneAsset {

    /* Properties */

    /* Methods */
    assertCast(className: string): DzBase;
    finishLoad(file: DzInFile): DzError;
    getClassFactory(): any;
    getName(): QString;
    iskindof(clname: QString): boolean;
    loadSection(file: DzInFile, sectionID: number): void;

    /**
     * Provides scripts a way to make objects persistent; i.e., so that Qt will not delete them when they are no longer referenced by the script. This allows object instances to be created in script, then passed into the core and remain after the script has finished execution.
     */
    makePersistent(): void;

    makePersistent(obj: QObject): void;
    nameChanged(name: QString): void;
    postLoadFile(file: DzInFile): void;
    save(file: DzOutFile): void;
    setName(newName: QString): void;
    setPointer(file: DzInFile, sectionID: number, pointerID: number, ptr: DzBase): void;
    setStorablePaths(path: QString): void;
    startLoad(file: DzInFile): void;
}