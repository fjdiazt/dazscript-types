declare class DzBoxLayout extends DzLayout {
    direction: number; // 0
    addSpacing(spacing: number): ISignal;
    addStretch(stretch?: number): ISignal;
    addStrut(strut: number): ISignal;
    addWidget(widget: DzWidget): void;
    addWidget(widget: DzWidget, row: number): void;
    addLayout(layout: DzLayout, row?: number): void;
    setGeometry(p0: number, p1: number, p2: number, p3: number): any;

    static LeftToRight: number; // 0
    static RightToLeft: number; // 1
    static TopToBottom: number; // 2
    static BottomToTop: number; // 3
}