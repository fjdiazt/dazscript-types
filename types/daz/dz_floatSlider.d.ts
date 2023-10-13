declare class DzFloatSlider extends DzSlider {

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

    /* Methods */
    customContextMenuRequested(): any; // TODO ;
    setEnabled(): any; // TODO ;
    setDisabled(): any; // TODO ;
    setWindowModified(): any; // TODO ;
    setWindowTitle(): any; // TODO ;
    setStyleSheet(): any; // TODO ;
    setFocus(): any; // TODO ;
    update(): any; // TODO ;
    repaint(): any; // TODO ;
    setVisible(): any; // TODO ;
    setHidden(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setShown(): any; // TODO ;
    showMinimized(): any; // TODO ;
    showMaximized(): any; // TODO ;
    showFullScreen(): any; // TODO ;
    showNormal(): any; // TODO ;
    close(): any; // TODO ;
    raise(): any; // TODO ;
    lower(): any; // TODO ;
    updateMicroFocus(): any; // TODO ;
    fullLengthTextEditBegin(): any; // TODO ;
    setFullLengthTextEdit(): any; // TODO ;
    getFullLengthTextEdit(): any; // TODO ;
    adjustFullLengthTextForEdit(): any; // TODO ;

    //valueChanged(val: number): ISignal;
    valueChanged: ISignal;
}