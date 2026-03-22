declare class DzFileDialog {
    doAudioClipOpenDialog(startWith: string, parent: DzWidget): string
    doAudioClipOpenDialog(): string
    doDirectoryDialog(title: string, desc: string, parent: DzWidget): string
    doDirectoryDialog(title: string, desc: string, path: string): string
    doDirectoryDialog(): string
    doFileDialog(open: boolean, title?: string, startWith?: string, filter?: string, selectedFilter?: number, parent?: DzWidget): string
    doImageDialog(open: boolean, startWith: String, parent: DzWidget): string
    doImageDialog(open: boolean): string
    doVideoClipSaveDialog(startWith: string, parent: DzWidget): string
    doVideoClipSaveDialog(): string
    getOpenFileNames(dir: string, filter: string, title: string, parent: DzWidget): string[]
    getOpenFileNames(): string[]
}