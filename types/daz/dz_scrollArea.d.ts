declare class DzScrollArea extends DzWidget {
    alignment: number;	// 0
    widgetResizable: boolean;	// true
    ensureVisible(p0: number, p1: number): any;
    ensureVisible(p0: number, p1: number, p2: number): any;
    ensureVisible(p0: number, p1: number, p2: number, p3: number): any;
    ensureWidgetVisible(p0: DzWidget): any;
    ensureWidgetVisible(p0: DzWidget, p1: number): any;
    ensureWidgetVisible(p0: DzWidget, p1: number, p2: number): any;
    hideFrame(): any;
    setHorizontalScrollbarDisplay(p0: boolean): any;
    setVerticalScrollbarDisplay(p0: boolean): any;
    setWidget(p0: DzWidget): any;
}