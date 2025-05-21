/**
 * @module geotoolkit3d/Plot
 */
import type { ColorRepresentation, Object3D as _Object3D, WebGLInfo, WebGLRendererParameters } from 'three';
import { Box3, OrthographicCamera, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from 'three';
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { AntiAliasing } from '@int/geotoolkit3d/Constants';
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { AnimationManager } from '@int/geotoolkit3d/scene/animation/AnimationManager';
import { Event, Type as BaseType } from '@int/geotoolkit3d/Event';
import { Compass } from '@int/geotoolkit3d/scene/compass/Compass';
import { HighlightPass } from '@int/geotoolkit3d/postprocessing/HighlightPass';
import { SSAARenderPass } from '@int/geotoolkit3d/postprocessing/SSAARenderPass';
import { OutlinePass } from '@int/geotoolkit3d/postprocessing/OutlinePass';
import type { AbstractController } from '@int/geotoolkit3d/controller/AbstractController';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { AbstractPass } from '@int/geotoolkit3d/postprocessing/AbstractPass';
import type { AnchoredShape } from '@int/geotoolkit/scene/shapes/AnchoredShape';
import type { AbstractTool } from '@int/geotoolkit3d/tool/AbstractTool';
/**
 * Enum of built-in camera types.<br>
 * Each Camera has its own projection algorithm.<br>
 * @readonly
 * @enum
 */
export declare enum CameraType {
    /**
     * Camera will be using a perspective projection
     */
    Perspective = "perspective",
    /**
     * Camera will be using an orthographic projection
     */
    Orthographic = "orthographic"
}
/**
 * Enum of ways to have the orthographic camera resize<br>
 * @readonly
 * @enum
 */
export declare enum OrthographicResizeMode {
    /**
     * Cameras view port will not be modified <br>
     */
    None = "None",
    /**
     * Cameras view port will try to maintain the current view scale<br>
     * scene will keep the view but cut off space to maintain view scale.
     */
    MaintainScale = "MaintainScale"
}
/**
 * Enum of built-in controller types.<br>
 * To provide your own controller simply pass the constructor function/class to the setOption instead of one of the enum value.
 * @readonly
 * @enum
 */
export declare enum CameraControllerType {
    /**
     * Moves the camera so that it revolves around a given point.
     */
    Orbit = "orbit",
    /**
     * Behaves like a trackball, the 3D scene being the ball.
     */
    TrackBall = "trackball",
    /**
     * Moves like a first person camera - commonly referred to as FPS controllers
     */
    FirstPerson = "firstperson",
    /**
     * No interactive controller.
     */
    None = "none"
}
/**
 * HighlightType
 * @readonly
 * @enum
 */
export declare enum HighlightType {
    /**
     * 3D object gets highlighted when hovering
     */
    Hover = "hover",
    /**
     * 3D object gets highlighted when clicking
     */
    Click = "click"
}
/**
 * Default Tool Names
 * @readonly
 * @enum
 */
export declare enum DefaultTool {
    /**
     * Highlight Tool
     */
    HighlightTool = "HighlightTool"
}
/**
 * A Plot with 3D capabilities.<br>
 * Unlike a geotoolkit 2D plot, this plot requires a DIV element to be passed and not a canvas.<br>
 * <br>
 * The plot is internally structured as a SceneGraph using THREE.Scene.<br>
 * It uses a camera system to represent user's eye location in 3D space.<br>
 * This camera position can be moved anywhere in the plot and can look in any direction (although controller are encouraged to limit this freedom to ensure meaningful displays)<br>
 * The camera type and option can be configured at creation or on the fly using setOptions().<br>
 * <br>
 * To increase rendering accuracy the plot will try to compute ideal near/far planes positions and simplify transformation matrices.<br>
 * This mechanism relies on the fact that the plot can compute its own modellimits and that those limits are reasonably small.<br>
 * The rendering accuracy might suffer if modellimits are too big because of GPU floating point computing accuracy.<br>
 * <br>
 * To render its content to the plot a render cycle made is of the following steps:<br>
 * <ul>
 * <li>Call updateObject on <b>all</b> nodes: Offers a chance to each node to update its status before rendering occurs. This should not trigger any invalidation event though.</li>
 * <li>Call prepareRender: Simplifies transformation matrices, move near/far planes to increase accuracy.</li>
 * <li>Call beforeRender on <b>visible</b> nodes. This can be used to update nodes 'on the fly' in the render pass. However be careful when overriding this function as it heavily impacts the rendering logic.</li>
 * <li>Render: The WebGLRenderer traverses the scene, rendering node using WebGL (all GL operations occur at this stage).</li>
 * <li>Call finishRender: Restores the matrices, revert near/far planes.</li>
 * </ul>
 * <br>
 * The updateObject phase differs from beforeRender as it is executed before the plot's matrices/transformation have been simplified&optimized.<br>
 * Which means that its implementation modifies a transformation that will be taken into account during this render pass for the simplification step.<br>
 * However beforeRender is executed after the simplification,  any modification done in this function will be rendered but will not be used for simplification.<br>
 * Also, beforeRender expose a bit more of the internal plot logic and usage of those elements that are not part of the public API should be done with caution.<br>
 * Generally, updateObject is used to implement application level changes.<br>
 * And beforeRender is generally used to execute low level operations like GPU resource loading and management.<br>
 * <br>
 * The plot also exposes some rendering options like anti-aliasing, clear-color or preferred GPU precision.<br>
 * Some of them cannot be changed on the fly though like the transparency of the background.<br>
 * <br>
 * A notification system using EventDispatcher exposes the events occurring in the plot (object added, removed, invalidate, camera changes, etc).<br>
 * One could listen to events occurring on any node of the plot by listening to the Plot's events.<br>
 * Note that you can also send custom events from your nodes to implement your application's logic.<br>
 * See geotoolkit3d.Event.Type for the built-in events.<br>
 * <br>
 * When an event is fired and caught by the plot, it marks itself as dirty.<br>
 * Whenever the next renderCycle occurs (based on requestanimationframe), this flag will be checked.<br>
 * If it's true then a render cycle will occur, otherwise the plot will hibernate until the next requestanimationframe lands.<br>
 * That's why one may need to manually call invalidateObject() on a node after modifying it through direct access (like position, scale, rotation, etc).<br>
 * It will flag the plot as dirty (through the event notification system), resulting in a render.<br>
 * Note that because the rendering is asynchronous, during invalidate several time in a row will trigger only one render.<br>
 * <br>
 * The plot also offers some useful features like built-in lighting (ambient light and camera headlight) and global scale.<br>
 * Those options can be enabled/disabled and configured through the setOptions().<br>
 * <br>
 * Like a geotoolkit widget, the plot uses a Tool system to catch, process and dispatch user input. (See {@link @int/geotoolkit3d/tool/AbstractTool~AbstractTool}).<br>
 * One of those tools is the controller, it's a special tool that allow the user to manipulate the camera using an input device (mouse, touch screen, ...).<br>
 * <br>
 * The plot will also have a compass added to it (as an overlay).<br>
 * This compass can be configured/changed and also replaced by a custom one.<br>
 * <br>
 * The plot provides postprocessing effects like anti-aliasing and outline highlighting.
 * Since post processing is enabled by default, an EffectComposer will be created and will replace WebGLRenderer in animation loop.<br>
 * It renders scene into a 2D image on a render target, and applies some passes to the result before drawing it to the canvas.<br>
 * @throws Will throw an error if the browser does not support WebGL
 */
export declare class Plot extends EventDispatcher {
    /**
     * Create plot
     * @param options options to create plot
     */
    constructor(options: Plot.Options);
    on<E extends keyof Plot.EventMap>(type: E, callback: (eventType: E, sender: this, args: Plot.EventMap[E]) => void): this;
    off<E extends keyof Plot.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Plot.EventMap[E]) => void): this;
    notify<E extends keyof Plot.EventMap>(type: E, source: Plot, args?: Plot.EventMap[E]): this;
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     *
     * @param options options to set on this object
     * @returns this
     */
    setOptions(options: Plot.OptionsBase): this;
    /**
     * Get plot options
     * (see {@link import("geotoolkit3d/Plot").Plot.setOptions} for more info)
     * @returns options
     */
    getOptions(): Plot.Options;
    /**
     * Converts user coordinates to world coordinates in place (modifies the given object).<br>
     * <br>
     * User coordinates are world coordinates without global scaling applies.<br>
     * Use `.setOptions({ scale: ... })` to change the global scaling.<br>
     * <br>
     * @param vector3 Source AND target vector3
     * @returns The converted coordinates
     */
    rootScale(vector3: Vector3): Vector3;
    /**
     * Converts world coordinates to user coordinates in place (modifies the given object).<br>
     * <br>
     * User coordinates are world coordinates without global scaling applies.<br>
     * Use `#setOptions({ scale: ... })` to change the global scaling.<br>
     * <br>
     * @param vector3 Source AND target vector3
     * @returns The converted coordinates
     */
    rootScaleInv(vector3: Vector3): Vector3;
    /**
     * Returns camera location in user coordinates.<br>
     * @param [target] Optional target vector
     * @returns The camera location
     */
    getCameraLocation(target?: Vector3): Vector3;
    /**
     * Returns the camera lookat point in user coordinates IF such information is available (depends on the controller used).<br>
     * Otherwise returns camera.location + camera.direction.
     * @param [target] Optional target vector
     * @returns The camera lookat
     */
    getCameraLookAt(target?: Vector3): Vector3;
    /**
     * This function will try to reset the camera position along the y axis so most of the scene fits into the view.<br>
     * It will also change the camera anchor point to the scene center.<br>
     * If the there is no visible geometry in the scene this will silently fail.
     * @param [animate] Animate the camera change
     * @param [animationDuration] Duration of the animation in milliseconds
     * @returns this
     */
    resetCamera(animate?: boolean, animationDuration?: number): this;
    /**
     * This function will try to adjust the camera position along the direction axis so that most of the scene fits into the view. It
     * will also change the camera anchor point to the scene center.
     * If the there is no visible geometry in the scene this function will silently fail.
     * @param [direction] Direction to move the camera in, will use scene center to camera if null. This should be a
     * unit vector
     * @param [animate] Animate the camera change
     * @param [animationDuration] Duration of the animation in milliseconds
     * @param [distanceFactor] Distance factor when fitting the camera. Greater than 1 means further from scene center.
     * @param [ignoreZScale] If true, z scale will be ignored
     * @returns this
     */
    fitCamera(direction?: Vector3, animate?: boolean, animationDuration?: number, distanceFactor?: number, ignoreZScale?: boolean): this;
    /**
     * Sets camera location in user coordinates.<br>
     * It is recommended to use #moveCamera() instead as it handles both the location and the direction of the camera.<br>
     * @param position The position to move to (in USER coordinates)
     * @param [animate] Animate the camera change
     * @param [animationDuration] Duration of the animation in milliseconds
     * @returns this
     */
    setCameraLocation(position: Vector3, animate?: boolean, animationDuration?: number): this;
    /**
     * Sets camera target in user coordinates.<br>
     * It is recommended to use #moveCamera() instead as it handles both the location and the direction of the camera.<br>
     * @param lookat The point to look at (in USER coordinates)
     * @param [animate] Animate the camera change
     * @param [animationDuration] Duration of the animation in milliseconds
     * @returns this
     */
    setCameraLookAt(lookat: Vector3, animate?: boolean, animationDuration?: number): this;
    /**
     * Moves the camera to the given position and rotate it to look at the given lookat.<br>
     * Note that the given points should be in user coordinates (world coordinates without global scaling).<br>
     *
     * @param [position] The position to move to in USER coordinates
     * @param [lookAt] The point to look at (in USER coordinates)
     * @param [animate] Animate the camera change
     * @param [animationDuration] Duration of the animation in milliseconds
     * @returns this
     */
    moveCamera(position?: Vector3, lookAt?: Vector3, animate?: boolean, animationDuration?: number): this;
    /**
     * Returns the scene graph root.<br>
     * One should use it to append nodes to the scene using the add() function.<br>
     * @returns The root node
     */
    getRoot(): _Object3D;
    /**
     * Returns the scene.<br>
     * Recommended uses are limited to:
     * <ul>
     * <li>Insert 'absolute' positioned objects like directional lights.</li>
     * <li>Used as parameter to {@link @int/geotoolkit3d/scene/grid/Grid~Grid#getMode}().</li>
     * </ul>
     */
    getScene(): Scene;
    /**
     * Returns the scene graph animation manager.<br>
     * This manager should be used to perform smooth animations in the plot.<br>
     * See {@link @int/geotoolkit3d/scene/animation/AnimationManager~AnimationManager} for more details.<br>
     * @returns The animation manager
     */
    getAnimationManager(): AnimationManager;
    /**
     * Returns the compass object.<br>
     * The returned compass can be configured/modified.<br>
     * See {@link @int/geotoolkit3d/scene/compass/Compass~Compass} for more details.<br>
     * @returns The compass object
     */
    getCompass(): Compass;
    /**
     * Set size of the Plot.<br>
     * This increase the rendering-area size (canvas) to the given dimension.<br>
     * It also notifies the WebGl renderer.<br>
     * The given pixelDeviceRatio can be used to take into account the current Browser zoom level.<br>
     *
     * @param width The new width that should be set
     * @param height The new height that should be set
     * @param [pixelDeviceRatio] The pixel device ratio, if unset, will use the value provided by the window if available.
     * @returns this
     */
    setSize(width: number, height: number, pixelDeviceRatio?: number): this;
    /**
     * Add postprocessing pass to the renderer.<br>
     * The last pass needs to be rendered to screen (set to true using setOptions). <br>
     * The pass to be added must inherit {@link @int/geotoolkit3d/postprocessing/AbstractPass~AbstractPass}. <br>
     * The order of passes affects the final output, please use getMultipass and setOptions for ordering.
     *
     * @param pass the postprocessing pass
     */
    addMultipass(pass: AbstractPass): void;
    /**
     * Get current postprocessing multipass as an array
     *
     * @returns passes
     */
    getMultipass(): AbstractPass[];
    /**
     * Get the default anti aliasing method according to the pixel scale, screen size and device type
     * The default AA for retina and 2K (2560x1440) and above monitor is fast approximate AA (FXAA), and super-resolution AA (SRAA) for lower resolution.
     * The FXAA requires less computing power hence it is the default AA mode for a mobile
     * @returns antialiasing type
     */
    getDefaultAA(pixelScale: number, screen: Screen): AntiAliasing;
    /**
     * Returns the 'virtual device' size of the plot.<br>
     * <br>
     * This returns the raw size given at initialization or through the setSize function.<br>
     * Ignoring any pixelRatio that could have been set on the WebGL renderer.<br>
     *
     * @param [target] optional object to store the dimensions
     * @returns The plot size
     */
    getSize(target?: Dimension): Dimension;
    /**
     * Returns a copy of the model origin in world coordinates.<br>
     * The model origin is the center of the modellimits.<br>
     * @returns The model origin
     */
    getModelOrigin(): Vector3;
    /**
     * Returns a copy of the modellimits in world coordinates.<br>
     * The returned limits are either the one provided through the setOptions() or the one automatically computed by the plot.<br>
     * @param [viewModelLimits] gets the modelLimits that includes grid sprites and children of objects with a getWorldBoundingBox
     * @param [filter] that gets applied to the compute the model limits
     * @returns The model limits
     */
    getModelLimits(viewModelLimits?: boolean, filter?: Plot.FilterCallback): Box3;
    /**
     * Project the given (world) point to virtual screen space in place.<br>
     * @param point The point to project in world coordinates.<br>
     * @returns The projected point
     */
    project(point: Vector3): Vector3;
    /**
     * Adds and initializes the given tool.<br>
     * The tool will be notified it has been added and it will attach its system-event listeners.<br>
     * @param tool The tool to initialize and add.
     * @returns this
     */
    addTool(tool: AbstractTool): this;
    /**
     * Finds the tool matching the given name.<br>
     * If several tool match this name, the 'first' is returned.<br>
     * @param name The name of the tool to look for
     */
    getToolByName(name: string): AbstractTool;
    /**
     * Removes a tool (and disposes it).<br>
     * The given tool will be disposed only if it does belong to this plot.<br>
     * @param tool The tool to remove and dispose
     * @returns this
     */
    removeTool(tool: AbstractTool): this;
    /**
     * List all tools in the plot
     * @returns tools
     */
    listTool(): AbstractTool[];
    /**
     * Set the plot as 'dirty' so it gets redrawn during the next render phase.<br>
     * This also propagates an event notifying the plot's listeners that an invalidation has occurred.<br>
     * <br>
     * See {@link @int/geotoolkit3d/Event~Type} for built-in events, custom event types can also be used.<br>
     *
     * @param [event] The event that should be propagated as the reason of the invalidate
     * @returns this
     */
    invalidateObject(event?: Event): this;
    /**
     * Updates the model limits of the Plot by computing it using the current scene state.<br>
     * <br>
     * If 'automodellimits' is enabled, this should be called automatically when some operations occur (adding, removing a node, etc).<br>
     * <br>
     * However it should be called manually if an object in the scene is moved outside of the current modellimits manually.<br>
     * For example by changing its position attribute.<br>
     * <br>
     * The modellimits are used internally to improves accuracy of rendering & picking.<br>
     * Note: this method can have side effects if non standard filter was used.
     *
     * @param [filter] gets applied to the compute of model limits
     * @param [alwaysTraverseChildren] Forces the calculation to traverse children to get the extents of the whole view
     * @returns this
     */
    updateModelLimits(filter?: Plot.FilterCallback, alwaysTraverseChildren?: boolean): this;
    /**
     * Gets the WebGLRenderer
     * @returns renderer
     */
    getRenderer(): WebGLRenderer;
    /**
     * Returns usage statistics like WebGl calls per frame or amount of vertices rendered per frame.
     * @returns The statistics see THREE.WebGLRenderer.info for more details.
     */
    getUsageStatistics(): WebGLInfo;
    /**
     * Disposes the plot and all its resources.<br>
     * To do so, all objects contained in the scene will be disposed.<br>
     * The tools registered on this plot will also be disposed.<br>
     */
    dispose(): void;
    /**
     * Gets camera
     */
    getCamera(): PerspectiveCamera | OrthographicCamera;
    /**
     * Gets container
     * @returns container
     */
    getContainer(): HTMLElement;
    /**
     * Set watermark to draw over plot 3d
     * @param watermark watermark
     * @returns this
     */
    setWatermark(watermark: AnchoredShape): this;
    /**
     * Apply a translation to the root and camera for higher precision. <br>
     * Because renderer has a high precision error when working with large positions, set the root and camera closer to origin improves the accuracy.
     * Note that it temporarily changes camera's position, i.e. during beforeRender().
     * @param enabled to enable
     */
    setOriginTranslation(enabled: boolean): void;
}
export declare namespace Plot {
    /**
     * The plot options
     */
    export type Options = OptionsBase & {
        /**
         * The div element in which the canvas will be created and added
         */
        container?: HTMLElement;
        /**
         * If true, the plot will automatically update when a node is invalidated
         */
        autoupdate?: boolean;
        /**
         * Auto update time interval. window.requestAnimationFrame will be used if available and autoUpdateInterval not specified
         */
        autoupdateinterval?: number;
        /**
         * True to let the plot update the modellimits when an object is inserted/removed into the scene. If an object is moved outside of the current modellimits you can manually call plot.updateModelLimits()
         */
        autoupdatemodellimits?: boolean;
        /**
         * Apply a translation to the root and camera for higher precision. The side effect is it temporarily changes camera's position, i.e. during beforeRender().
         */
        applyorigintranslation?: boolean;
    };
    /**
     * options to set on this object
     */
    export type OptionsBase = {
        /**
         * The modellimits, necessary if autoupdatemodellimits is not enabled. Should be the boundingbox of the scene.
         */
        modellimits?: Box3;
        /**
         * This position becomes the effective origin for the scene for scaling purposes.
         */
        translation?: Vector3;
        /**
         * The global scale to be applied to the scene graph. This change the relation between user coordinates and world coordinates
         */
        scale?: Vector3;
        /**
         * The camera options
         */
        camera?: CameraOptions;
        /**
         * The renderer configuration
         */
        renderer?: RendererOptions & {
            /**
             * The renderer configuration. See ThreeJS documentation. (Note: you can set logarithmicDepthBuffer false to improve performance, but there may be some artifacts)
             */
            parameters?: WebGLRendererParameters;
            devicepixelratio?: number;
        };
        /**
         * Ambient lighting options
         */
        ambientlighting?: AmbientLightingOptions;
        /**
         * The camera lighting options
         */
        cameralighting?: CameraLightingOptions;
        /**
         * the postprocessing options
         */
        postprocessing?: PostProcessingOptions;
        /**
         * The default compass options.
         */
        compass?: CompassOptions;
        /**
         * flag for performance tools (frame rate and memory)
         */
        stats?: boolean;
        /**
         * Picking cache settings.
         */
        picking?: PickingOptions;
    };
    export type CameraOptions = {
        /**
         * The camera type
         */
        type?: CameraType;
        /**
         * The location of the camera in the scene
         */
        position?: Vector3;
        /**
         * The coordinates of the point the camera will look at
         */
        lookat?: Vector3;
        /**
         * The field-of-view angle in degrees (applies only to perspective camera)
         */
        fov?: number;
        /**
         * The frustum near clipping plane, the 'auto' mode let the plot compute the ideal planes that fit the current modellimits and provide the best accuracy
         */
        near?: number | 'auto';
        /**
         * The frustum near clipping plane, the 'auto' mode let the plot compute the ideal planes that fit the current modellimits and provide the best accuracy
         */
        far?: number | 'auto';
        /**
         * when set to Auto clipping planes, this is the minimum value that will be set on the near plane
         */
        minnear?: number;
        /**
         * when set to Auto clipping planes, this is the minimum value that will be set on the far plane
         */
        minfar?: number;
        /**
         * this will adjust the near plane to stay within this scale of the far (0 to disable)
         */
        nearfarscale?: number;
        /**
         * The way a plot handles resize when in Orthographic mode
         */
        orthoresize?: OrthographicResizeMode;
        /**
         * The camera controller configuration
         */
        controller?: ControllerOptions;
        up?: Vector3;
    };
    export type FilterCallback = (o: Object3D) => boolean;
    type RendererOptions = {
        /**
         * The renderer clearcolor color
         */
        clearcolor?: ColorRepresentation;
        /**
         * The renderer clearcolor alpha value (0,1)
         */
        clearcoloralpha?: number;
    };
    type AmbientLightingOptions = {
        /**
         * Determines if the ambient light is enabled
         */
        enabled?: boolean;
        /**
         * The color of the ambient light.
         */
        color?: ColorRepresentation;
    };
    type CameraLightingOptions = {
        /**
         * Set to true to enable camera lighting.
         */
        enabled?: boolean;
        /**
         * The color of the camera light.
         */
        color?: string;
        /**
         * The intensity of the camera light.
         */
        intensity?: number;
    };
    type PostProcessingOptions = {
        /**
         * enable postprocessing
         */
        enabled?: boolean;
        /**
         * the highlight options
         */
        highlight?: HighlightOptions;
        /**
         * the antialiasing options
         */
        antialias?: AntiAliasOptions;
    };
    type CompassOptions = {
        /**
         * An optional container for the default compass, if not specified one will be created. Note that in order to be correctly positioned, this container requires the given container to have a 'position' set.
         */
        container?: HTMLElement;
        /**
         * An optional canvas to render the compass to
         */
        canvas?: HTMLElement;
        /**
         * flag to create the compass canvas.
         */
        enabled?: boolean;
    };
    export type PickingOptions = {
        /**
         * True to enable the picking cache system. Default is true.<br>
         * Picking cache can save costly picking calculations by returning the cached picking result when conditions are met:<ul><li>
         * -two or more consecutive picking are done in very short timespan, configured by 'cachetimelimit'.</li><li>
         * -consecutive picking settings are identical to cached picking result: pick origin (caller), pick diameter, cursor position.</li></ul>
         * Use cases:<br>
         * On view with multiple tools, or with high refresh rate, multiple pickings can be requested in a very short amount of time.
         * Because picking is a costly process, involving offscreen-rendering all objects several time for each picking,
         * this can dramatically increase power consumption or induce performance loss when unnecessary picking are requested.
         */
        usecache?: boolean;
        /**
         * The lifespan of the picking cache in milliseconds, after which the picking result is automatically invalidated.<br>
         * Default is 33ms (the duration of a frame when rendering at 30FPS).
         */
        cachetimelimit?: number;
    };
    type ControllerOptions = {
        /**
         * The controller to be used to change the camera location.
         */
        type?: CameraControllerType | ControllerClass;
        /**
         * Set to true to automatically rotate around object. (only supports OrbitController)
         */
        autorotate?: boolean;
        /**
         * The controller options.
         * Please refer to the related Controller implementation for the complete list of options.
         * For TypeScript compliance, this field might need a type cast, ex:<br>
         * @example
         * 'options': {
         *    'pointerlock': true // Not an AbstractController option
         * } as FirstPersonController.Options
         */
        options?: AbstractController.Options;
    };
    type HighlightOptions = Partial<OutlinePass.Options> & Partial<HighlightPass.Options> & {
        /**
         * True if need to highlight edges of meshes
         */
        highlightedges?: boolean;
        /**
         * The highlight mode, define if the highlight is trigerred on mouse hover, or on mouse click.
         */
        mode?: HighlightType;
    };
    type AntiAliasOptions = SSAARenderPass.Options & {
        /**
         * the mode of anti-aliasing
         */
        mode?: AntiAliasing;
        enabled?: boolean;
    };
    export type ControllerClass = {
        new (options: {
            camera?: PerspectiveCamera | OrthographicCamera;
            plot?: Plot;
            position?: Vector3;
            lookat?: Vector3;
        }): AbstractController;
    };
    type EventArgs = {
        source: Event.Source;
        args: any;
    };
    export type EventMap = EventDispatcher.EventMap & {
        [BaseType.BeforeRender]: void;
        [BaseType.AfterRender]: void;
        [BaseType.Invalidate]: void;
        [BaseType.DuringRender]: EventArgs;
        [BaseType.RenderError]: EventArgs;
        [BaseType.Remove]: EventArgs;
        [BaseType.Camera]: EventArgs;
        [BaseType.Animation]: EventArgs;
        [BaseType.ModelLimits]: EventArgs;
    };
    export {};
}
