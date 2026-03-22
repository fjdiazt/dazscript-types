declare class DzSimpleElementData {
    // Properties
    objectName: string; // TEST
    name: string; // TEST

    constructor(name: string, persistent: boolean);

    // Methods
    addedToElement(owner: DzElement): DzElementData;
    getSettings(): DzSettings;

    className(): any;
    deleteLater(): any;
    duplicate(p0: DzElement): any;
    getName(): any;
    getOwner(): any;
    inherits(p0: string): any;
    isPersistent(): any;
    iskindof(p0: string): any;
    makePersistent(): any;

    // Signals
    nameChanged(p0: string): any;
    removedFromElement(p0: DzElement): any;
    elementDeleting(p0: DzElement): any;
    destroyed(): any;
    destroyed(p0: QObject): any;
}