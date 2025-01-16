declare class DzSaveFilterMgr extends QObject {

    /* Properties */
    UseExtension: number;
    TextScriptFile: number;
    DAZScriptFile: number;
    EncDAZScriptFile: number;

    /* Methods */
    writeFile(mode: number, fileName: QString, filterName: QString): DzError;
    writeFile(mode: number, fileName: QString, filterName: QString): DzError;
    doSave(filterIndex: number, dir: QString): DzError;
    doSave(filterIndex: number, dir: QString): DzError;
    getSavePath(): QString;
    getNumFilters(): number;
    getFilterName(i: number): QString;
    getFilter(i: number): DzSaveFilter;
    findFilter(className: QString): number;
}