declare class QLayout extends QObject {

    /* Properties */
    autoAdd: boolean;
    margin: number;
    spacing: number;

    addWidget(item: QWidget): void;
    count(): number;
}