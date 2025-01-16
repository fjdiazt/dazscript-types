declare class QSplitter extends QFrame {
    // Methods
    handle(index: number) : QSplitterHandle;
    moveSplitter(pos: number, index: number): QSplitter;
    saveState(): QByteArray;

    // Signals
    splitterMoved: ISignal; //splitterMoved(p0:number, p1:number): any;
}