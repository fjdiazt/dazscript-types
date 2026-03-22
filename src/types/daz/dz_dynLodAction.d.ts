declare class DzDynLodAction extends DzAction {

    checkable: boolean; // false
    checked: boolean; // false

    icon: QObject; // QVariant(QIcon)
    text: string; // Add Level of Detail...
    iconText: string; // Add Level of Detail
    toolTip: string; // Add Level of Detail
    statusTip: string; //
    whatsThis: string; //
    font: QObject; // [object object]
    shortcutContext: number; // 2
    autoRepeat: boolean; // true
    visible: boolean; // true
    menuRole: number; // 1
    softKeyRole: number; // 0
    iconVisibleInMenu: boolean; // true
    priority: number; // 128

    executeAction(): any;
    toggleAction(flag: boolean): any;
    addLodLevel(node: DzNode, s1: string, s2: string, importer?: DzGeometryImporter, settings?: DzFileIOSettings): any;
    addLodLevel(node: DzNode, facetShape: DzFacetShape, s: string): any;

    static NoRole: number; // 0
    static TextHeuristicRole: number; // 1
    static ApplicationSpecificRole: number; // 2
    static AboutQtRole: number; // 3
    static AboutRole: number; // 4
    static PreferencesRole: number; // 5
    static QuitRole: number; // 6
    static NoSoftKey: number; // 0
    static PositiveSoftKey: number; // 1
    static NegativeSoftKey: number; // 2
    static SelectSoftKey: number; // 3
    static LowPriority: number; // 0
    static NormalPriority: number; // 128
    static HighPriority: number; // 256
}