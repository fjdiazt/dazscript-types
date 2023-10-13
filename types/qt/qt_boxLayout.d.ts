declare class QBoxLayout extends QLayout {
    margin: number;	// -1
    name: string;
    objectName: string;
    sizeConstraint: number;	// 0
    spacing: number;	// 8
    topMargin: number;	// 12

    addWidget(widget: QWidget): void;
}