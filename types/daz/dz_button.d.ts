declare class DzButton extends DzWidget {
  objectName: string; // CheckBox
  x: number; // 0
  y: number; // 0
  globalX: number; // 0
  globalY: number; // 0
  height: number; // 30
  width: number; // 100
  minHeight: number; // 0
  minWidth: number; // 0
  maxHeight: number; // 16777215
  maxWidth: number; // 16777215
  palette: QPalette; // [object Object]
  paletteForegroundColor: QColor; // [object Object]
  paletteBackgroundColor: QColor; // [object Object]
  paletteBackgroundPixmap: QPixmap; // [object Object]
  enabled: boolean; // true
  autoExclusive: boolean; // false
  autoRepeat: boolean; // false
  autoRepeatDelay: number; // 300
  autoRepeatInterval: number; // 100
  checkable: boolean; // true
  down: boolean; // false
  icon: QObject; // QVariant(QIcon)
  iconSize: QSizeWrapper; // [object Object]
  pixmap: QPixmap; // [object Object]
  shortcut: QObject; //
  text: string; //
  toggleButton: boolean; // true
  exclusiveToggle: boolean; // false
  on: boolean; // false
  toggleState: number; // 1
  toggleType: number; // 0
  checked: boolean; // false
  getWidget(): QWidget;
  getLayout(): any;

  pressed: ISignal;
  released: ISignal;
  clicked: ISignalT<void>;
  /**
    *     toggled(flag: boolean): ISignal;
    */
  toggled: ISignalT<boolean>;
  /**
    *     stateChanged(index: number): ISignal;
    */
  stateChanged: ISignalT<number>;
  toggle(): any;
  Off: number; // 0
  NoChange: number; // 1
  On: number; // 2
  SingleShot: number; // 0
  Toggle: number; // 1
  Tristate: number; // 2
  inherits(): any;
  name: string; // CheckBox
  className(): any;
}