/**
 * DAZScript combobox widget with a custom popup designed for choosing a DzProperty.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/propertyselectioncombobox_dz
 */
declare class DzPropertySelectionComboBox extends DzWidget {

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Methods */

    /**
     * Clears the selection of any properties.
     * @since 4.10.0.27
     */
    clearPropertySelection(): void;

    /**
     * @returns any[] A list of the properties to be excluded in the popup.
     */
    getExcludeList(): any[]; // Array

    /**
     * @returns any[] A list of the nodes to be shown in the popup.
     */
    getNodes(): any[]; // Array

    /**
     * @returns DzProperty The selected property.
     */
    getSelectedProperty(): DzProperty;

    /**
     * Hide the popup.
     */
    hidePopup(): void;

    /**
     * Sets whether the popup should display rigging properties, regardless of their existence in the exclude list.
     * @param onOff boolean
     */
    setEditMode(onOff: boolean): void;

    /**
     * Sets the properties to be excluded in the popup.
     * @param properties any[] - The list of properties to exclude.
     */
    setExcludeList(properties: any[]): void;

    /**
     * Sets whether the popup should filter non-morph properties from the list.
     * @param onOff boolean
     */
    setMorphOnly(onOff: boolean): void;

    /**
     * Sets the node from the scene to be shown in the popup.
     * @param node DzNode - The DzNode to show properties for.
     */
    setNode(node: DzNode): void;

    /**
     * Sets the nodes from the scene to be shown in the popup.
     * @param nodes any[] - A list of the DzNode objects to show properties for.
     */
    setNodes(nodes: any[]): void;

    /**
     * Sets whether the popup should filter non-numeric properties from the list.
     * @param onOff boolean
     */
    setNumericOnly(onOff: boolean): void;

    /**
     * Sets the height of the popup to height.
     * @param height number
     */
    setPopUpHeight(height: number): void;

    /**
     * Sets the minimum width of the popup to width.
     * @param width number
     */
    setPopUpMinWidth(width: number): void;

    /**
     * Sets whether the popup should filter non-private properties from the list.
     * @param onOff boolean
     * @since 4.10.0.23
     */
    setPrivateOnly(onOff: boolean): void;

    /**
     * Sets whether the popup should filter non-public properties from the list.
     * @param onOff boolean
     * @since 4.10.0.23
     */
    setPublicOnly(onOff: boolean): void;

    /**
     * Sets the property to be selected.
     * @param prop DzProperty - The property to select.
     */
    setSelectedProperty(prop: DzProperty): void;

    /**
     * Sets whether the popup should display hidden properties.
     * @param onOff boolean
     */
    setShowHidden(onOff: boolean): void;

    /**
     * Sets whether the popup should filter non-transform properties from the list.
     * @param onOff boolean
     * @since 4.10.0.23
     */
    setTransformOnly(onOff: boolean): void;

    /**
     * Display the popup.
     */
    showPopup(): void;

    /* Signals */

    /**
     * Emitted when the selected DzProperty changes.
     */
    propertySelectionChanged: ISignal<void>;
}
