declare class DzRefCountedItem extends QObject {

    /* Properties */

    /* Methods */
    getRefCount(): number;
    isShared(): boolean;
    isUnique(): boolean;
    ref(): void;
    unref(): void;
}