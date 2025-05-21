/**
 * @module geotoolkit3d/widgets/scatter/ScatterPlot
 */
import { AbstractWidget } from '@int/geotoolkit3d/widgets/AbstractWidget';
import type { Merge } from '@int/geotoolkit/base';
import { DataTable } from '@int/geotoolkit/data/DataTable';
import type { Color, OrthographicCamera, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { Box3, Texture as BASETexture, Vector3 } from 'three';
import { Grid } from '@int/geotoolkit3d/scene/grid/Grid';
import { DataSeries } from '@int/geotoolkit/data/DataSeries';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import type { Plot } from '@int/geotoolkit3d/Plot';
import type { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import type { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { SymbolGeometry, SymbolTexture } from '@int/geotoolkit3d/widgets/scatter/Symbols';
import type { PointsPickingResult } from '@int/geotoolkit3d/picking/pickingrenderer/PointsPickingResult';
import type { ColorMapShaderMaterial } from '@int/geotoolkit3d/scene/ColorMapShaderMaterial';
/**
 * Enum of symbols.<br>
 * The geometries provided by this enum are used to display a symbol in 3D.
 * @deprecated since 4.0, please use {@link @int/geotoolkit3d/widgets/scatter/Symbols~Symbol3D} instead
 * @enum
 * @readonly
 */
export declare const Symbol3D: {
    /**
     * A sphere symbol
     * @deprecated since 4.0, please use {@link @int/geotoolkit3d/widgets/scatter/Symbols~Symbol3D~sphere} instead
     */
    sphere: SymbolGeometry;
    /**
     * A cube symbol
     * @deprecated since 4.0, please use {@link @int/geotoolkit3d/widgets/scatter/Symbols~Symbol3D~cube} instead
     */
    cube: SymbolGeometry;
    /**
     * A pyramid symbol
     * @deprecated since 4.0, please use {@link @int/geotoolkit3d/widgets/scatter/Symbols~Symbol3D~pyramid} instead
     */
    pyramid: SymbolGeometry;
};
/**
 * Scatter plot 3D is a three-dimensional data visualization that uses points to represent values.<br>
 * It's supposed to work as a widget, with features such as cursor picking, highlight, cursor tool and tooltip.<br>
 *
 * Supported data formats are {@link @int/geotoolkit/data/DataTable~DataTable} and JS array.<br>
 * <br>
 * Users can add different 2D and 3D symbols to the grid using setData(). The new data does not override current data.
 * This enables the user to show different symbol at the same time.<br>
 * Note that for performance purpose, it's recommended to use 2d symbol for large dataset.<br>
 * The user needs to use dispose() method to dispose data.<br>
 * <br>
 * Dots projection on each grid plane is by default enabled, but can be disabled by user.<br>
 * Note that geotoolkit3d.grid.Grid is built-in for the reason of data projection.
 * If you need to configure grid, please use setOptions() and provide gridoption object.<br>
 */
export declare class ScatterPlot extends AbstractWidget {
    constructor(options: ScatterPlot.Options);
    /**
     * Set data for scatterplot.<br>
     * Projection is based on data set here.
     * @param name the name for this dataset
     * @param symbol the 2D/3D symbol to use
     * @param data the datatable or data object
     * @param [projection] the options to configure projection
     */
    setData(name: string, symbol: string | SymbolTexture | SymbolGeometry, data: ScatterPlot.Data, projection?: ScatterPlot.Options['projection']): void;
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * setOptions does not update data, use setData() instead.<br>
     */
    setOptions(options?: ScatterPlot.OptionsBase): this;
    /**
     * Get options as json object.
     * @returns options
     */
    getOptions(): ScatterPlot.OptionsBaseOut;
    /**
     * Get a point's data, by its index and dataset name.
     * @param {number} index the point index in its data set.
     * @param {string} [name] the data set name this point belongs to.
     * Defaults to "default", which is the default if the set was build without a name.
     */
    getPointData(index: number, name?: string): ScatterPlot.PointData | null;
    /**
     * Retrieve a point's data by using a picking result, if the picked object belong to this ScatterPlot.
     */
    getPointDataByPicking(pickingResult: PointsPickingResult | PointsPickingResult[]): ScatterPlot.PointData | null;
    /**
     * Update all projections based on current grid model limit.<br>
     * Only needed when the user change the grid manually.
     */
    updateProjection(): void;
    beforeRender(scene: Scene, camera: PerspectiveCamera | OrthographicCamera, plot: Plot, renderer: WebGLRenderer): this;
    /**
     * Toggle projection by given direction and flag
     * @param direction 'topbottom'/'leftright'/'frontback'
     * @param flag true or false
     */
    toggleProjection(direction: string, flag: boolean): void;
    /**
     * Get the grid limit
     * @returns box
     */
    getGridLimit(): Box3;
    /**
     * Get the names of current data set
     * @returns this
     */
    getDataSetName(): string[];
    /**
     * Dispose objects in scatterplot.<br>
     * If name is provided, it only disposes the corresponding object/projection
     * @param [name] to delete the object in this name
     */
    dispose(name?: string): void;
}
export declare namespace ScatterPlot {
    type Options = {
        /**
         * The datatable or data object
         */
        data: DataTable | {
            /**
             * The data for x axis
             */
            x?: DataSeries | number[];
            /**
             * The data for y axis
             */
            y?: DataSeries | number[];
            /**
             * The data for z axis
             */
            z?: DataSeries | number[];
            /**
             * The data for point color value
             */
            value?: DataSeries | number[];
            /**
             * The data for point size
             */
            size?: DataSeries | number[];
            /**
             * The data for point visibility
             */
            visible?: DataSeries | number[] | boolean[];
            /**
             * The name of this dataset. If not specified, it will be named "default".
             */
            name?: string;
        };
        /**
         * The options for the ScatterPlot Grid. See {@link @int/geotoolkit3d/scene/grid/Grid~Grid}
         */
        gridoption: Grid.Options;
        /**
         * The colorprovider
         */
        colorprovider?: ColorProvider | string | Color;
        /**
         * The symbol to use
         */
        symbol?: string | SymbolTexture | SymbolGeometry;
        /**
         * The opacity
         */
        opacity?: number;
        /**
         * Dots projection on grid planes
         */
        projection?: {
            /**
             * Enable projection or not
             */
            enable?: boolean;
            /**
             * To manually adjust projection size
             */
            sizefactor?: number;
            /**
             * The opacity for projection
             */
            opacity?: number;
            /**
             * If provided, it will add top and bottom projections
             */
            topbottom?: ProjectionMaterialOptions;
            /**
             * If provided, it will add left and right projections
             */
            leftright?: ProjectionMaterialOptions;
            /**
             * If provided, it will add front and back projections
             */
            frontback?: ProjectionMaterialOptions;
        };
    };
    /**
     * The datatable or data object
     */
    type Data = DataTable | {
        /**
         * The data for x axis
         */
        x?: DataSeries | number[];
        /**
         * The data for y axis
         */
        y?: DataSeries | number[];
        /**
         * The data for z axis
         */
        z?: DataSeries | number[];
        /**
         * The data for point color value
         */
        value?: DataSeries | number[];
        /**
         * The data for point size
         */
        size?: DataSeries | number[];
        /**
         * The data for point visibility
         */
        visible?: DataSeries | number[] | boolean[];
    };
    type OptionsBase = Object3D.Options & {
        /**
         * A color provider or a single color in css format
         */
        colorprovider?: ColorProvider | string | Color;
        /**
         * The option object for grid. See {@link @int/geotoolkit3d/scene/grid/Grid~Grid}
         */
        gridoption?: Grid.OptionsBase;
        /**
         * Change color or opacity of projections, or disable projections. Cannot be used to change data
         */
        projection?: Options['projection'];
    };
    type OptionsBaseOut = Required<Object3D.Options> & Options;
    /**
     * The point datas retrieved from the ScatterPlot.
     */
    type PointData = {
        /**
         * The dataset name this point belongs to, if defined.
         * If it was not specified, it will be named "default".
         */
        datasetname: string;
        /**
         * The index of this point in its dataset.
         */
        index: number;
        /**
         * The 3D coordinates of this point.
         */
        position: Vector3;
        /**
         * If this point is flagged as visible or not.
         */
        visible: boolean;
        /**
         * The relative size of the point.
         */
        size: number;
        /**
         * The value of the point.
         */
        value: number;
        /**
         * The color of the point.
         */
        color: RgbaColor;
    };
    type ProjectionMaterialOptions = Merge<ColorMapShaderMaterial.Options & {
        /**
         * The symbol used for drawing the points projections.
         */
        symbol?: SymbolTexture;
    }, ProjectionOptions>;
    type ShaderOptionsOut = {
        /**
         * The Symbol texture used for the projection drawing
         */
        symbol: BASETexture;
        /**
         * The color of the projection
         */
        color: Color;
        /**
         * The projection opacity
         */
        opacity: number;
        /**
         * The opacity threshold until the pixel get discarded
         */
        alphatest: number;
        /**
         * The resolution scaling factor
         */
        pixelscale: number;
    };
    type ProjectionOptions = {
        /**
         * The color of the projection
         */
        color?: string | Color;
        /**
         * The Symbol texture used for the projection drawing
         */
        symbol?: BASETexture;
        /**
         * The projection opacity
         */
        opacity?: number;
    };
}
