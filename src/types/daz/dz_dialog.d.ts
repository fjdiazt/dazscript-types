declare class DzDialog extends DzWidget {
    /* Properties */
    caption: String;
    orientation: number;
    sizeGripEnabled: boolean;

    constructor();

    /* Methods */
    close(): boolean;
    exec(): boolean;
    extension(): DzWidget;
    setAcceptButton(button: DzPushButton): any; // TODO ;
    setRejectButton(button: DzPushButton): any; // TODO ;
    setExtension(extension: DzWidget): void;
    showExtension(obj: boolean): void;
    hideExtension(): void;
    showExtension(obj: boolean): void;
}