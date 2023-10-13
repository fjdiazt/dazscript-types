declare class DzHelpMgr extends QObject {

    /* Properties */

    /* Methods */
    browseToPage(page: QString): void;
    //browseToUrl(urlString: QString, provided: \/\/): void;
    browseToUrl(url: QUrl): void;
    browseToKeyword(keyword: QString): void;
    browseToIdentifier(identifier: QString): void;
    getNumKeywords(): number;
    getKeyword(which: number): QString;
    getKeywordUrl(which: number): QUrl;
    findKeywordUrl(keyword: QString): QUrl;
    getNumIdentifiers(): number;
    getIdentifier(which: number): QString;
    getIdentifierUrl(which: number): QUrl;
    findIdentifierUrl(id: QString): QUrl;
    getHelpContents(): DzHelpContentsItem;
    getNumFilters(): number;
    getFilterName(which: number): QString;
    getFilterAttributes(which: number): String[];
    findFilterAttributes(name: QString): String[];
    getHelpItemLabels(): String[];
    hasHelpItem(label: QString): boolean;
    isHelpItemUsed(label: QString): boolean;
    getGroup(label: QString): QString;
    getDescription(label: QString): QString;
    getToolTip(label: QString): QString;
    getStatusTip(label: QString): QString;
    getHelpString(label: QString): QString;
    setHelpItem(label: QString, group: QString, description: QString): void;
    setGroup(label: QString, group: QString): void;
    setDescription(label: QString, description: QString): void;
    setToolTip(label: QString, toolTip: QString): void;
    setStatusTip(label: QString, statusTip: QString): void;
    setHelpString(label: QString, helpString: QString): void;
    renameHelpItem(oldLabel: QString, newLabel: QString): boolean;
    removeHelpItem(label: QString): boolean;
    saveInlineHelp(filename: QString): DzError;
    updateHelp(a: DzAction): void;
    updateHelp(w: QWidget): void;
    updateHelp(a: DzAction): void;
    updateHelp(w: QWidget): void;
}