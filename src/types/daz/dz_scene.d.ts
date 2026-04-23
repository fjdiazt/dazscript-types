/**
 * The main scene container.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/scene_dz
 */
declare class DzScene extends DzBase {

    /* Properties */

    /**
     * Holds the asset id for the current scene.
     * @since 4.8.1.18
     */
    assetId: string; // String

    /**
     * Holds whether or not the asset for this modifier needs to be saved. (Read Only)
     * @since 4.11.0.249
     */
    assetNeedSave: boolean; // Boolean

    /**
     * Holds the asset URI for the current scene. (Read Only)
     * @since 4.8.1.18
     */
    assetUri: DzUri;

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of DzOpenMethod.
     */
    static DefaultMethod: number;

    /**
     * DAZ enum member of DzOpenMethod.
     */
    static OpenNew: number;

    /**
     * DAZ enum member of DzOpenMethod.
     */
    static MergeFile: number;

    /**
     * DAZ enum member of IncludeFlags.
     */
    static DzObjectsOnly: number;

    /**
     * DAZ enum member of IncludeFlags.
     */
    static DzIncludeLightsFlag: number;

    /**
     * DAZ enum member of IncludeFlags.
     */
    static DzIncludeCamerasFlag: number;

    /**
     * DAZ enum member of IncludeFlags.
     */
    static DzIncludeNonShadowersFlag: number;

    /**
     * DAZ enum member of IncludeFlags.
     */
    static DzIncludeNonVisibleFlag: number;

    /**
     * DAZ enum member of IncludeFlags.
     */
    static DzIncludeAllFlag: number;

    /* Static Methods */

    /**
     * Executes the node post-create script; a script that considers the active renderer and makes adjustments to the specified node - e.g., replaces instances of the “default” material for the application with the default material for the active renderer.
     * @param node DzNode - The node to execute the post-create script on; the node must have associated geometry.
     * @param settingsBase string - The slash (“/”) delimited base path of a DzAppSettings to look for a string value named after the classname of the active renderer - which is expected to hold the path to a file (can be relative to a mapped content directory, or absolute) to load if it exists.
     * @returns boolean true if the node is valid, the node post-create script exists and can be loaded/executed without error, otherwise false.
     * @since 4.11.0.255
     */
    static executeNodePostCreateScript(node: DzNode, settingsBase: string): boolean; // Boolean

    /**
     * @param label string - The string to get the number suffix from.
     * @returns string The number suffix (if any), otherwise an empty string.
     * @since 4.12.0.62
     */
    static getLabelNumber(label: string): string; // String

    /**
     * @param name string - The string to get the number suffix from.
     * @returns string The number suffix (if any) in the name, otherwise an empty string.
     * @since 4.12.0.62
     */
    static getNameNumber(name: string): string; // String

    /**
     * @param label string - The string to remove the number suffix(es) from.
     * @returns string label with the number suffix(es) removed (if any), otherwise label.
     */
    static stripLabelNumber(label: string): string; // String

    /**
     * @param name string - The string to remove the “ #” suffix from.
     * @returns string name with the “ #” suffix removed (if any), otherwise name.
     * @since 4.12.0.62
     */
    static stripNameNumber(name: string): string; // String

    /* Methods */

    /**
     * Adds a scene data item to the scene.
     * @param item DzSceneData - The data item to add to the scene. The scene takes ownership of this object and deletes it when it is no longer used.
     * @returns DzError DZ_NO_ERROR on success, or an error code if it failed.
     */
    addDataItem(item: DzSceneData): DzError;

    /**
     * Adds a node to the scene if it is not already in the scene.
     * @param node DzNode
     * @returns boolean true if the node was added to the scene, otherwise false.
     */
    addNode(node: DzNode): boolean; // Boolean

    /**
     * Adds a world-space modifier to the scene's modifier stack.
     * @param modifier any - The world-space modifier to add to the scene. The scene takes ownership of this object and deletes it when it is no longer used. Undocumented DAZ type: wsmodifier_dz.
     * @param index number - The location in the list that where the modifier will be inserted. If index is less than 0, the modifier is appended to the end of the stack.
     * @returns DzError DZ_NO_ERROR on success, otherwise an error code.
     */
    addWSModifier(modifier: any, index?: number): DzError;

    /**
     * Starts a time-editing operation. All changes to scene time, play range, and animation range that occur between this call and a call to finishTimeEdit() will be wrapped into a single undo item.
     */
    beginTimeEdit(): void;

    /**
     * Resets the scene to its initial, clean state. All data is deleted and the undo stack is cleared.
     */
    clear(): void;

    /**
     * Attempts to find a camera with the given name in the scene.
     * @param name string - The name of the camera to find.
     * @returns DzCamera The first camera in the scene with the given name (if any), otherwise null.
     */
    findCamera(name: string): DzCamera;

    /**
     * Attempts to find a camera with the given label in the scene.
     * @param label string - The label of the camera to find.
     * @returns DzCamera The first camera in the scene with the given label (if any), otherwise null.
     */
    findCameraByLabel(label: string): DzCamera;

    /**
     * @param name string
     * @returns DzSceneData The scene data item with the given name (if any), otherwise null.
     */
    findDataItem(name: string): DzSceneData;

    /**
     * Attempts to find a light with the given name in the scene.
     * @param name string - The name of the light to find.
     * @returns DzLight The first light in the scene with the given name (if any), otherwise null.
     */
    findLight(name: string): DzLight;

    /**
     * Attempts to find a light with the given label in the scene.
     * @param label string - The label of the light to find.
     * @returns DzLight The first light in the scene with the given label (if any), otherwise null.
     */
    findLightByLabel(label: string): DzLight;

    /**
     * @param id number - The number used to uniquely identify the material in the scene.
     * @returns DzMaterial The material with the matching element id (if any), otherwise null.
     */
    findMaterialByElementID(id: number): DzMaterial;

    /**
     * @param id number - The number used to uniquely identify the modifier in the scene.
     * @returns DzModifier The modifier with the matching element id (if any), otherwise null.
     */
    findModifierByElementID(id: number): DzModifier;

    /**
     * Attempts to find a node with the given name in the scene.
     * @param name string - The name of the node to find.
     * @returns DzNode The first node in the scene with the given name (if any), otherwise null.
     */
    findNode(name: string): DzNode;

    /**
     * @param id number - The number used to uniquely identify the node in the scene.
     * @returns DzNode The node with the matching element id (if any), otherwise null.
     */
    findNodeByElementID(id: number): DzNode;

    /**
     * Attempts to find a node with the given label in the scene.
     * @param label string - The label of the node to find.
     * @returns DzNode The first node in the scene with the given label (if any), otherwise null.
     */
    findNodeByLabel(label: string): DzNode;

    /**
     * @param node DzNode - The node to search for in the nodes list.
     * @returns number The index of the node in the list, or -1 if not found.
     */
    findNodeIndex(node: DzNode): number; // Number

    /**
     * @param id number - The number used to uniquely identify the object in the scene.
     * @returns DzObject The object with the matching element id (if any), otherwise null.
     */
    findObjectByElementID(id: number): DzObject;

    /**
     * @param id number - The number used to uniquely identify the shape in the scene.
     * @returns DzShape The shape with the matching element id (if any), otherwise null.
     */
    findShapeByElementID(id: number): DzShape;

    /**
     * Attempts to find a singleton node with the given identifier in the scene.
     * @param guidStr string - The GUID of the singleton node to find.
     * @returns DzNode The singleton node in the scene with the given identifier (if any), otherwise null.
     * @since 4.12.2.20
     */
    findSingletonNode(guidStr: string): DzNode;

    /**
     * Attempts to find a skeleton with the given name in the scene.
     * @param name string - The name of the skeleton to find.
     * @returns DzSkeleton The first skeleton in the scene with the given name (if any), otherwise null.
     */
    findSkeleton(name: string): DzSkeleton;

    /**
     * Attempts to find a skeleton with the given label in the scene.
     * @param label string - The label of the skeleton to find.
     * @returns DzSkeleton The first skeleton in the scene with the given label, otherwise null.
     */
    findSkeletonByLabel(label: string): DzSkeleton;

    /**
     * @param skeleton DzSkeleton - The skeleton to search for in the nodes list.
     * @returns number The index of the skeleton in the list, or -1 if not found.
     */
    findSkeletonIndex(skeleton: DzSkeleton): number; // Number

    /**
     * Ends a time editing operation started with a call to beginTimeEdit().
     */
    finishTimeEdit(): void;

    /**
     * @returns DzTimeRange The current animation range.
     */
    getAnimRange(): DzTimeRange;

    /**
     * @returns string The current asset load path of this scene.
     */
    getAssetLoadPath(): string; // String

    /**
     * @returns DzAudioClip An editable copy of the current audio clip for the scene. This will be NULL if there is no audio for the scene.
     */
    getAudio(): DzAudioClip;

    /**
     * @returns number The frame number on which the audio should start playing.
     */
    getAudioStartFrame(): number; // Number

    /**
     * @returns DzAuthor The author of the current scene (if any), otherwise null.
     * @since 4.8.1.19
     */
    getAuthor(): DzAuthor;

    /**
     * @returns DzBackdrop The current backdrop object for the scene.
     */
    getBackdrop(): DzBackdrop;

    /**
     * Calculate the bounding box for the current scene.
     * @param flags number - A set of flags that specify which types of nodes should be included.
     * @returns DzBox3 A world-space bounding box that encompasses all items in the scene (that match the criteria of the given flags).
     */
    getBoundingBox(flags?: number): DzBox3;

    /**
     * @param index number - The index of the camera to return.
     * @returns DzCamera The camera at the given index (if valid), otherwise null.
     */
    getCamera(index: number): DzCamera;

    /**
     * @returns any[] A list containing all cameras in the scene.
     */
    getCameraList(): any[]; // Array

    /**
     * @param index number - The index of the data item to return.
     * @returns DzSceneData The data item for the scene at the given index (if valid), otherwise null.
     */
    getDataItem(index: number): DzSceneData;

    /**
     * @returns any[] A list of the data items attached to the scene.
     */
    getDataItemList(): any[]; // Array

    /**
     * @returns number The default key interpolation type.
     * @since 4.21.1.102
     */
    getDefaultKeyInterpolationType(): number; // DzProperty::InterpolationType

    /**
     * @returns string The filename that this scene was last saved to or read from (if any), otherwise an empty string.
     */
    getFilename(): string; // String

    /**
     * @returns number The current time as a frame number based on the current time step.
     */
    getFrame(): number; // Number

    /**
     * @returns DzNode The currently highlighted node in the scene.
     */
    getHighlightNode(): DzNode;

    /**
     * @param index number - The index of the light to return.
     * @returns DzLight The light at the given index (if valid), otherwise null.
     */
    getLight(index: number): DzLight;

    /**
     * @returns any[] A list containing all lights in the scene.
     */
    getLightList(): any[]; // Array

    /**
     * @param index number - The index of the node to return.
     * @returns DzNode The node at the given index (if valid), otherwise null.
     */
    getNode(index: number): DzNode;

    /**
     * @returns any[] A list of all nodes in the scene.
     */
    getNodeList(): any[]; // Array

    /**
     * @returns number The number of cameras in the scene.
     */
    getNumCameras(): number; // Number

    /**
     * @returns number The number of data items attached to the scene
     */
    getNumDataItems(): number; // Number

    /**
     * @returns number The number of lights in the scene.
     */
    getNumLights(): number; // Number

    /**
     * @returns number The number of nodes in the scene.
     */
    getNumNodes(): number; // Number

    /**
     * @returns number The number of currently selected cameras.
     */
    getNumSelectedCameras(): number; // Number

    /**
     * @returns number The number of currently selected lights.
     */
    getNumSelectedLights(): number; // Number

    /**
     * @returns number The number of currently selected nodes.
     */
    getNumSelectedNodes(): number; // Number

    /**
     * @returns number The number of currently selected skeletons.
     */
    getNumSelectedSkeletons(): number; // Number

    /**
     * @returns number The number of selected time ranges.
     */
    getNumSelectedTimeRanges(): number; // Number

    /**
     * @returns number The number of skeletons in the scene.
     */
    getNumSkeletons(): number; // Number

    /**
     * @returns number The number of DzStorable (deprecated) items in the scene.
     */
    getNumStorablesInScene(): number; // Number

    /**
     * @returns number The number of world-space modifiers in the scene.
     */
    getNumWSModifiers(): number; // Number

    /**
     * @returns DzTimeRange The current play range.
     */
    getPlayRange(): DzTimeRange;

    /**
     * @returns boolean true if light preview is enabled, otherwise false.
     */
    getPreviewLights(): boolean; // Boolean

    /**
     * @returns DzNode The primary selected node in the scene, or NULL if there is no currently selected node. The primary selected node is the last node that was selected, or can be set via function calls.
     */
    getPrimarySelection(): DzNode;

    /**
     * @param index number - The index of the selected camera to return.
     * @returns DzCamera The camera at index in the list of selected cameras (if valid), otherwise null.
     */
    getSelectedCamera(index: number): DzCamera;

    /**
     * @returns any[] A list containing all selected cameras in the scene.
     */
    getSelectedCameraList(): any[]; // Array

    /**
     * @param index number - The index of the selected light to return.
     * @returns DzLight The light at index in the list of selected lights (if valid), otherwise null.
     */
    getSelectedLight(index: number): DzLight;

    /**
     * @returns any[] A list containing all selected lights in the scene.
     */
    getSelectedLightList(): any[]; // Array

    /**
     * @param index number - The index of the selected node to return.
     * @returns DzNode The node at index in the list of selected nodes (if valid), otherwise null.
     */
    getSelectedNode(index: number): DzNode;

    /**
     * @returns any[] A list containing all selected nodes in the scene.
     */
    getSelectedNodeList(): any[]; // Array

    /**
     * @param index number - The index of the selected skeleton to return.
     * @returns DzSkeleton The skeleton at index in the list of selected skeletons (if valid), otherwise null.
     */
    getSelectedSkeleton(index: number): DzSkeleton;

    /**
     * @returns any[] A list containing all selected skeletons in the scene.
     */
    getSelectedSkeletonList(): any[]; // Array

    /**
     * @param index number - The index of the skeleton to return.
     * @returns DzSkeleton The skeleton at the given index (if valid), otherwise null.
     */
    getSkeleton(index: number): DzSkeleton;

    /**
     * @returns any[] A list containing all skeletons in the scene.
     */
    getSkeletonList(): any[]; // Array

    /**
     * @returns any[] A list containing all lights in the scene sorted by render priority.
     */
    getSortedLightList(): any[]; // Array

    /**
     * @returns DzTime The current scene time as a DzTime.
     */
    getTime(): DzTime;

    /**
     * @returns DzTime The time step the animation is incremented by at each frame.
     */
    getTimeStep(): DzTime;

    /**
     * @param dataName string - The name of the data item to make unique.
     * @returns string The original value if dataName is already unique, otherwise a unique name.
     * @since 4.20.1.40
     */
    getUniqueDataItemName(dataName: string): string; // String

    /**
     * @param label string - The node label to make unique; stripLabelNumber() is called on this value.
     * @param node DzNode - The top-level node that the label is intended for; may be null; this node will be ignored when validating uniqueness.
     * @returns string label if the value provided is already unique, otherwise label with a suffix that causes it to be unique.
     */
    getUniqueTopLevelLabel(label: string, node?: DzNode): string; // String

    /**
     * @param name string - The node name to make unique; stripNameNumber() is called on this value.
     * @param node DzNode - The top-level node that the name is intended for; may be null; this node will be ignored when validating uniqueness.
     * @returns string name if the value provided is already unique, otherwise name with a suffix that causes it to be unique.
     * @since 4.12.0.61
     */
    getUniqueTopLevelName(name: string, node?: DzNode): string; // String

    /**
     * @param index number - The index of the world-space modifier to return.
     * @returns any The world-space modifier at the given index (if valid), otherwise null. Undocumented DAZ type: wsmodifier_dz.
     */
    getWSModifier(index: number): any; // wsmodifier_dz; undocumented type

    /**
     * @returns any[] A list containing all world-space modifiers in the scene.
     */
    getWSModifierList(): any[]; // Array

    /**
     * Invalidates the scene, flagging it as needing to be redrawn.
     */
    invalidate(): void;

    invalidateLightSorting(): void;

    /**
     * @returns boolean true if the scene is currently in a clearing operation, otherwise false.
     */
    isClearing(): boolean; // Boolean

    /**
     * @returns boolean true if the scene is currently loading from a *.daz scene file.
     */
    isDAZLoading(): boolean; // Boolean

    /**
     * @returns boolean true if the scene is currently in a loading operation, otherwise false.
     */
    isLoading(): boolean; // Boolean

    /**
     * @returns boolean true if the looping of playback is enabled, otherwise false.
     */
    isLoopingEnabled(): boolean; // Boolean

    /**
     * @returns boolean true if the animation is currently playing, otherwise false.
     */
    isPlaying(): boolean; // Boolean

    /**
     * Attempts to load a scene from the given filename.
     * @param filename string - The name of the native format file to load. Prior to 4.12.2.39, only the deprecated .daz format was supported.
     * @param method number - The method for combining the contents of the file with the current scene contents.
     * @returns DzError DZ_NO_ERROR if the load operation is successful, otherwise an appropriate error code.
     */
    loadScene(filename: string, method: number): DzError;

    /**
     * Sets looping of playback on/off.
     * @param onOff boolean - If true, playback of animation will continue until the user stops it, looping back to the first frame each time the end of the animation is reached. If false, playback of the animation will stop when the end of the animation is reached.
     */
    loopPlayback(onOff: boolean): void;

    /**
     * Indicate that the scene has changed since the last save.
     */
    markChanged(): void;

    /**
     * @param child DzNode - The node to move.
     * @param index number - The index to put the node at, -1 for end of list, 0 for beginning.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     * @since 4.22.1.74
     */
    moveNodeToIndex(child: DzNode, index: number): DzError;

    /**
     * @param nodeIndex number - The index for the node to move.
     * @param newNodeIndex number - The index to put the node at, -1 for end of list, 0 for beginning.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     * @since 4.22.1.74
     */
    moveNodeToIndex(nodeIndex: number, newNodeIndex: number): DzError;

    /**
     * @returns boolean true if the scene needs to be saved, otherwise false.
     */
    needsSave(): boolean; // Boolean

    /**
     * Pauses playback of the current animation.
     */
    pause(): void;

    /**
     * Start playback of the current play range.
     * @param realtime boolean - If true, frames will be dropped or paused as needed to keep the animation playing in realtime. Otherwise, the animation is played frame by frame as it can be drawn.
     */
    play(realtime?: boolean): void;

    /**
     * Indicate that saving the scene should request a new scene file name when invoked.
     * @since 4.20.0.11
     */
    protectSceneSourceFile(): void;

    /**
     * Removes all cameras from the scene.
     */
    removeAllCameras(): void;

    /**
     * Removes all lights from the scene.
     */
    removeAllLights(): void;

    /**
     * Removes the scene data item from the scene.
     * @param item DzSceneData - The data item to remove from the scene.
     * @returns DzError DZ_NO_ERROR if the item was successfully removed, otherwise an error code.
     */
    removeDataItem(item: DzSceneData): DzError;

    /**
     * Removes the given node from the scene.
     * @param node DzNode - The node to remove from the scene.
     * @returns boolean true if the node was in the scene and was successfully removed, otherwise false.
     */
    removeNode(node: DzNode): boolean; // Boolean

    /**
     * Removes all nodes that have items in their hierarchy that are currently selected.
     */
    removeSelected(): void;

    /**
     * Removes the modifier from the scene's modifier stack if it exists.
     * @param modifier any - The world-space modifier to remove from the scene. Undocumented DAZ type: wsmodifier_dz.
     * @returns DzError DZ_NO_ERROR on success, otherwise an error code.
     */
    removeWSModifier(modifier: any): DzError;

    /**
     * Saves the entire scene to file.
     * @param filename string - The file to save the scene to. If empty, the scene will be saved to the filename that it was last saved to (if any). If no prior file name exists, the user will be prompted for a filename to save to. If a filename is passed, it becomes the save filename that will be used for future saves. If the file cannot be opened or saved, DZ_OPERATION_FAILED_ERROR is returned. Prior to 4.20.0.9, only the deprecated .daz format was supported.
     * @returns DzError DZ_NO_ERROR if the save operation is successful, otherwise an appropriate error code.
     */
    saveScene(filename?: string): DzError;

    /**
     * Saves a thumbnail-size viewport render to the specified file name.
     * @param filename string - The filename to save the thumbnail image to. This should have an extension that is supported by the image manager - e.g., png.
     * @since 4.21.1.7
     */
    saveThumbnailImage(filename: string): void;

    /**
     * Saves a thumbnail-size viewport render to the specified file name.
     * @param filename string - The filename to save the thumbnail image to. This should have an extension that is supported by the image manager - e.g., png.
     * @param options DzFileIOSettings - The options to use. Supported options include:
    
     AppSettingsPath : a string that represents the path of an application setting to read preference settings from
    
     RenderThumb : a bool that represents whether or not to render a thumbnail image
    
     ReplaceThumb : a bool that represents whether or not to replace an existing thumbnail image
    
     RenderTip : a bool that represents whether or not to render a tip image
    
     ReplaceTip : a bool that represents whether or not to replace an existing tip image
    
     TipExtent : an int that represents the width/height of the tip image to render
    
     RenderTime : an int that represents the time (in ticks) to render
    
     BackgroundR : an int that represents the red component of the background color
    
     BackgroundG : an int that represents the green component of the background color
    
     BackgroundB : an int that represents the blue component of the background color
    
     BackgroundA : an int that represents the alpha component of the background color
     * @since 4.21.1.92
     */
    saveThumbnailImage(filename: string, options: DzFileIOSettings): void;

    /**
     * Sets the selection state for all nodes in the scene.
     * @param onOff boolean - If true all nodes in the scene will be selected. If false, all nodes will be deselected.
     */
    selectAllNodes(onOff: boolean): void;

    /**
     * Sets the selection state for all skeletons in the scene.
     * @param onOff boolean - If true all skeletons in the scene will be selected. If false, all skeletons will be deselected.
     */
    selectAllSkeletons(onOff: boolean): void;

    /**
     * Selects/Deselects all time range.
     * @param onOff boolean - If true, all ranges are selected. If false, all ranges are deselected.
     */
    selectAllTime(onOff: boolean): void;

    /**
     * Sets the animation range for the scene.
     * @param range DzTimeRange - The time range to set for the entire animation.
     */
    setAnimRange(range: DzTimeRange): void;

    /**
     * Sets the asset load path of this scene.
     * @param absolutePath string - The absolute path to set.
     */
    setAssetLoadPath(absolutePath: string): void;

    /**
     * Sets the current audio object and the frame on which it should start playing.
     * @param audio DzAudioClip - The new audio clip for the scene. Pass in NULL to clear the current audio clip.
     * @param startFrame number - The frame at which the audio should begin playing.
     */
    setAudio(audio: DzAudioClip, startFrame?: number): void;

    /**
     * Sets the backdrop object.
     * @param backdrop DzBackdrop - The new backdrop for the scene. The scene takes ownership of this object and deletes it when it is no longer needed.
     */
    setBackdrop(backdrop: DzBackdrop): void;

    /**
     * Sets the key interpolation type to set as the default.
     * @param type number - The key interpolation type to set.
     * @since 4.21.1.102
     */
    setDefaultKeyInterpolationType(type: number): void;

    /**
     * Set the scene time to the given frame based on current time step.
     * @param frame number - The frame to set as the current scene time.
     */
    setFrame(frame: number): void;

    /**
     * Sets the currently highlighted node. This is typically called from DzViewTool-derived classes.
     * @param node DzNode - The node that will become the currently highlighted node.
     */
    setHighlightNode(node: DzNode): void;

    /**
     * Sets the play range for the scene.
     * @param range DzTimeRange - The time range to set for animation playback.
     */
    setPlayRange(range: DzTimeRange): void;

    /**
     * Sets whether or not light preview is enabled or disabled.
     * @param onoff boolean
     */
    setPreviewLights(onoff: boolean): void;

    /**
     * Sets the node to use as the primary selection.
     * @param node DzNode - The selected node that should be flagged as the primary selection. The node must already be selected.
     * @returns boolean true if the node was made the new primary selection, otherwise false.
     */
    setPrimarySelection(node: DzNode): boolean; // Boolean

    /**
     * Set the scene time to the given time.
     * @param time DzTime - The time to set as the current scene time.
     */
    setTime(time: DzTime): void;

    /**
     * Sets the Frame rate for the scene.
     * @param time DzTime
     */
    setTimeStep(time: DzTime): void;

    /**
     * Sorts the scene node lists by the hierarchy order, the same order that a saved version of the scene will load in.
     * @since 4.22.1.75
     */
    sortNodesByHierarchy(): void;

    /**
     * Step time forward/back by number of frames.
     * @param nFrames number - The number of frames to step from the current position.
     * @param forward boolean - If true, current frame count is increased nFrames. If false, current frame count is decreased.
     */
    stepTime(nFrames?: number, forward?: boolean): void;

    /**
     * Recursively updates all nodes in the scene.
     */
    update(): void;

    /**
     * Deprecated
     * @param filename string
     */
    saveThumbnail(filename: string): void;

    /* Signals */

    /**
     * Transmitted immediately before a node is removed from the scene.
     * @param node DzNode - The node to be removed from the scene.
     */
    aboutToRemoveNode: ISignal<DzNode>;

    /**
     * Emitted just before the scene is rendered.
     * @param r DzRenderer
     */
    aboutToRender: ISignal<DzRenderer>;

    /**
     * Transmitted after the scene play range is changed.
     * @param range DzTimeRange - The new animation range of the scene.
     */
    animRangeChanged: ISignal<DzTimeRange>;

    /**
     * Transmitted just after the scene has been modified.
     */
    assetModified: ISignal<void>;

    /**
     * Transmitted just after the scene has been saved.
     */
    assetWasSaved: ISignal<void>;

    /**
     * Transmitted just after the backdrop has changed.
     */
    backdropChanged: ISignal<void>;

    /**
     * Transmitted when cameras are added to the scene.
     * @param node DzCamera - The camera added to the scene.
     */
    cameraAdded: ISignal<DzCamera>;

    /**
     * Transmitted when cameras are added to or removed from the scene.
     */
    cameraListChanged: ISignal<void>;

    /**
     * Transmitted when cameras are removed from the scene.
     * @param node DzCamera - The camera removed from the scene.
     */
    cameraRemoved: ISignal<DzCamera>;

    /**
     * Transmitted after the camera selection list changes.
     */
    cameraSelectionListChanged: ISignal<void>;

    /**
     * Transmitted after the scene time is changed.
     * @param oldTime DzTime - The last time the scene was at.
     * @param newTime DzTime - The new time of the scene.
     */
    currentTimeChanged: ISignal<DzTime, DzTime>;

    /**
     * Transmitted when the default key interpolation type has changed.
     * @param type number - The new default key interpolation type.
     * @since 4.21.1.102
     */
    defaultKeyInterpolationTypeChanged: ISignal<number>;

    /**
     * Transmitted if the scene has changed and needs to be redrawn.
     */
    drawnDataChanged: ISignal<void>;

    /**
     * Transmitted when the highlight node changes.
     * @param node DzNode - The new highlight node of the scene.
     */
    highlightNodeChanged: ISignal<DzNode>;

    /**
     * Transmitted when lights are added to the scene.
     * @param node DzLight - The light added to the scene.
     */
    lightAdded: ISignal<DzLight>;

    /**
     * Transmitted when lights are added to or removed from the scene.
     */
    lightListChanged: ISignal<void>;

    /**
     * Transmitted when lights are removed from the scene.
     * @param node DzLight - The light removed from the scene.
     */
    lightRemoved: ISignal<DzLight>;

    /**
     * Transmitted after the light selection list changes.
     */
    lightSelectionListChanged: ISignal<void>;

    /**
     * Transmitted when the enabled state of playback looping changes.
     * @param onOff boolean
     */
    loopPlaybackChanged: ISignal<boolean>;

    /**
     * Emitted when the material list of a node in the scene has changed.
     */
    materialListChanged: ISignal<void>;

    /**
     * Emitted when the material selection in the scene has changed.
     */
    materialSelectionChanged: ISignal<void>;

    /**
     * Transmitted when nodes are added to the scene.
     * @param node DzNode - The node added to the scene.
     */
    nodeAdded: ISignal<DzNode>;

    /**
     * Transmitted when nodes are added to or removed from the scene.
     */
    nodeListChanged: ISignal<void>;

    /**
     * Transmitted when nodes are removed from the scene.
     * @param node DzNode - The node removed from the scene.
     */
    nodeRemoved: ISignal<DzNode>;

    /**
     * Transmitted after the node selection list changes.
     */
    nodeSelectionListChanged: ISignal<void>;

    /**
     * Transmitted when playback of the scene stops.
     */
    playbackFinished: ISignal<void>;

    /**
     * Transmitted when playback of the scene begins.
     */
    playbackStarted: ISignal<void>;

    /**
     * Transmitted after the scene play range is changed.
     * @param range DzTimeRange - The new play range of the scene.
     */
    playRangeChanged: ISignal<DzTimeRange>;

    /**
     * Transmitted when the primary node selection changes.
     * @param node DzNode - The new primary selection of the scene.
     */
    primarySelectionChanged: ISignal<DzNode>;

    /**
     * Emitted just after the scene is rendered.
     * @param r DzRenderer
     */
    renderFinished: ISignal<DzRenderer>;

    /**
     * Transmitted after the scene gets cleared.
     */
    sceneCleared: ISignal<void>;

    /**
     * Emitted just before the scene is cleared.
     */
    sceneClearStarting: ISignal<void>;

    /**
     * Transmitted when the name of the current scene file has changed.
     * @param newName string - The new name of the scene file.
     */
    sceneFilenameChanged: ISignal<string>;

    /**
     * Transmitted after loading a scene file. This may not always be emitted after every sceneLoadStarting() signal if there were errors during file loading.
     */
    sceneLoaded: ISignal<void>;

    /**
     * Transmitted just before loading a scene.
     */
    sceneLoadStarting: ISignal<void>;

    /**
     * Transmitted after saving a scene file. This may not always be emitted after every sceneSaveStarting() signal if there were errors during file saving.
     * @param filename string
     */
    sceneSaved: ISignal<string>;

    /**
     * Transmitted just before saving a scene.
     * @param filename string
     */
    sceneSaveStarting: ISignal<string>;

    /**
     * Transmitted just after the scene topology has changed.
     * @since 4.6.0.91
     */
    sceneTopologyChanged: ISignal<void>;

    /**
     * Emitted as single node is being added to the scene.
     * @param node DzNode
     * @since 4.12.2.41
     */
    singletonNodeAdded: ISignal<DzNode>;

    /**
     * Transmitted when skeletons are added to the scene.
     * @param node DzSkeleton - The skeleton added to the scene.
     */
    skeletonAdded: ISignal<DzSkeleton>;

    /**
     * Transmitted when skeletons are added to or removed from the scene.
     */
    skeletonListChanged: ISignal<void>;

    /**
     * Transmitted when skeletons are removed from the scene.
     * @param node DzSkeleton - The skeleton removed from the scene.
     */
    skeletonRemoved: ISignal<DzSkeleton>;

    /**
     * Transmitted after the skeleton selection list changes.
     */
    skeletonSelectionListChanged: ISignal<void>;

    /**
     * Transmitted after the scene time is changed.
     * @param time DzTime - The new time of the scene.
     */
    timeChanged: ISignal<DzTime>;

    /**
     * Transmitted when time is about to change.
     * @param newTime DzTime - The new time of the scene.
     */
    timeChanging: ISignal<DzTime>;

    /**
     * Transmitted after the scene time selection is changed.
     */
    timeSelectionChanged: ISignal<void>;

    /**
     * Transmitted after the scene time step is changed.
     * @param time DzTime - The new time step of the scene.
     */
    timeStepChanged: ISignal<DzTime>;

    /**
     * Transmitted when world-space modifiers are added to the scene.
     * @param modifier any - The modifier added to the scene. Undocumented DAZ type: wsmodifier_dz.
     */
    wsModifierAdded: ISignal<any>;

    /**
     * Transmitted when world-space modifiers are removed from the scene.
     * @param modifier any - The modifier removed from the scene. Undocumented DAZ type: wsmodifier_dz.
     */
    wsModifierRemoved: ISignal<any>;

    /**
     * Transmitted when world-space modifiers are added to or removed from the scene.
     */
    wsModifierStackChanged: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    stripLabelnumber(label: QString): QString;

    /** @undocumented */
    clearDebugPoints(): any; // TODO ;

    /** @undocumented */
    setDebugPoints(): any; // TODO ;

    /** @undocumented */
    setDebugPoints(): any; // TODO ;
}
