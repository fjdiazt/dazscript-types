/**
 * Script wrapper for QFileDialog.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/filedialog_dz
 */
declare class DzFileDialog extends QObject {

    /* Methods */

    /**
     * A convenience file dialog that automatically creates a filter list for all audio formats the application can import and displays a file open dialog.
     * @param startWith string - The starting directory; can include a default file name.
     * @param parent DzWidget - The parent widget for the file dialog.
     * @returns string The path of the file selected by the user (if the user does not cancel), otherwise an empty string.
     */
    doAudioClipOpenDialog(startWith?: string, parent?: DzWidget): string; // String

    /**
     * Display a dialog for the user to choose a directory.
     * @param title string - The title of the dialog box.
     * @param desc string - Unused; retained for backward compatibility.
     * @param parent DzWidget - The parent widget for the directory dialog.
     * @returns string The path of the directory selected by the user (if the user does not cancel), otherwise an empty string.
     */
    doDirectoryDialog(title?: string, desc?: string, parent?: DzWidget): string; // String

    /**
     * Display a dialog for the user to choose a directory.
     * @param title string - The title of the dialog box.
     * @param desc string - Unused; retained for backward compatibility.
     * @param startWith string - The directory that the dialog will start in.
     * @param parent DzWidget - The parent widget for the directory dialog.
     * @returns string The path of the directory selected by the user (if the user does not cancel), otherwise an empty string.
     */
    doDirectoryDialog(title: string, desc: string, startWith: string, parent?: DzWidget): string; // String

    /**
     * Display a dialog for the user to choose a file.
     * @param open boolean - If true, displays an open file dialog, otherwise displays a save file dialog.
     * @param title string - The title of the dialog box.
     * @param startWith string - The starting directory (can include a default file name).
     * @param filter string - The file name filter; e.g., “TIFF files (*.tif *.tiff); JPEG files (*.jpg)”.
     * @param selectedFilter number - If not null, its value is set to the index of the filter that corresponds to the selected file.
     * @param parent DzWidget - The parent widget for the file dialog.
     * @returns string The path of the file selected by the user (if the user does not cancel), otherwise an empty string.
     */
    doFileDialog(open: boolean, title?: string, startWith?: string, filter?: string, selectedFilter?: number, parent?: DzWidget): string; // String

    /**
     * A convenience file dialog that automatically creates a filter list for all image formats the application can import/export and displays a file open/save dialog.
     * @param open boolean - If true, displays an open image dialog, otherwise displays a save image dialog.
     * @param startWith string - The starting directory; can include a default file name.
     * @param parent DzWidget - The parent widget for the file dialog.
     * @returns string The path of the file selected by the user (if the user does not cancel), otherwise an empty string.
     */
    doImageDialog(open: boolean, startWith?: string, parent?: DzWidget): string; // String

    /**
     * A convenience file dialog that automatically creates a filter list for all video formats the application can export and displays a file save dialog.
     * @param startWith string - The starting directory; can include a default file name.
     * @param parent DzWidget - The parent widget for the file dialog.
     * @returns string The path of the file selected by the user (if the user does not cancel), otherwise an empty string.
     */
    doVideoClipSaveDialog(startWith?: string, parent?: DzWidget): string; // String

    /**
     * Shows an open file dialog to the user that allows selection of multiple files.
     * @param dir string - The directory that the dialog will start with.
     * @param filter string - The file name filter; e.g., “TIFF files (*.tif *.tiff); JPEG files (*.jpg)”.
     * @param title string - The title of the dialog.
     * @param parent DzWidget - The parent widget of the dialog.
     * @returns any[] A list of paths for the files selected by the user (if the user does not cancel), otherwise an empty list.
     */
    getOpenFileNames(dir?: string, filter?: string, title?: string, parent?: DzWidget): any[]; // Array
}
