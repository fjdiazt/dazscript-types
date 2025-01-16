declare class QAbstractButton extends QWidget {

    /* Properties */

    /* Methods */
    constructor(parent: QWidget, name: string, f: number);
    //QAbstractButton(parent: QWidget, name: string, f: number): any_CONSTRUCTOR;
    animateClick(msec: number): void;
    autoExclusive(): boolean;
    autoRepeat(): boolean;
    autoRepeatDelay(): number;
    autoRepeatInterval(): number;
    changeEvent(e: QEvent): void;
    checkStateSet(): void;
    click(): void;
    clicked(checked: boolean): void;
    event(e: QEvent): boolean;
    focusInEvent(e: QFocusEvent): void;
    focusOutEvent(e: QFocusEvent): void;
    group(): QButtonGroup;
    hitButton(pos: QPoint): boolean;
    icon(): QIcon;
    iconSet(): any;
    iconSize(): QSize;
    isCheckable(): boolean;
    isChecked(): boolean;
    isDown(): boolean;
    keyPressEvent(e: QKeyEvent): void;
    keyReleaseEvent(e: QKeyEvent): void;
    mouseMoveEvent(e: QMouseEvent): void;
    mousePressEvent(e: QMouseEvent): void;
    mouseReleaseEvent(e: QMouseEvent): void;
    nextCheckState(): void;
    paintEvent(e: QPaintEvent): void;
    pressed(): void;
    released(): void;
    setAutoExclusive(obj: boolean): void;
    setAutoRepeat(obj: boolean): void;
    setAutoRepeatDelay(obj: number): void;
    setAutoRepeatInterval(obj: number): void;
    setCheckable(obj: boolean): void;
    setChecked(obj: boolean): void;
    setDown(obj: boolean): void;
    setIcon(icon: QIcon): void;
    setIconSize(size: QSize): void;
    setShortcut(key: QKeySequence): void;
    setText(text: QString): void;
    shortcut(): QKeySequence;
    text(): QString;
    timerEvent(e: QTimerEvent): void;
    toggle(): void;
    toggled(checked: boolean): void;
}