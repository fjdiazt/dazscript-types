declare class QSize extends QObject {
    height: number;	// 4096
    width: number;	// 4096
    translate(): any;

    constructor(w: number, h: number);
    constructor(srcSize: QSize);
}