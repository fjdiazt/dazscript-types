﻿// App Globals
declare var Scene: DzScene;
declare var App: DzApp;
declare var UndoStack: DzUndoStack;
declare var MainWindow: DzMainWindow;
declare var System: DzSystem;
declare var FileDialog: DzFileDialog;
declare var Renderer: DzRenderer;
declare var Material: DzMaterial;
declare var Camera: DzCamera;
declare var RenderOptions: DzRenderOptions;
declare var MessageBox: DzMessageBox;

declare function acceptUndo(caption: String): void;
declare function backgroundProgressIsActive(): Boolean;
declare function backgroundProgressIsCancelled(): Boolean;
declare function beginUndo(): void;
declare function cancelUndo(): void;
declare function clearBusyCursor(): void;
declare function clearUndoStack(): void;
declare function connect(sender: Object, signal: String, receiver: Object, slot: any): void;
declare function connect(sender: Object, signal: String, functionRef: any): void;
declare function ctrlPressed(): Boolean;
declare function debug(expression: any): void;
declare function disconnect(sender: Object, signal: String, receiver: Object, slot: String): void;
declare function disconnect(sender: Object, signal: String, functionRef: any): void;
declare function dropUndo(): void;
declare function finishBackgroundProgress(): void;
declare function finishProgress(): void;
declare function getArguments(): string[];
declare function getDesktop(): QDesktopWidget;
declare function getErrorMessage(errCode: DzError): String;
declare function getObjectParent(obj: QObject): QObject;
declare function getScriptAuthor(): DzAuthor;
declare function getScriptFileName(): string;
declare function getScriptType(): String;
declare function getScriptVersionString(): String;
declare function include(scriptPath: String): void;
declare function pointersAreEqual(ptr1: QObject, ptr2: QObject): Boolean;
declare function processEvents(): void;
declare function progressIsActive(): Boolean;
declare function progressIsCancelled(): Boolean;
declare function setBusyCursor(): void;
declare function shiftPressed(): Boolean;
declare function startBackgroundProgress(info: String, totalSteps: Number, isCancellable: Boolean): void;
declare function startProgress(info: String, totalSteps?: Number, isCancellable?: Boolean, showTimeElapsed?: Boolean): void;
declare function stepBackgroundProgress(numSteps: Number): void;
declare function stepProgress(numSteps?: Number): void;
declare function updateBackgroundProgress(position: Number): void;
declare function updateProgress(position: Number): void;
declare function sleep(time: Number): void;

// String Globals
declare function decodeURI(encodedURI: String): String;
declare function decodeURIComponent(encodedURIComponent: String): String;
declare function encodeURI(uri: String): String;
declare function encodeURIComponent(uriComponent: String): String;
declare function escape(text: String): String;
declare function eval(str: String): Object;
declare function isFinite(expression: String): Boolean;
declare function isNaN(expression: String): Boolean;
declare function parseFloat(str: String): Number;
declare function parseInt(str: String, optBase: Number): Number;
declare function unescape(text: String): String;

// QtScript
declare function print(...expression: any[]): void;
declare function qsTr(sourceText: String): String;
declare function qsTranslate(sourceText: String): String;
declare function qsTrId(id: String): String;