declare class QDialog extends QWidget {

    /* Properties */
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
    sizePolicy: QObject;
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
    sizeGripEnabled: boolean;
    modal: boolean;

    /* Methods */
    setVisible(visible: boolean): void;
    finished(result: number): void;
    accepted(): void;
    rejected(): void;
    open(): void;
    exec(): number;
    done(obj: number): void;
    accept(): void;
    reject(): void;
    showExtension(obj: boolean): void;
}