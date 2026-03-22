declare class QCoreApplication extends QObject {

    /* Properties */

    /* Methods */
    aboutToQuit(): void;
    addLibraryPath(obj: QString): void;
    applicationDirPath(): QString;
    applicationFilePath(): QString;
    applicationName(): QString;
    applicationPid(): number;
    applicationVersion(): QString;
    //argc(): QT_DEPRECATED;
    arguments(): String[];
    //argv(): QT_DEPRECATED;
    closingDown(): boolean;
    compressEvent(event: QEvent, receiver: QObject, postEventList: QPostEvent[]): boolean;
    enter_loop(): any;
    event(obj: QEvent): boolean;
    exec(): number;
    exit(retcode: number): void;
    exit_loop(): any;
    filterEvent(message: void, result: number): boolean;
    flush(): void;
    hasPendingEvents(): boolean;
    init(): void;
    installTranslator(messageFile: QTranslator): void;
    libraryPaths(): String[];
    //loopLevel(): any;
    notify(obj: QObject, event: QEvent): boolean;
    notifyInternal(receiver: QObject, event: QEvent): boolean;
    organizationDomain(): QString;
    organizationName(): QString;
    postEvent(receiver: QObject, event: QEvent, priority?: number): void;
    processEvents(flags: number, maxtime?: number): void;
    qAppName(): any;
    qt_sendSpontaneousEvent(obj: QObject, event: QEvent): any;
    quit(): void;
    removeLibraryPath(obj: QString): void;
    removePostedEvents(receiver: QObject, eventType?: number): void;
    removeTranslator(messageFile: QTranslator): void;
    sendEvent(receiver: QObject, event: QEvent): boolean;
    sendPostedEvents(): void;
    sendPostedEvents(receiver: QObject, event_type: number): void;
    sendPostedEvents(): void;
    sendPostedEvents(receiver: QObject, event_type: number): void;
    sendSpontaneousEvent(receiver: QObject, event: QEvent): boolean;
    setApplicationName(application: QString): void;
    setApplicationVersion(version: QString): void;
    setAttribute(attribute: number, on: boolean): void;
    setEventFilter(filter: any): any;
    setLibraryPaths(obj: String[]): void;
    setOrganizationDomain(orgDomain: QString): void;
    setOrganizationName(orgName: QString): void;
    startingUp(): boolean;
    testAttribute(attribute: number): boolean;
    translate(context: string): QString;
    unixSignal(obj: number): void;
    watchUnixSignal(signal: number, watch: boolean): void;
    winEventFilter(message: any, result: number): boolean;
}