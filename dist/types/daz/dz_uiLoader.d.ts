declare class DzUiLoader {
    name: string;	//
    objectName: string;	//
    addPluginPath(p0: QString): any;
    createLayout(p0: QString): any;
    createLayout(p0: QString, p1: QObject): any;
    createLayout(p0: QString, p1: QObject, p2: QString): any;
    createWidget(p0: QString, p1: QWidget): any;
    createWidget(p0: QString, p1: QWidget, p2: QString): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    inherits(): any;
    load(p0: QString): DzUiWidget;
    load(p0: QString, p1: DzWidget): DzUiWidget;
    setWorkingDirectory(p0: QString): any;
    availableLayouts(): QString[];
    availableWidgets(): QString[];
}