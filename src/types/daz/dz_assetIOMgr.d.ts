declare class DzAssetIOMgr extends QObject {

    /* Properties */
    DefaultMethod: number;
    OpenNew: number;
    MergeFile: number;

    /* Methods */
    assetImportStarting(): void;
    assetImported(): void;
    assetSaved(): void;
    doLoad(filePath: QString, open: DzOpenMethod, filter: DzFileLoadFilter): DzError;
    doLoad(filePath: QString, open: DzOpenMethod, filter: DzFileLoadFilter): DzError;
    doLoad(filePath: QString, open: DzOpenMethod, filter: DzFileLoadFilter): DzError;
    doScopedLoad(): any; // TODO ;
    doScopedLoad(): any; // TODO ;
    doSave(filter: DzAssetIOFilter, filePath: QString, saveOnly: boolean, dir: QString): DzError;
    doSave(filterIndex: number): DzError;
    doSave(filterIndex: number, filePath: QString, dir: QString, category: QString): DzError;
    doSave(filter: DzAssetIOFilter, filePath: QString, saveOnly: boolean, dir: QString): DzError;
    doSave(filterIndex: number): DzError;
    doSave(filterIndex: number, filePath: QString, dir: QString, category: QString): DzError;
    doSave(filter: DzAssetIOFilter, filePath: QString, saveOnly: boolean, dir: QString): DzError;
    doSave(filterIndex: number): DzError;
    doSave(filterIndex: number, filePath: QString, dir: QString, category: QString): DzError;
    doSave(filter: DzAssetIOFilter, filePath: QString, saveOnly: boolean, dir: QString): DzError;
    doSave(filterIndex: number): DzError;
    doSave(filterIndex: number, filePath: QString, dir: QString, category: QString): DzError;
    doSave(filter: DzAssetIOFilter, filePath: QString, saveOnly: boolean, dir: QString): DzError;
    doSave(filterIndex: number): DzError;
    doSave(filterIndex: number, filePath: QString, dir: QString, category: QString): DzError;
    doSave(filter: DzAssetIOFilter, filePath: QString, saveOnly: boolean, dir: QString): DzError;
    doSave(filterIndex: number): DzError;
    doSave(filterIndex: number, filePath: QString, dir: QString, category: QString): DzError;
    doSave(filter: DzAssetIOFilter, filePath: QString, saveOnly: boolean, dir: QString): DzError;
    doSave(filterIndex: number): DzError;
    doSave(filterIndex: number, filePath: QString, dir: QString, category: QString): DzError;
    doSaveWithOptions(filter: DzAssetIOFilter, options: DzFileIOSettings, saveOnly?: boolean, fileName?: string, startingDir?: string, category?: string): DzError;
    doSceneSave(filePath: QString, category: QString): DzError;
    doSceneSave(filePath: QString, category: QString): DzError;
    doSceneSaveAs(): DzError;
    doSceneSaveAs(filePath: QString, startingDir: QString, category: QString): DzError;
    doSceneSaveAs(): DzError;
    doSceneSaveAs(filePath: QString, startingDir: QString, category: QString): DzError;
    doSceneSaveAs(): DzError;
    doSceneSaveAs(filePath: QString, startingDir: QString, category: QString): DzError;
    doSceneSaveAs(): DzError;
    doSceneSaveAs(filePath: QString, startingDir: QString, category: QString): DzError;
    getSavePath(): QString;
    getLoadPath(): QString;
    getDSONAssetCachePath(): QString;
    setDSONAssetCachePath(cacheFullPath: QString): void;
    getDefaultDSONAssetCachePath(): QString;
    getNumFilters(): number;
    getFilterName(i: number): QString;
    getFilter(i: number): DzAssetIOFilter;
    findFilter(className: QString): number;
}