declare class DzStyle extends QObject {
    /* Methods */
    actionPixmap(className: string, mode: PixmapMode, state: PixmapState): Pixmap;
    findInterfaceColor(name: string): number;
    findInterfaceNumber(name: string): number;
    getInterfaceColor(name: string): Color;
    getInterfaceColor(which: number): Color;
    getInterfaceColorDefault(which: number): Color;
    getInterfaceColorDescription(which: number): string;
    getInterfaceColorDisplaySettings(which: number, settings: DzSettings): void;
    getInterfaceColorName(which: number): string;
    getInterfaceNumber(name: string, defaultValue?: number): number;
    getInterfaceNumber(which: number): number;
    getInterfaceNumberDefault(which: number): number;
    getInterfaceNumberDescription(which: number): string;
    getInterfaceNumberDisplaySettings(which: number, settings: DzSettings): void;
    getInterfaceNumberName(which: number): string;
    getNumInterfaceColors(): number;
    getNumInterfaceNumbers(): number;
    getStyleDefinition(): string;
    pixelMetric(metricName: string): number;
    setInterfaceColor(which: number, color: Color): void;
    setInterfaceNumber(which: number, value: number): void;
    standardPixmap(pixmapName: string): Pixmap;
    textStyle(styleName: string): Font;
    textStyleColor(styleName: string): Color;

    /* Signals */
    interfaceColorsChanged(): void;
    interfaceNumbersChanged(): void;
}