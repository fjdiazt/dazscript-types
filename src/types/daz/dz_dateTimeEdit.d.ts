/**
 * Script wrapper for QDateTimeEdit.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/datetimeedit_dz
 */
declare class DzDateTimeEdit extends DzWidget {

    /* Properties */

    /**
     * Holds the date represented by the widget.
     */
    date: Date;

    /**
     * Holds the maximum date value for the widget.
     */
    dateMax: Date;

    /**
     * Holds the minimum date value for the widget.
     */
    dateMin: Date;

    /**
     * Holds the date and time represented by the widget.
     */
    dateTime: DateTime;

    displayFormat: string; // String

    /**
     * Holds the time represented by the widget.
     */
    time: Date;

    /**
     * Holds the maximum time value for the widget.
     */
    timeMax: Date;

    /**
     * Holds the minimum time value for the widget.
     */
    timeMin: Date;

    /**
     * Deprecated
     */
    dateSeparator: string; // String

    /**
     * Deprecated
     */
    timeSeparator: string; // String

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Signals */

    /**
     * Emitted when the date/time in the widget has changed, passes the new date/time.
     * @param dateTime DateTime
     */
    valueChanged: ISignal<DateTime>;
}
