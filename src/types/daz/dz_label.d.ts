/**
 * Script wrapper for QLabel.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/label_dz
 */
declare class DzLabel extends DzWidget {

    /* Properties */

    /**
     * Holds the alignment of the text displayed in the label.
     */
    alignment: number; // DzWidget::AlignmentFlags

    /**
     * Holds the name of the text style used to draw the label on this label.
     * @since 4.10.0.22
     */
    elideMode: number; // DzWidget::TextElideMode

    /**
     * Holds whether or not text is selected. (Read Only)
     */
    hasSelectedText: boolean; // Boolean

    /**
     * Holds the label's indent in pixels from its current alignment.
     */
    indent: number; // Number

    /**
     * Holds whether or not external links will be opened when clicked.
     */
    openExternalLinks: boolean; // Boolean

    /**
     * The pixmap shown on the label. If the pixmap is monochrome (e.g. its depth is 1) and it does not have a mask, the pixmap will be its own mask. This allows transparent bitmaps to be drawn, which are important for toggle buttons. undefined if no pixmap is set.
     */
    pixmap: Pixmap;

    primitive: string; // String

    /**
     * Holds whether or not the contents of the label are scaled to fill the available space.
     */
    scaledContents: boolean; // Boolean

    /**
     * Holds the text that is currently selected. (Read Only)
     */
    selectedText: string; // String

    /**
     * Holds the text displayed in the label.
     */
    text: string; // String

    /**
     * Holds the value that is used to determine if the text string should be interpreted as plain, rich or log text.
     */
    textFormat: number; // TextFormat

    /**
     * Holds the value that is used to determine how the label reacts to user input.
     */
    textInteractionFlags: number; // DzWidget::TextInteractionFlags

    /**
     * Holds the name of the primitive element used to draw this label.
     * @since 4.10.0.22
     */
    textStyle: string; // String

    /**
     * Holds whether or not the text is wrapped where necessary; i.e., word-breaks.
     */
    wordWrap: boolean; // Boolean

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of TextFormat.
     */
    static PlainText: number;

    /**
     * DAZ enum member of TextFormat.
     */
    static RichText: number;

    /**
     * DAZ enum member of TextFormat.
     */
    static AutoText: number;

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Methods */

    /**
     * @returns DzWidget The buddy widget for the label, undefined if none.
     */
    buddy(): DzWidget;

    /**
     * Clears the text displayed in the label.
     */
    clear(): void;

    /**
     * Sets the buddy widget for this label.
     * @param buddy DzWidget - The widget to set.
     */
    setBuddy(buddy: DzWidget): void;

    /* Signals */

    /**
     * @param mode number
     * @since 4.10.0.22
     */
    elideModeChanged: ISignal<number>;

    /**
     * @param name string
     * @since 4.10.0.22
     */
    primitiveChanged: ISignal<string>;

    /**
     * @param format number
     */
    textFormatChanged: ISignal<number>;

    /**
     * @param flags number
     * @since 4.10.0.22
     */
    textInteractionFlagsChanged: ISignal<number>;

    /**
     * @param name string
     * @since 4.10.0.22
     */
    textStyleChanged: ISignal<string>;
}
