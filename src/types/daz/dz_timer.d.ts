declare class DzTimer extends QObject {
    active: boolean;	// false
    interval: number;	// 0
    name: string;	//
    objectName: string;	//
    singleShot: boolean;	// false
    changeInterval(p0: number): any;
    className(): any;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    inherits(): any;
    start(): any;
    start(p0: number): any;
    start(p0: number, p1: boolean): any;
    stop(): any;
    timeout(): any;
}