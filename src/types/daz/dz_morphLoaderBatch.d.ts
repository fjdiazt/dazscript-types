/**
 * Implements the loading and application of a batch of morphs.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/morphloaderbatch_dz
 */
declare class DzMorphLoaderBatch extends QObject {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Adds a morph to the list to load.
     * @param filename string - The filename of the object configuration file to load.
     * @since 4.9.3.47
     */
    addFromConfigFile(filename: string): void;

    /**
     * Adds a morph to the list to load.
     * @param file string - The filename of the morph file to load.
     */
    addFromFile(file: string): void;

    /**
     * Adds a list of morphs to the list to load.
     * @param files any[] - A list of the filenames of the morph files to load.
     */
    addFromFiles(files: any[]): void;

    /**
     * Adds a morph to the list to load.
     * @param mesh DzVertexMesh - The vertex mesh with the morph to load.
     */
    addFromMesh(mesh: DzVertexMesh): void;

    /**
     * Adds a morph to the list to load.
     * @param morph DzMorphLoader - The morph to add.
     */
    addMorph(morph: DzMorphLoader): void;

    /**
     * Clears the list of morphs to load.
     */
    clear(): void;

    /**
     * Creates morphs on a node for geometry loaded from files. This function supports morph creation from vertex-only geometries.
     * @param settings DzFileIOSettings - The scale to apply to the geometry that is read from the file.
     * @param node DzNode - The node containing the geometry to create the morph for.
     * @param onlyErrorsOrWarnings boolean - If true (default), only errors and warnings will be returned.
     * @param plainText boolean - If true (default), the returned string will be plain text, otherwise the returned string will contain HTML.
     * @returns string The log containing messages about the creation of the morph.
     */
    createMorphs(settings: DzFileIOSettings, node: DzNode, onlyErrorsOrWarnings?: boolean, plainText?: boolean): string; // String

    /**
     * Creates morphs on a node provided by a geometry. This function supports morph creation from vertex-only geometries.
     * @param mesh DzVertexMesh - The geometry for the morphs.
     * @param node DzNode - The node containing the geometry to create the morphs for.
     * @param onlyErrorsOrWarnings boolean - If true (default), only errors and warnings will be returned.
     * @param plainText boolean - If true (default), the returned string will be plain text, otherwise the returned string will contain HTML.
     * @returns string The log containing messages about the creation of the morphs.
     * @since 4.20.1.36
     */
    createMorphsFromMesh(mesh: DzVertexMesh, node: DzNode, onlyErrorsOrWarnings?: boolean, plainText?: boolean): string; // String

    /**
     * @param morph DzMorphLoader - The morph to find.
     * @returns number The index of the found morph (if any), otherwise -1.
     */
    findMorph(morph: DzMorphLoader): number; // Number

    /**
     * @param index number - The index of the morph to get.
     * @returns DzMorphLoader The morph in the list at the given index (if valid), otherwise Null.
     */
    getMorph(index: number): DzMorphLoader;

    /**
     * @returns DzNode The node with the object that morphs will be loaded for (if set), otherwise NULL.
     */
    getNode(): DzNode;

    /**
     * @returns number The number of morphs in the list to load.
     */
    getNumMorphs(): number; // Number

    /**
     * Moves the position of a morph in the list.
     * @param morph DzMorphLoader - The morph to move.
     * @param upDown boolean - If true, the morph is moved to the position earlier in the list. If false, the morph is moved to the position later in the list.
     */
    moveMorph(morph: DzMorphLoader, upDown: boolean): void;

    /**
     * @returns string The filename of the preset configuration file to use (if any) to setup a morph added from file, otherwise an empty string.
     */
    presetConfigurationFile(): string; // String

    /**
     * Removes a morph from the list to load.
     * @param morph DzMorphLoader - The morph to remove.
     */
    removeMorph(morph: DzMorphLoader): void;

    /**
     * Saves project (and potentially object) settings to configuration files (*.dsx).
     * @param filename string - The full path of the file to write to.
     * @param saveRelative boolean - If true, object settings files are saved relative to the project file. If false, object settings files are saved adjacent to their respective source.
     * @param saveObjects boolean - If true, object settings will be saved to their respective files. If false, object settings files are not saved.
     * @returns boolean true if the save was successful, otherwise false. (since 4.15.0.4)
     * @since 4.9.3.47
     */
    saveProjectSettingsToConfigFile(filename: string, saveRelative: boolean, saveObjects: boolean): boolean; // Boolean

    /**
     * Sets the node with the object to load morphs for.
     * @param node DzNode - The node to set.
     */
    setNode(node: DzNode): void;

    /**
     * Sets the filename of a preset configuration file to use to setup morphs that are added to the list from file.
     * @param filename string - The filename of the preset configuration file to use.
     */
    setPresetConfigurationFile(filename: string): void;

    /**
     * Sets whether or not a preset configuration file should be used to setup morphs that are added from file.
     * @param onOff boolean - If true, a preset configuration file should be used.
     */
    setUsePresetConfiguration(onOff: boolean): void;

    /**
     * @returns boolean true if a preset configuration file should be used to setup morphs that are added from file, otherwise false.
     */
    usePresetConfiguration(): boolean; // Boolean

    /* Signals */

    /**
     * @param morph DzMorphLoader
     */
    morphAdded: ISignal<DzMorphLoader>;

    morphListChanged: ISignal<void>;

    /**
     * @param srcIdx number
     * @param destIdx number
     */
    morphMoved: ISignal<number, number>;

    /**
     * @param morph DzMorphLoader
     * @param formerIndex number
     */
    morphRemoved: ISignal<DzMorphLoader, number>;
}
