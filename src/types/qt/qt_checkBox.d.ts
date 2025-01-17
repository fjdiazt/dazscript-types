declare class QCheckBox extends QAbstractButton {

    /* Properties */
    modal: boolean;
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    fullScreen: boolean;
    sizeHint: QObject;

    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;
    //text: string;
    //icon: QObject;
    //iconSize: QObject;
    //shortcut: QObject;
    checkable: boolean;
    checked: boolean;
    //autoRepeat: boolean;
    //autoExclusive: boolean;
    //autoRepeatDelay: number;
    //autoRepeatInterval: number;
    down: boolean;
    tristate: boolean;

    /* Methods */
    stateChanged(obj: number): void;
}