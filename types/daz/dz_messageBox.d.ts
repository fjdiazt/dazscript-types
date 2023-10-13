declare class DzMessageBox extends QObject {

    /** Properties */

    /** Methods */
    information(text: String, title: String, button0: String, button1?: String, button2?: String, button3?: String): number;
    question(text: String, title: String, button0: String, button1?: String, button2?: String, button3?: String): number;
    warning(text: String, title: String, button0: String, button1?: String, button2?: String, button3?: String): number;
    critical(text: String, title: String, button0: String, button1?: String, button2?: String, button3?: String): number;
}