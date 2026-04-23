/**
 * Implements the loading and application of a morph.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/morphloader_dz
 */
declare class DzMorphLoader extends DzRefCountedItem {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of AttenuateMapType.
     */
    static WeightMap: number;

    /**
     * DAZ enum member of AttenuateMapType.
     */
    static FacetList: number;

    /**
     * DAZ enum member of AttenuateMapType.
     */
    static EdgeList: number;

    /**
     * DAZ enum member of AttenuateMapType.
     */
    static VertexList: number;

    /**
     * DAZ enum member of AttenuateMapType.
     */
    static UnknownMap: number;

    /**
     * DAZ enum member of LoadMode.
     */
    static EntireFigure: number;

    /**
     * DAZ enum member of LoadMode.
     */
    static SelectedNodes: number;

    /**
     * DAZ enum member of LoadMode.
     */
    static PrimaryNode: number;

    /**
     * DAZ enum member of LoadMode.
     */
    static SingleSkinFigure: number;

    /**
     * DAZ enum member of LoadMode.
     */
    static SingleSkinFigureFromGraft: number;

    /**
     * DAZ enum member of MirroringType.
     */
    static DoNotMirror: number;

    /**
     * DAZ enum member of MirroringType.
     */
    static XSwap: number;

    /**
     * DAZ enum member of MirroringType.
     */
    static XPosToNeg: number;

    /**
     * DAZ enum member of MirroringType.
     */
    static XNegToPos: number;

    /**
     * DAZ enum member of MirroringType.
     */
    static YSwap: number;

    /**
     * DAZ enum member of MirroringType.
     */
    static YPosToNeg: number;

    /**
     * DAZ enum member of MirroringType.
     */
    static YNegToPos: number;

    /**
     * DAZ enum member of MirroringType.
     */
    static ZSwap: number;

    /**
     * DAZ enum member of MirroringType.
     */
    static ZPosToNeg: number;

    /**
     * DAZ enum member of MirroringType.
     */
    static ZNegToPos: number;

    /**
     * DAZ enum member of OverwriteMode.
     */
    static MakeUnique: number;

    /**
     * DAZ enum member of OverwriteMode.
     */
    static DeltasAndERCLinks: number;

    /**
     * DAZ enum member of OverwriteMode.
     */
    static DeltasOnly: number;

    /* Constructors */

    constructor();

    /* Static Methods */

    /**
     * Gets the path for a given weight map context and a given node.
     * @param context DzWeightMapContext - The weight map context.
     * @param node DzNode - The node.
     * @returns string The path for the weight map context on node.
     */
    static getPathForContext(context: DzWeightMapContext, node: DzNode): string; // String

    /* Methods */

    /**
     * Attempts to load the “reverse deformations pose” file, if specified.
     * @returns boolean true if the file was loaded successfully, otherwise false.
     * @since 4.20.0.36
     */
    applyReverseDeformationsPose(): boolean; // Boolean

    /**
     * Creates a morph on a node for a geometry loaded from a file. This function supports morph creation from vertex-only geometries.
     * @param settings DzFileIOSettings - The settings to use for loading the geometry; i.e., the scale for the mesh, whether or not to swap the Y and Z coordinates of the mesh, etc.
     * @param node DzNode - The node containing the geometry to create the morph for.
     * @param onlyErrorsOrWarnings boolean - If true (default), only errors and warnings will be returned.
     * @param plainText boolean - If true (default), the returned string will be plain text, otherwise the returned string will contain HTML.
     * @returns string The log containing messages (if any) about the creation of the morph, otherwise an empty string.
     */
    createMorph(settings: DzFileIOSettings, node: DzNode, onlyErrorsOrWarnings?: boolean, plainText?: boolean): string; // String

    /**
     * Creates a morph on a node for a geometry. This function supports morph creation from vertex-only geometries.
     * @param mesh DzVertexMesh - The geometry with the morph information.
     * @param node DzNode - The node containing the geometry to create the morph for.
     * @param onlyErrorsOrWarnings boolean - If true (default), only errors and warnings will be returned.
     * @param plainText boolean - If true (default), the returned string will be plain text, otherwise the returned string will contain HTML.
     * @returns string The log containing messages (if any) about the creation of the morph, otherwise an empty string.
     * @since 4.15.0.6
     */
    createMorphFromMesh(mesh: DzVertexMesh, node: DzNode, onlyErrorsOrWarnings?: boolean, plainText?: boolean): string; // String

    /**
     * @returns number The strength that will be used for attenuating the effect of the morph being loaded on the vertices that reside along the boundary of the current geometric selection.
     */
    getAttenuateEdgeStrength(): number; // Number

    /**
     * @returns string The path to the map that will be used for attenuating the effect of the morph.
     */
    getAttenuateMapPath(): string; // String

    /**
     * @returns number The strength that the map used to attenuate the effect of the morph will be applied at.
     */
    getAttenuateStrength(): number; // Number

    /**
     * Gets whether or not orphans should be cleaned up when overwriting existing morphs. An 'orphan' is a morph by the same name that does not have any deltas from a new morph.
     * @returns boolean true if orphans are to be cleaned up when overwriting existing morphs, otherwise false.
     */
    getCleanUpOrphans(): boolean; // Boolean

    /**
     * @returns DzNode The node that the control property will be located on.
     */
    getControlNode(): DzNode;

    /**
     * @returns DzNumericProperty The property that will serve as the additional control property for the morph(s) created.
     */
    getControlProperty(): DzNumericProperty;

    /**
     * @returns string The custom label that will be used for secondary (non-control) properties.
     */
    getControlPropertyCustomLabel(): string; // String

    /**
     * @returns number The custom value for creating ERC links to the control property.
     */
    getControlPropertyERCCustomValue(): number; // Number

    /**
     * @returns number The ERC type to use when connecting secondary properties to the control property.
     */
    getControlPropertyERCType(): number; // DzERCLink::ERCType

    /**
     * @returns boolean true if a custom value will be used for the ERC links to the control property, otherwise false.
     */
    getControlPropertyERCUseCustomValue(): boolean; // Boolean

    /**
     * @returns boolean true if a custom label will be used for the secondary (non-control) properties, otherwise false.
     */
    getControlPropertyUseCustomLabel(): boolean; // Boolean

    /**
     * @returns boolean true if the loader will create and use ERC links to an additional control property.
     */
    getCreateControlProperty(): boolean; // Boolean

    /**
     * Gets the minimum amount of deviation from the original position of a given vertex that will be recorded in the morph.
     * @returns number The minimum amount of deviation from the original position of a given vertex to be recorded in the morph.
     */
    getDeltaTolerance(): number; // Number

    /**
     * @returns string The name to display for this collection of settings.
     * @since 4.15.0.7
     */
    getDisplayName(): string; // String

    /**
     * @returns string The full path to the file that this morph will load its geometry from.
     */
    getFilename(): string; // String

    /**
     * @returns boolean true if secondary (non-control) properties are hidden, otherwise false.
     */
    getHideSecondaryProperties(): boolean; // Boolean

    /**
     * Gets the type of mirroring to apply.
     * @returns number The type of mirroring that will be applied to the morph.
     */
    getMorphMirroring(): number; // MirroringType

    /**
     * @returns string The name of the morph(s) that will be created by this morph loader.
     */
    getMorphName(): string; // String

    /**
     * @returns number true if an existing morph by the same name will be replaced, otherwise false.
     */
    getOverwriteExisting(): number; // OverwriteMode

    /**
     * @returns boolean true if existing deltas in a morph by the same name be preserved, otherwise false.
     */
    getPreserveExistingDeltas(): boolean; // Boolean

    /**
     * @returns string The path of the property group that morph value properties will be added to.
     */
    getPropertyGroupPath(): string; // String

    /**
     * @returns boolean true if joint deformations and other modifiers will be reversed from the current world-space geometry to calculate the deltas, otherwise false.
     */
    getReverseDeformations(): boolean; // Boolean

    /**
     * @returns string The path of the native file to load/apply before a morph is loaded.
     */
    getReverseDeformationsPose(): string; // String

    /**
     * @param node DzNode - The node to check for the morph.
     * @returns boolean true if the morph of the same name already exists, otherwise false.
     */
    morphAlreadyExists(node: DzNode): boolean; // Boolean

    /**
     * Reads common object settings from a configuration file (*.dsx).
     * @param filename string - The full path of the file to read.
     * @returns boolean true if the file was successfully read, otherwise false.
     * @since 4.9.3.47
     */
    readObjectCommonSettingsFromConfigFile(filename: string): boolean; // Boolean

    /**
     * Reads the settings of the first object in a configuration file (*.dsx).
     * @param filename string - The name of the file to read.
     * @param filePath string - The path of the directory that the file to read is in.
     * @returns boolean true if the read was successful, otherwise false. (since 4.15.0.4)
     * @since 4.9.3.47
     */
    readObjectSettingsFromConfigFile(filename: string, filePath: string): boolean; // Boolean

    /**
     * Saves object settings to a configuration file (*.dsx).
     * @param filename string - The full path of the file to write to.
     * @param projectPath string - The full path of the directory containing the files of a project.
     * @param saveProjectRelative boolean
     * @returns boolean true if the save was successful, otherwise false. (since 4.15.0.4)
     * @since 4.9.3.47
     */
    saveObjectSettingsToConfigFile(filename: string, projectPath: string, saveProjectRelative: boolean): boolean; // Boolean

    /**
     * Sets the strength to use for attenuating the effect of the morph on the vertices that reside along the boundary of the current geometric selection.
     * @param val number - The strength value to set. A value of 0 yields no (0%) attenuation. A value of 1 yields full (100%) attenuation. Values between 0 and 1 yield attenuation that is commensurate with the specified value.
     */
    setAttenuateEdgeStrength(val: number): void;

    /**
     * Sets the path to the map used to attenuate the effect of the morph.
     * @param mapPath string - The path to the map.
     */
    setAttenuateMapPath(mapPath: string): void;

    /**
     * Sets the strength to apply the map used to attenuate the effect of the morph.
     * @param val number - The strength value to set. A value of 1.0 will cause the values in the map to be applied at their full respective values. A value of 0.0 will cause the values in the map to not be applied. A value of -1.0 will cause the values in the map to be inverted and applied at the opposite of their full respective values.
     */
    setAttenuateStrength(val: number): void;

    /**
     * Sets whether or not orphans should be cleaned up when overwriting existing morphs. An 'orphan' is a morph by the same name that does not have any deltas from a new morph.
     * @param onOff boolean - If true, orphans will be cleaned up.
     */
    setCleanUpOrphans(onOff: boolean): void;

    /**
     * Sets the node that the control property will be located on.
     * @param node DzNode - The node that will own the control property.
     */
    setControlNode(node: DzNode): void;

    /**
     * Sets the property that will serve as the additional control property for the morph(s) created by this loader.
     * @param prop DzNumericProperty - The control property for the new morph(s).
     */
    setControlProperty(prop: DzNumericProperty): void;

    /**
     * Sets the custom label that will be used for secondary (non-control) properties.
     * @param label string - The custom label to use for the secondary (non-control) properties.
     */
    setControlPropertyCustomLabel(label: string): void;

    /**
     * Sets the custom value for creating ERC links to the control property.
     * @param val number - The custom multiplier for the ERC links that are created to the control property.
     */
    setControlPropertyERCCustomValue(val: number): void;

    /**
     * Sets the ERC link type to use when connecting secondary properties to the control property.
     * @param type number - The ERC link type to use when connecting secondary properties to the control property.
     */
    setControlPropertyERCType(type: number): void;

    /**
     * Sets whether or not a custom value will be used for the ERC links to the control property.
     * @param onOff boolean - If true, a custom value will be used for the links to the control property. Otherwise the default 1:1 ratio is assumed.
     */
    setControlPropertyERCUseCustomValue(onOff: boolean): void;

    /**
     * Sets whether or not a custom label will be used for the secondary (non-control) properties.
     * @param onOff boolean - If true, a custom label will be used for the secondary (non-control) properties. Otherwise the default label is used.
     */
    setControlPropertyUseCustomLabel(onOff: boolean): void;

    /**
     * Sets whether or not the loader will use and create ERC links to an additional control property.
     * @param onOff boolean - If true, the loader will create links to an additional control property, otherwise, settings for the additional control property will be ignored.
     */
    setCreateControlProperty(onOff: boolean): void;

    /**
     * Sets the minimum amount of deviation from the original position of a given vertex that will be recorded in the morph.
     * @param val number - The minimum amount of deviation from the original position of a given vertex to be recorded in the morph.
     */
    setDeltaTolerance(val: number): void;

    /**
     * Sets the name to display for this collection of settings.
     * @param name string - The name to be displayed.
     * @since 4.15.0.7
     */
    setDisplayName(name: string): void;

    /**
     * Sets the file to read the geometry from.
     * @param filename string - The full path of the file to load this morph's geometry from.
     */
    setFilename(filename: string): void;

    /**
     * Sets whether or not secondary (non-control) properties are hidden.
     * @param onOff boolean - If true, secondary (non-control) properties will be set as hidden.
     */
    setHideSecondaryProperties(onOff: boolean): void;

    /**
     * Sets the mode to load the morph for node.
     * @param mode number - The mode to set for the morph being loaded.
     * @param node DzNode - The node with the geometry that the morph is being loaded for.
     * @returns boolean true if mode can be set for node, otherwise false.
     */
    setLoadMode(mode: number, node: DzNode): boolean; // bool

    /**
     * Sets the type of mirroring to apply to the morph.
     * @param type number - The type of mirroring to apply to the morph.
     */
    setMorphMirroring(type: number): void;

    /**
     * Sets the name of the morph(s) that will be created by this morph loader.
     * @param name string - The name for the DzMorph object(s) that will be created by this loader.
     */
    setMorphName(name: string): void;

    /**
     * Sets whether or not to override/replace existing morphs with the same name.
     * @param mode number - If true, existing morphs on the node(s) with the same name will be replaced by the loaded morph.
     */
    setOverwriteExisting(mode: number): void;

    /**
     * Sets whether or not to preserve existing deltas in a morph by the same name.
     * @param onOff boolean
     */
    setPreserveExistingDeltas(onOff: boolean): void;

    /**
     * Sets the property group that morph value properties will be added to.
     * @param path string - The path of the property group that value properties from the morph(s) created by this loader will be assigned to.
     */
    setPropertyGroupPath(path: string): void;

    /**
     * Sets whether or not joint deformations and other modifiers will be reversed before calculating deltas.
     * @param onOff boolean - If true, joint deformations and other modifiers will be reversed from the current world-space geometry to calculate the deltas. If false, the deltas will be calculated from the base geometry.
     */
    setReverseDeformations(onOff: boolean): void;

    /**
     * Sets the path of a native file to load/apply immediately before a morph is loaded.
     * @param filePath string - The path of the file to be loaded.
     */
    setReverseDeformationsPose(filePath: string): void;

    /* Signals */

    /**
     * @param onOff boolean
     */
    applyAfterJointChanged: ISignal<boolean>;

    attenuateChanged: ISignal<void>;

    /**
     * @param strength number
     */
    attenuateEdgeStrengthChanged: ISignal<number>;

    /**
     * @param strength number
     */
    attenuateStrengthChanged: ISignal<number>;

    /**
     * @param node DzNode
     */
    controlNodeChanged: ISignal<DzNode>;

    /**
     * @param prop DzNumericProperty
     */
    controlPropertyChanged: ISignal<DzNumericProperty>;

    /**
     * @param onOff boolean
     */
    createControlPropertyChanged: ISignal<boolean>;

    /**
     * @param val number
     */
    deltaToleranceChanged: ISignal<number>;

    /**
     * @param val number
     */
    ercCustomValueChanged: ISignal<number>;

    /**
     * Emitted when the filename has changed.
     * @param name string - The new name of the file.
     */
    filenameChanged: ISignal<string>;

    /**
     * @param onOff boolean
     */
    hideSecondaryChanged: ISignal<boolean>;

    /**
     * @param mirroring number
     */
    mirroringChanged: ISignal<number>;

    /**
     * Emitted when the morph name has changed.
     * @param name string - The new name of the morph.
     */
    morphNameChanged: ISignal<string>;

    /**
     * @param value number
     */
    overwriteExistingChanged: ISignal<number>;

    /**
     * @param onOff boolean
     */
    preserveExistingDeltasChanged: ISignal<boolean>;

    /**
     * Emitted when the path of the property group has changed.
     * @param path string
     */
    propertyGroupPathChanged: ISignal<string>;

    /**
     * @param onOff boolean
     */
    reverseDeformationsChanged: ISignal<boolean>;

    /**
     * @param label string
     */
    secondaryLabelChanged: ISignal<string>;

    /**
     * @param onOff boolean
     */
    useErcCustomValueChanged: ISignal<boolean>;

    /**
     * @param onOff boolean
     */
    useSecondaryLabelChanged: ISignal<boolean>;
}
