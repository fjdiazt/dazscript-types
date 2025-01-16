declare class DzPropertySelectionComboBox extends DzWidget {

    // Methods
    clearPropertySelection(): any;
    getExcludeList(): DzProperty[];
    getNodes(): DzNode[];
    getSelectedProperty(): DzProperty;
    hidePopup(): void;
    setEditMode(p0: boolean): any;
    setExcludeList(p0: DzProperty[]): any;
    setMorphOnly(p0: boolean): any;
    setNode(p0: DzNode): any;
    setNodes(p0: DzNode[]): any;
    setNumericOnly(p0: boolean): any;
    setPopUpHeight(p0: number): any;
    setPopUpMinWidth(p0: number): any;
    setPrivateOnly(p0: boolean): any;
    setPublicOnly(p0: boolean): any;
    setSelectedProperty(p0: DzProperty): any;
    setShowHidden(p0: boolean): any;
    setTransformOnly(p0: boolean): any;
    showPopup(): any;

    // Signals
    propertySelectionChanged: ISignal;
}