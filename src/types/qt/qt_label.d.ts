declare class QLabel extends QFrame {

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
    //sizeHint: QObject;

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
    //frameShape: number;
    //frameShadow: number;
    //lineWidth: number;
    //midLineWidth: number;
    //frameWidth: number;
    //frameRect: QObject;
    text: string;
    textFormat: number;
    pixmap: Pixmap;
    scaledContents: boolean;
    alignment: number;
    wordWrap: boolean;
    margin: number;
    indent: number;
    openExternalLinks: boolean;
    textInteractionFlags: number;
    hasSelectedText: boolean;
    selectedText: string;

    /* Methods */
    linkActivated(link: QString): void;
    linkHovered(link: QString): void;
    setText(obj: QString): void;
    setPixmap(obj: QPixmap): void;
    setPicture(obj: QPicture): void;
    setMovie(movie: QMovie): void;
    setNum(obj: number): void;
    setNum(obj: number): void;
    setNum(obj: number): void;
    setNum(obj: number): void;
    clear(): void;
}