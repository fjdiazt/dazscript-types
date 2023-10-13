declare class DzStyle extends DzStyleInterface {

    /* Properties */
    objectName: string;
    Normal: number;
    Disabled: number;
    Active: number;
    Selected: number;
    On: number;
    Off: number;
    name: string;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    standardIconImplementation(standardIcon: number, opt: QStyleOption): QIcon;
    standardIconImplementation(standardIcon: number, opt: QStyleOption): QIcon;
    standardIconImplementation(standardIcon: number, opt: QStyleOption): QIcon;
    layoutSpacingImplementation(control1: number): number;
    layoutSpacingImplementation(control1: number): number;
    layoutSpacingImplementation(control1: number): number;
    interfaceColorsChanged(): void;
    findInterfaceColor(name: string): number; // TODO ;
    getNumInterfaceColors(): number;
    getInterfaceColorName(which: number): any; // TODO ;
    getInterfaceColorDescription(which: number): QString;
    getInterfaceColor(name: QString): QColor;
    getInterfaceColor(which: number): QColor;
    getInterfaceColorDefault(which: number): QColor;
    setInterfaceColor(which: number, color: QColor): void;
    compileStyleDefinition(infile: QString, outfile: QString): DzError;
    getStyleDefinition(): QString;
    textStyleColor(styleName: QString): QColor;
    pixelMetric(metricName: QString): number;
    pixelMetric(m: number, option: QStyleOption, widget: QWidget): number;
    standardPixmap(pixmapName: QString): QPixmap;
    standardPixmap(standardPixmap: number, opt: QStyleOption): QPixmap;
    actionPixmap(className: QString, mode: number, state: number): QPixmap;
    setStyledIcon(): any; // TODO ;
    getNumPrimitiveElements(): number;
    getNumPixelMetrics(): number;
    getNumStyleHints(): number;
    getNumStandardPixmaps(): number;
    getNumTextStyles(): number;
    getPrimitiveElementName(which: number): QString;
    getPixelMetricName(which: number): QString;
    getStyleHintName(which: number): QString;
    getStandardPixmapName(which: number): QString;
    getTextStyleName(which: number): QString;
    findPrimitiveElement(name: QString): number;
    findPixelMetric(name: QString): number;
    findStyleHint(name: QString): number;
    findStandardPixmap(name: QString): number;
    findTextStyle(name: QString): number;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
}