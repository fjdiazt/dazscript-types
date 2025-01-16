declare class DzRenderer extends QObject {
    compileShader(p0: string): string;
    compileShader(p0: string, p1: string): string;
    customRender(p0: DzRenderHandler, p1: DzCamera, p2: QObject[], p3: QObject[], p4: DzRenderOptions): boolean;
    customRender(p0: DzRenderHandler, p1: DzCamera, p2: DzLightList, p3: DzNodeList, p4: DzRenderOptions): boolean;
    getCurrentNode(): DzNode;
    getName(): string;
    getShaderExtension(): string;
    getShaderFileName(p0: string): string;
    getShaderInfo(p0: string): DzShaderDescription;
    getShaderPath(p0: string): string;
    getShaderPath(p0: string, p1: boolean): string;
    getShaderSearchPaths(): string[];
    getTextureUtilityPath(): string;
    isRendering(): boolean;
    killRender(): void;
    prepareImage(p0: DzTexture, p1: string): void;
    processShaderName(p0: string): string;
    render(p0: DzRenderHandler, p1: DzCamera, p2: DzRenderOptions): boolean;
    render(p0: DzRenderHandler, p1: DzCamera, p2: DzRenderOptions): boolean;
}