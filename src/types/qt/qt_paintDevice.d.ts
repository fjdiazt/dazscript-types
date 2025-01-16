declare class QPaintDevice extends QObject {

    /* Properties */

    /* Methods */
    devType(): number;
    getDC(): number;
    metric(metric: number): number;
    paintEngine(): QPaintEngine;
    paintingActive(): boolean;
    qt_paint_device_metric(device: QPaintDevice, metric: number): any;
    qwsDisplay(): QWSDisplay;
    releaseDC(hdc: number): void;
    //x11AppCells(screen: number): any;
    //x11AppColormap(screen: number): any;
    //x11AppDefaultColormap(screen: number): any;
    //x11AppDefaultVisual(screen: number): any;
    //x11AppDepth(screen: number): any;
    //x11AppDisplay(): any;
    //x11AppDpiX(screen: number): any;
    //x11AppDpiY(screen: number): any;
    //x11AppRootWindow(screen: number): any;
    //x11AppScreen(): any;
    //x11AppVisual(screen: number): any;
    //x11Cells(): any;
    //x11Colormap(): any;
    //x11DefaultColormap(): any;
    //x11DefaultVisual(): any;
    //x11Depth(): any;
    //x11Display(): any;
    //x11Screen(): any;
    //x11SetAppDpiX(obj: number, obj: number): any;
    //x11SetAppDpiY(obj: number, obj: number): any;
    //x11Visual(): any;
}