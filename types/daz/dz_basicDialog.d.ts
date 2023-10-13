declare class DzBasicDialog extends DzDialog {
    addButton(p0: DzButton): any;
    addButton(p0: DzButton, p1: number): any;
    addLayout(p0: DzLayout): any;
    addLayout(p0: DzLayout, p1: number): any;
    addSpacing(p0: number): any;
    addStretch(): any;
    addStretch(p0: number): any;
    addWidget(p0: DzWidget): any;
    addWidget(p0: DzWidget, p1: number): any;
    setApplyButtonAsDefault(): void;
    enableApplyButton(p0: boolean): any;
    enableCancelButton(p0: boolean): any;
    enableHelpButton(p0: boolean): any;
    setAcceptButtonAsDefault(): void;
    setAcceptButtonEnabled(p0: boolean): void;
    setAcceptButtonText(p0: string): any;
    setApplyButtonEnabled(p0: boolean): void;
    setApplyButtonText(p0: String): any;
    setCancelButtonAsDefault(): void;
    setCancelButtonEnabled(p0: boolean): void;
    setCancelButtonText(p0: string): any;
    setDefaultButton(btn: DzButton): void;
    setHelpButtonEnabled(p0: boolean): void;
    showAcceptButton(p0: boolean): any;
    showApplyButton(p0: boolean): any;
    showCancelButton(p0: boolean): any;
    showHelpButton(p0: boolean): any;

    // Signals
    applyClicked: ISignal;
}