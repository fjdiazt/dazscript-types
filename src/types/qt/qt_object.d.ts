declare class QObject {

    /* Properties */
    objectName: string;
    name: string;

    /* Methods */
    destroyed(obj?: QObject): void;
    deleteLater(): void;
    inherits(string: QString): boolean;
    className(): QString;
    update(): void;

    static className(): QString;
}