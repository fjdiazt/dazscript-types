declare class DzArrayHelper extends QObject {
    objectName: string; //
    addToArray<T>(list: T[], item: T): T[];
    isInArray<T>(list: T[], item: T): number;
    isInArrayByName<T>(list: T[], name: any): number;
    name: string; //
    //className(): any;
}