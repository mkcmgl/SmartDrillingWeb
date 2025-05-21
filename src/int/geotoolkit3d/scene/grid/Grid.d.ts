/**
 * @module geotoolkit3d/scene/grid/Grid
 */
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { Color, Object3D as ThreeObject3D, OrthographicCamera, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { Box3, Vector3 } from 'three';
import type { GridLegend } from '@int/geotoolkit3d/scene/grid/legend/GridLegend';
import type { Plot } from '@int/geotoolkit3d/Plot';
import type { Text2d } from '@int/geotoolkit3d/scene/Text2d';
/**
 * Enum of Plane display strategy.<br>
 * <br>
 * The functions provided by this enum are used to define which plane of the grid should be visible.<br>
 * The grid always has 6 planes (one for each face), those strategies determine if some plane should be hidden to let the user see
 * through it.<br>
 */
export declare class Mode {
    /**
     * Always show all grid planes
     */
    static box(): boolean;
    /**
     * Show grid planes that do not overlap any other grid planes.
     */
    static openbox(gridPlane: ThreeObject3D, scene: Scene, camera: PerspectiveCamera | OrthographicCamera): boolean;
    /**
     * Show only the grid planes that are facing the camera (IE: only and at most 3 planes visible at all times)
     */
    static back(gridPlane: ThreeObject3D, scene: Scene, camera: PerspectiveCamera | OrthographicCamera): boolean;
}
/**
 * A 3D grid object.<br>
 * <br>
 * This object provides a shape that can be used to display axis/grids in a 3D scene.<br>
 * The grid is composed of 6 planes that can be made visible independently, see {@link @int/geotoolkit3d/scene/grid/Grid~Mode}.<br>
 * <br>
 * The grid location and size can be configured independently of its labels.<br>
 * The actual values displayed and the location/size of the grid is left to the calling code.<br>
 * <br>
 * To do so, the grid actual location and size can be configured through 'start/end'.<br>
 * And its labels can be configured through 'modelstart/model/end'.<br>
 * <br>
 * grid planes are made of grid axis (borders) and grid lines (intermediate ticks).<br>
 */
export declare class Grid extends Object3D {
    constructor(options: Grid.Options);
    /**
     * Return world bounding box of the grid
     * @returns bounding box
     */
    getWorldBoundingBox(): Box3;
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     */
    setOptions(options?: Grid.OptionsBase): this;
    /**
     * Get grid options
     */
    getOptions(): Grid.OptionsBaseOut;
    /**
     * Get axis outlines
     * @returns axis outlines
     */
    getOutlines(): Grid.OutlinesOptions;
    /**
     * Get title outlines
     * @returns title outlines
     */
    getTitleOutlines(): Grid.OutlinesOptions;
    /**
     * Return the grid's location 'start'
     */
    getStart(): Vector3;
    /**
     * Return the grid's location 'end'
     */
    getEnd(): Vector3;
    /**
     * Return the grid's mode
     * @returns The grid mode
     */
    getMode(): Grid.ModeCallback | null;
    /**
     * Return the grid's tick counts
     * @returns The ticks count
     */
    getCounts(): Vector3 | null;
    /**
     * Return the grid's 'modelstart'
     * @returns The grid's modelstart
     */
    getModelStart(): Vector3 | null;
    /**
     * Return the grid's 'modelend'
     * @returns The grid's modelend
     */
    getModelEnd(): Vector3 | null;
    /**
     * Get the six grid planes
     * @returns planes
     */
    getPlanes(): Record<Grid.PlaneName, ThreeObject3D>;
    /**
     * Add the given legend to this grid planes.
     */
    addLegend(legend: GridLegend): void;
    /**
     * This function is called prior to rendering and can update this object's content.<br>
     * <br>
     * It should not trigger any invalidateObject though.<br>
     * Note that it is not necessary nor recommended to explicitly call beforeRender on this object's children as beforeRender will be called on all nodes present in the scene.<br>
     * <br>
     * This will be executed after the transformations simplification.<br>
     * <br>
     * @see {@link @int/geotoolkit3d/Plot~Plot} for more details on the render steps
     * @param scene The scene
     * @param camera The camera used for this render phase.
     * @param plot The 3D plot
     * @param renderer The renderer
     */
    beforeRender(scene: Scene, camera: PerspectiveCamera | OrthographicCamera, plot: Plot, renderer: WebGLRenderer): this;
}
export declare namespace Grid {
    /**
     * The options
     */
    type Options = {
        /**
         * The start location of the grid in world coordinates
         */
        start?: Vector3;
        /**
         * The end location of the grid in world coordinates
         */
        end?: Vector3;
        /**
         * The displayed value's start
         */
        modelstart?: Vector3;
        /**
         * The displayed value's end
         */
        modelend?: Vector3;
        /**
         * The grid tick counts (at least 2,2,2)
         */
        counts?: Vector3;
        /**
         * The axis options
         */
        axis?: {
            /**
             * The distance factor between label and axis
             */
            distance?: number;
            /**
             * Defines the axis linestyles. Note that linestyle.width is not supported by windows-webgl.
             */
            linestyles?: {
                /**
                 * The X axis line style
                 */
                x?: LineStyle;
                /**
                 * The Y axis line style
                 */
                y?: LineStyle;
                /**
                 * The Z axis line style
                 */
                z?: LineStyle;
            };
            /**
             * Defines the axis labels style
             */
            textstyles?: {
                /**
                 * The X axis label style
                 */
                x?: TextStyle;
                /**
                 * The Y axis label style
                 */
                y?: TextStyle;
                /**
                 * The Z axis label style
                 */
                z?: TextStyle;
            };
            /**
             * The functions responsible for formatting the axis values to text
             */
            formatters?: {
                /**
                 * The X axis label formatter
                 */
                x?: FormatterCallback;
                /**
                 * The Y axis label formatter
                 */
                y?: FormatterCallback;
                /**
                 * The Z axis label formatter
                 */
                z?: FormatterCallback;
            };
            /**
             * axis outlines
             */
            outlines?: OutlinesOptions;
        };
        /**
         * The axis titles
         */
        title?: {
            /**
             * Factor used to determine title position compared to the axis. (0 being closer to the axis)
             */
            distance?: number;
            /**
             * The axis title texts
             */
            texts?: {
                /**
                 * The X axis title
                 */
                x?: string;
                /**
                 * The Y axis title
                 */
                y?: string;
                /**
                 * The Z axis title
                 */
                z?: string;
            };
            /**
             * The axis title styles
             */
            textstyles?: {
                /**
                 * The X axis title text style
                 */
                x?: TextStyle;
                /**
                 * The Y axis title text style
                 */
                y?: TextStyle;
                /**
                 * The Z axis title text style
                 */
                z?: TextStyle;
            };
            /**
             * title outlines
             */
            outlines?: OutlinesOptions;
        };
        /**
         * The axis grids
         */
        grid?: {
            /**
             * The grid linestyles. Note that linestyle.width is not supported by windows-webgl.
             */
            linestyles?: {
                /**
                 * The X grid line style
                 */
                x?: LineStyle;
                /**
                 * The Y grid line style
                 */
                y?: LineStyle;
                /**
                 * The Z grid line style
                 */
                z?: LineStyle;
            };
        };
        /**
         * The display strategy to show/hide grid planes depending on camera position
         */
        mode?: Mode;
        /**
         * plane color
         */
        planecolor?: string | Color;
        /**
         * plane opacity
         */
        planeopacity?: number;
    };
    /**
     * The options
     */
    type OptionsBase = Object3D.Options & {
        /**
         * The start location of the grid in world coordinates
         */
        start?: Vector3;
        /**
         * The end location of the grid in world coordinates
         */
        end?: Vector3;
        /**
         * The displayed value's start
         */
        modelstart?: Vector3;
        /**
         * The displayed value's end
         */
        modelend?: Vector3;
        /**
         * The grid tick counts (at least 2,2,2)
         */
        counts?: Vector3;
        /**
         * The axis options
         */
        axis?: {
            /**
             * Defines the axis linestyles. Note that linestyle.width is not supported by windows-webgl.
             */
            linestyles?: {
                /**
                 * The X axis line style
                 */
                x?: LineStyle;
                /**
                 * The Y axis line style
                 */
                y?: LineStyle;
                /**
                 * The Z axis line style
                 */
                z?: LineStyle;
            };
            /**
             * Defines the axis labels style
             */
            textstyles?: {
                /**
                 * The X axis label style
                 */
                x?: TextStyle;
                /**
                 * The Y axis label style
                 */
                y?: TextStyle;
                /**
                 * The Z axis label style
                 */
                z?: TextStyle;
            };
            /**
             * The functions responsible for formatting the axis values to text
             */
            formatters?: {
                /**
                 * The X axis label formatter
                 */
                x?: FormatterCallback;
                /**
                 * The Y axis label formatter
                 */
                y?: FormatterCallback;
                /**
                 * The Z axis label formatter
                 */
                z?: FormatterCallback;
            };
            /**
             * axis outlines
             */
            outlines?: OutlinesOptions;
        };
        /**
         * The axis titles
         */
        title?: {
            /**
             * The axis title texts
             */
            texts?: {
                /**
                 * The X axis title
                 */
                x?: string;
                /**
                 * The Y axis title
                 */
                y?: string;
                /**
                 * The Z axis title
                 */
                z?: string;
            };
            /**
             * Factor (between 0 and 1) used to determine title position compared to the axis. (0 being closer to the axis)
             */
            distance?: number;
            /**
             * The axis title styles
             */
            textstyles?: {
                /**
                 * The X axis title text style
                 */
                x?: TextStyle;
                /**
                 * The Y axis title text style
                 */
                y?: TextStyle;
                /**
                 * The Z axis title text style
                 */
                z?: TextStyle;
            };
            /**
             * title outlines
             */
            outlines?: OutlinesOptions;
        };
        /**
         * The axis grids
         */
        grid?: {
            /**
             * The grid linestyles. Note that linestyle.width is not supported by windows-webgl.
             */
            linestyles?: {
                /**
                 * The X grid line style
                 */
                x?: LineStyle;
                /**
                 * The Y grid line style
                 */
                y?: LineStyle;
                /**
                 * The Z grid line style
                 */
                z?: LineStyle;
            };
        };
        /**
         * The display strategy to show/hide grid planes depending on camera position
         */
        mode?: Mode;
        /**
         * plane color
         */
        planecolor?: string | Color;
        /**
         * plane opacity
         */
        planeopacity?: number;
    };
    /**
     * Callback function to define which plane of the grid should be visible.
     * See {@link @int/geotoolkit3d/scene/grid/Grid~Mode} methods for the built-in modes.
     */
    type ModeCallback = (gridPlane: ThreeObject3D, scene: Scene, camera: PerspectiveCamera | OrthographicCamera) => boolean;
    type OptionsBaseOut = Required<OptionsBase & Object3D.Options>;
    type FormatterCallback = (value: number, axisSize?: number) => string;
    type PlaneName = 'right' | 'left' | 'bottom' | 'top' | 'front' | 'back';
    type OutlinesOptions = {
        /**
         * The labels outline options on the X axis
         */
        x?: Text2d.OutlineOptions;
        /**
         * The labels outline options on the Y axis
         */
        y?: Text2d.OutlineOptions;
        /**
         * The labels outline options on the Z axis
         */
        z?: Text2d.OutlineOptions;
    };
    type TextStyles = {
        /**
         * The text style for the X axis
         */
        x?: TextStyle;
        /**
         * The text style for the Y axis
         */
        y?: TextStyle;
        /**
         * The text style for the Z axis
         */
        z?: TextStyle;
    };
    type Formatters = {
        /**
         * The label text formatter for the X axis
         */
        x: Grid.FormatterCallback;
        /**
         * The label text formatter for the Y axis
         */
        y: Grid.FormatterCallback;
        /**
         * The label text formatter for the Z axis
         */
        z: Grid.FormatterCallback;
    };
}
