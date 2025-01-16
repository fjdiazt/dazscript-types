declare class DzAction extends QObject {
    actionGroup: string; // Scene Hierarchy
    autoRepeat: boolean;
    checkable: boolean;
    checked: boolean;
    defaultMenu: string; // DzHierarchyPane::Edit
    defaultMenus: any[]; // DzHierarchyPane::Edit
    defaultToolBar: string;
    defaultToolBars: QObject;
    defaultShortcut: string;
    description: string;
    iconFile: String;
    iconText: string;
    iconVisibleInMenu: boolean;
    shortcut: String;
    statusTip: string;
    styleIcon: number;
    text: string;
    toolTip: string;
    triggerSettings: Object;
    visible: boolean;
    whatsThis: string;

    enabled: boolean | ISignal;

    hover(): void;
    setChecked(onOff: boolean): void;
    setDisabled(onOff: boolean): void
    setEnabled(onOff: boolean): void;
    setVisible(onOff: boolean): void;
    toggle(): void;;
    trigger(): void;
    setOn(onOff: boolean): void;
    setOff(onOff: boolean): void;
    triggerWithSettings(settings: Object): void;

    changed(): void;
    hovered: ISignal;
    preExecute: ISignal;
    toggled(checked?: boolean): any;
    triggered(checked?: boolean): any;
}