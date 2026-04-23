/**
 * Script wrapper for QMessageBox.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/messagebox_dz
 */
declare class DzMessageBox extends QObject {

    /* Methods */

    /**
     * Displays a modal “critical” message box to the user.
     * @param text string - The text that is shown in the body of the message box.
     * @param title string - The title the message box.
     * @param button0 string - The text of button 0 - default text is used if empty.
     * @param button1 string - The text of button 1 - button is omitted if empty (default).
     * @param button2 string - The text of button 2 - button is omitted if empty (default).
     * @returns number 0 if the application is not showing prompts and the text of only one button is defined. 0 if the message is displayed to the user and the Esc key is pressed. Otherwise, the index of the button that the user pressed (i.e., 0, 1, or 2).
     */
    critical(text: string, title: string, button0: string, button1?: string, button2?: string): number; // Number

    /**
     * Displays a modal “information” message box to the user.
     * @param text string - The text that is shown in the body of the message box.
     * @param title string - The title the message box.
     * @param button0 string - The text of button 0 - default text is used if empty.
     * @param button1 string - The text of button 1 - button is omitted if empty (default).
     * @param button2 string - The text of button 2 - button is omitted if empty (default).
     * @returns number 0 if the application is not showing prompts and the text of only one button is defined. 0 if the message is displayed to the user and the Esc key is pressed. Otherwise, the index of the button that the user pressed (i.e., 0, 1, or 2).
     */
    information(text: string, title: string, button0: string, button1?: string, button2?: string): number; // Number

    /**
     * Displays a modal “question” message box to the user.
     * @param text string - The text that is shown in the body of the message box.
     * @param title string - The title the message box.
     * @param button0 string - The text of button 0 - default text is used if empty.
     * @param button1 string - The text of button 1 - button is omitted if empty.
     * @param button2 string - The text of button 2 - button is omitted if empty (default).
     * @returns number 0 if the application is not showing prompts and the text of only one button is defined. 0 if the message is displayed to the user and the Esc key is pressed. Otherwise, the index of the button that the user pressed (i.e., 0, 1, or 2).
     */
    question(text: string, title: string, button0: string, button1: string, button2?: string): number; // Number

    /**
     * Displays a modal “warning” message box to the user.
     * @param text string - The text that is shown in the body of the message box.
     * @param title string - The title the message box.
     * @param button0 string - The text of button 0 - default text is used if empty.
     * @param button1 string - The text of button 1 - button is omitted if empty.
     * @param button2 string - The text of button 2 - button is omitted if empty (default).
     * @returns number 0 if the application is not showing prompts and the text of only one button is defined. 0 if the message is displayed to the user and the Esc key is pressed. Otherwise, the index of the button that the user pressed (i.e., 0, 1, or 2).
     */
    warning(text: string, title: string, button0: string, button1: string, button2?: string): number; // Number
}
