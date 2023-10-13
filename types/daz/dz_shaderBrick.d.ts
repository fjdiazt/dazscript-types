declare class DzShaderBrick extends DzElement {

    ///** Properties */

    ///** Methods */
    //addBoolParameter(path: string, argName: string, label: string): DzPropertyParam;
    //addColorParameter(path: string, argName: string, label: string): DzPropertyParam;
    //addConnection(paramIndex: number, brick: DzShaderBrick, brickParamIndex: number): void;
    //addDefaultInParameter(type: number, argName: string, label: string, defaultVal: string): DzDefaultInParam;
    //addEnumParameter(path: string, argName: string, label: string): DzEnumParam;
    //addEnumPropertyParameter(path: string, argName: string, label: string): DzPropertyParam;
    //addFileParameter(path: string, argName: string, label: string): DzPropertyParam;
    //addFloatParameter(path: string, argName: string, label: string): DzPropertyParam;
    //addImageParameter(path: string, argName: string, label: string): DzPropertyParam;
    //addIntParameter(path: string, argName: string, label: string): DzPropertyParam;
    //addMatrixParameter(path: string, argName: string, label: string): DzMatrixParam;
    //addOutParameter(type: number, argName: string, label: string, isAov: boolean): DzOutParam;
    //addParamInternal(param: DzBrickParam): boolean;
    //addParameter(param: DzBrickParam): boolean;
    //addRequiredParam(paramClass: number, name: string): void;
    //addScopedParam(paramType: number, name: string, scope: number): void;
    //addStringParameter(Path: string, argName: string, label: string): DzPropertyParam;
    //addVec3Parameter(path: string, type: number, argName: string, label: string): DzVec3Param;
    //brickActionListChanged(): void;
    //brickIDChanged(oldID: number): void;
    //brickIsChild(brick: DzShaderBrick): boolean;
    //brickIsParent(brick: DzShaderBrick): boolean;
    //brickRemoved(self: DzShaderBrick): void;
    //brickTitleChanged(title: string): void;
    //changeParamIndex(param: DzBrickParam, newIndex: number): void;
    //childConnectionChanged(): void;
    //connectionsChanged(): void;
    //connectionsChanged(self: DzShaderBrick): void;
    //connectionsChanged(): void;
    //connectionsChanged(self: DzShaderBrick): void;
    //deleteParam(index: number): boolean;
    //deleteParam(param: DzBrickParam): boolean;
    //deleteParam(index: number): boolean;
    //deleteParam(param: DzBrickParam): boolean;
    //deleteParamByLabel(name: string): boolean;
    //deleteParamByName(name: string): boolean;
    //findParameterByArg(arg: string): DzBrickParam;
    //findParameterByLabel(label: string): DzBrickParam;
    //findParameterByName(name: string): DzBrickParam;
    //findParameterByProperty(prop: DzProperty): DzBrickParam;
    //findParameterIndex(param: DzBrickParam): number;
    //findParameterIndexByArg(arg: string): number;
    //generateFilesFinished(): void;
    //generateFilesStarted(): void;
    //getAllDefaultScopedParams(params: QSet<ScopedParam>): void;
    //getAllDefaultScopedParams(varNames: string[], types: QList<int>): void;
    //getAllDefaultScopedParams(params: QSet<ScopedParam>): void;
    //getAllDefaultScopedParams(varNames: string[], types: QList<int>): void;
    //getBrickActionList(): string[];
    //getBrickClass(): string;
    //getBrickClassFactory(name: string): any;
    //getBrickClassShaderCode(): DzShaderString;
    //getBrickID(): number;
    //getBrickList(includeSelf: boolean, recursive: boolean, unique: boolean, list: DzShaderBrick[]): void;
    //getBrickSettings(): DzSettings;
    //getBrickVersion(): number;
    //getChildBrickList(includeSelf: boolean, recursive: boolean, unique: boolean): QObject[];
    //getClassTokenDefaultValue(i: number): string;
    //getClassTokenName(i: number): string;
    //getClassTokenType(i: number): DzBrickParam::ParamType;
    //getDefaultCategory(): string;
    //getDescription(): string;
    //getFullRequiredScopedVariableLists(varNames: string[], types: QList<int>, recurse: boolean): void;
    //getFullScopedVariableLists(scope: number): string[];
    //getFullScopedVariableLists(varNames: string[], types: QList<int>, scope: number): void;
    //getFullScopedVariableLists(params: QSet<ScopedParam>, scope: number): void;
    //getFullScopedVariableLists(scope: number): string[];
    //getFullScopedVariableLists(varNames: string[], types: QList<int>, scope: number): void;
    //getFullScopedVariableLists(params: QSet<ScopedParam>, scope: number): void;
    //getFullScopedVariableLists(scope: number): string[];
    //getFullScopedVariableLists(varNames: string[], types: QList<int>, scope: number): void;
    //getFullScopedVariableLists(params: QSet<ScopedParam>, scope: number): void;
    //getFullScopedVariableListsTypes(scope: number): QVariant[];
    //getIncludePaths(): string[];
    //getInstanceToken(i: number): string;
    //getInstanceTokenDefaultValue(i: number): string;
    //getInstanceTokenType(i: number): DzBrickParam::ParamType;
    //getNeedsTangentSpaceParams(): boolean;
    //getNewToken(): string;
    //getNumOfClassTokens(): number;
    //getNumOfInstanceTokensNeeded(): number;
    //getNumParameters(): number;
    //getNumRequiredScopedParams(): number;
    //getNumRequiredScopedParamsInternal(): number;
    //getNumScopedParams(): number;
    //getNumScopedParamsInternal(): number;
    //getNumScopesNeeded(): number;
    //getOptionsFrameClassName(): string;
    //getParameter(index: number): DzBrickParam;
    //getParameterIterator(): DzBrickParamIterator;
    //getParentBrickList(recurse: boolean): QObject[];
    //getParentBrickList(list: DzShaderBrick[], recurse: boolean): void;
    //getParentBrickList(recurse: boolean): QObject[];
    //getParentBrickList(list: DzShaderBrick[], recurse: boolean): void;
    //getPreferredName(): string;
    //getRequiredScopedParam(i: number): string;
    //getRequiredScopedParamInternal(i: number): string;
    //getRequiredScopedParamType(i: number): DzBrickParam::ParamType;
    //getRequiredScopedParamTypeInternal(i: number): DzBrickParam::ParamType;
    //getScopedParamIndex(name: string): number;
    //getScopedParamName(i: number): string;
    //getScopedParamNameInternal(i: number): string;
    //getScopedParamScope(i: number): number;
    //getScopedParamType(i: number): DzBrickParam::ParamType;
    //getScopedParamTypeInternal(i: number): DzBrickParam::ParamType;
    //getScopedShaderCodeCall(varCallNames: string[]): DzShaderString;
    //getShaderCodeCall(varCallNames: string[]): DzShaderString;
    //getVarName(argName: string, varCallNames: string[], varArgNames: string[]): string;
    //giveParamPropertiesToOwner(): void;
    //insertParameter(index: number, param: DzBrickParam): boolean;
    //invalidateFiles(): void;
    //isActiveInBakePass(): boolean;
    //isActiveInBeautyPass(): boolean;
    //isActiveInShadowPass(): boolean;
    //isOnlyInShadowPass(): boolean;
    //isRootConnected(): boolean;
    //isScopedBrick(): boolean;
    //lightType(): DzBrickSet::LightType;
    //ownParamProperties(): void;
    //paramAdded(thisBrick: DzShaderBrick): void;
    //paramRemoved(thisBrick: DzShaderBrick): void;
    //postAttributeSet(): void;
    //providesParam(paramName: string, paramType: number, scope: number, recurse: boolean): boolean;
    //providesParams(brick: DzShaderBrick, param: DzBrickParam): boolean;
    //removeConnection(paramIndex: number, brick: DzShaderBrick, brickParamIndex: number, conIndex: number): void;
    //removeRequiredParam(name: string): void;
    //removeScopedParam(name: string): void;
    //setBrickID(int: number): void;
    //setBrickRenderSettings(set: DzBrickSet, renderer: DzRenderer): void;
    //setBrickVersion(ver: number): void;
    //setGlobalBrickRenderSettings(set: DzBrickSet, renderer: DzRenderer): void;
    //shouldSeperateLocalProperties(): boolean;
    //type(): DzBrickSet::ShaderType;
    //usesLocalShaderSpace(): boolean;
    //writeConnectionsAsIndexes(): boolean;
    //writesOwnParameters(): boolean;
}