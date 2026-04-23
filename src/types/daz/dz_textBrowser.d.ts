/**
 * Script wrapper for QTextBrowser.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/textbrowser_dz
 */
declare class DzTextBrowser extends DzTextEdit {

    /* Properties */

    /**
     * Holds the number of locations backward in the history. (Read Only)
     * @since 4.9.3.93
     */
    backwardCount: number; // Number

    /**
     * Holds the number of locations forward in the history. (Read Only)
     * @since 4.9.3.93
     */
    forwardCount: number; // Number

    /**
     * Holds whether the browser can go backward in the document history. (Read Only)
     * @since 4.9.3.93
     */
    isBackwardAvailable: boolean; // Boolean

    /**
     * Holds whether the browser can go forward in the document history. (Read Only)
     * @since 4.9.3.93
     */
    isForwardAvailable: boolean; // Boolean

    /**
     * Holds whether the browser should open links to external sources using DzApp::showUrl() instead of emitting the anchorClicked() signal. Links are considered external if their scheme is not 'file://'.
     * @since 4.9.3.93
     */
    openExternalLinks: boolean; // Boolean

    /**
     * Holds whether the browser should automatically open links the user tries to activate by mouse or keyboard.
     * @since 4.9.3.93
     */
    openLinks: boolean; // Boolean

    /**
     * Holds the search paths used by the browser to find supporting content.
     * @since 4.9.3.93
     */
    searchPaths: any[]; // Array

    /**
     * Holds the name of the displayed document. This will be empty if the URL is invalid, if no document is displayed, or if the source is unknown.
     */
    source: string; // String

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Methods */

    /**
     * Changes the document displayed to the previous document in the list built by navigating links. Does nothing if there is no previous document.
     */
    backward(): void;

    /**
     * Clears the history of visited documents and disables the forward and backward navigation.
     * @since 4.9.3.93
     */
    clearHistory(): void;

    /**
     * Changes the document displayed to the next document in the list built by navigating links. Does nothing if there is no next document.
     */
    forward(): void;

    /**
     * @param index number - The zero-based index of the history item.
    
     index < 0 : backward() history
    
     index == 0 : current
    
     index > 0 : forward() history
     * @returns string The DzTextEdit::documentTitle of the history item.
     * @since 4.9.3.93
     */
    historyTitle(index: number): string; // String

    /**
     * @param index number - The zero-based index of the history item.
    
     index < 0 : backward() history
    
     index == 0 : current, see source
    
     index > 0 : forward() history
     * @returns string The URL of the history item.
     * @since 4.9.3.93
     */
    historyUrl(index: number): string; // String

    /**
     * Changes the current document displayed to be the first document displayed.
     */
    home(): void;

    /**
     * Reloads the current document.
     */
    reload(): void;

    /* Signals */

    /**
     * Emitted when the user clicks an anchor.
     * @param name string - The value of the href, or the name of the target document
     * @param link string - The name of the anchor
     */
    anchorClicked: ISignal<string, string>;

    /**
     * Emitted when the availability of backward() changes.
     * @param available boolean - false when user is at home(), otherwise true.
     */
    backwardAvailable: ISignal<boolean>;

    /**
     * Emitted when the availability of forward() changes.
     * @param available boolean - true when the user navigates backward(), false when the user goes forward() or if there is no next document.
     */
    forwardAvailable: ISignal<boolean>;

    /**
     * Emitted when the user selects a link but does not activate it.
     * @param link string - The selected link.
     */
    highlighted: ISignal<string>;

    /**
     * Emitted when the history changes.
     */
    historyChanged: ISignal<void>;

    /**
     * Emitted when the user clicks a link.
     * @param link string - The value of the href, or the name of the target document.
     */
    linkClicked: ISignal<string>;

    /**
     * Emitted when the mime source of the browser changes.
     * @param src string - The name of the document being displayed in the browser.
     */
    sourceChanged: ISignal<string>;
}
