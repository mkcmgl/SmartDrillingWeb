import { ArrayLogDataSource } from '@int/geotoolkit/welllog/data/ArrayLogDataSource';
import { Log2DVisualData } from '@int/geotoolkit/welllog/data/Log2DVisualData';
import { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import { StateChanges } from '@int/geotoolkit/scene/Node';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Range } from '@int/geotoolkit/util/Range';
import { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import type { AbstractDataTable } from '@int/geotoolkit/data/AbstractDataTable';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Point } from '@int/geotoolkit/util/Point';
import { AbstractDecimationStrategy } from '@int/geotoolkit/welllog/log2d/AbstractDecimationStrategy';
/**
 * Column alignment type
 * @enum
 * @readonly
 */
export declare enum ColumnAlignment {
    /**
     * Alignment to the left
     */
    Left = "LEFT",
    /**
     * Alignment to the center
     */
    Center = "CENTER",
    /**
     * Alignment to the fixed column center
     */
    Table = "TABLE",
    /**
     * Alignment to the right (default)
     */
    Right = "RIGHT"
}
/**
 * Enum of row alignment types
 * @enum
 * @readonly
 */
export declare enum RowAlignment {
    /**
     * Alignment to the top
     */
    Top = "TOP",
    /**
     * Alignment to the center
     */
    Center = "CENTER"
}
/**
 * Enum of interpolation types
 * @enum
 * @readonly
 */
export declare enum InterpolationType {
    /**
     * Step plot mode (no interpolation)
     */
    Step = "STEP",
    /**
     * Linear plot mode
     */
    Linear = "LINEAR"
}
/**
 * Enum of plotMode modes
 * @enum
 * @readonly
 */
export declare enum PlotTypes {
    /**
     * Step plot mode (no interpolation)
     */
    Step = "STEP",
    /**
     * Linear plot mode
     */
    Linear = "LINEAR"
}
/**
 * Defines a 2D log visual. Data is passed in an Log2DVisualData containing rows of Log2DDataRow.
 * This visual is added to a log track to be displayed. <br>
 * Log2DVisual visual can be used to display FMI logs (Acoustic/Optic borehole imaging) or  density logs.<br>
 * It requires to provide column base data for each depth. The provided data is organized as a table: a collection of rows and columns inside the row.<br>
 * You can specify your values as in vertical or horizontal or both directions.<br>
 *
 * Please refer to tutorial Log2D Visual in Welllog.
 */
export declare class Log2DVisual extends LogAbstractVisual {
    /**
     * Constructor
     * @param [options] instance of log2data or object containing log visual configuration
     * @param [autoUpdate] automatic update from data source
     * @throws {Error} if the decimation strategy type is not based on the AbstractDecimationStrategy
     */
    constructor(options?: Log2DVisual.Options | Log2DVisualData | ArrayLogDataSource, autoUpdate?: boolean);
    clone(): Log2DVisual;
    protected copyConstructor(src: Log2DVisual, deepCopy?: boolean): this;
    /**
     * Returns if column decimation is enabled
     * @returns status if it is enabled
     */
    isColumnDecimationEnabled(): boolean;
    /**
     * Enable columns decimation
     * @param enable enable / disable decimation
     * @returns this
     */
    enableColumnDecimation(enable: boolean): this;
    /**
     * Sets the value of the cutoff used for removing NaN valued samples. Gaps will only be 'filled' when the cutoff value is non zero and the unit is convertible to the index unit.
     * @param cutoff The cutoff value. When non zero and a matching unit is set
     * @returns this
     */
    setGapFillCutoffValue(cutoff: number): this;
    /**
     * Returns the value of the cutoff used for removing NaN valued samples
     * @returns The cutoff value
     */
    getGapFillCutoffValue(): number;
    /**
     * Set the value of the gap. Value will be used to disconnect the sample if the distance between two samples in depth or time is more than specified value
     * @param value The maximum discontinuity allowed in depth or time
     * @returns this
     */
    setGapValue(value: number): this;
    /**
     * Returns The maximum discontinuity allowed in depth or time
     * @returns value
     */
    getGapValue(): number;
    /**
     * Sets the unit of the cutoff used for removing NaN valued samples. Gaps will only be 'filled'
     * when the cutoff value is non zero and the unit is convertible to the index unit. If unit is not specified
     * then curve index unit is used. if a depth or time interval is less than specified cutoff value then interval is connected and NaN
     * values between are removed.
     * @param unit The unit or unit symbol to use for the gap fill cutoff
     * @returns this
     */
    setGapFillCutoffUnit(unit: AbstractUnit | string): this;
    /**
     * Returns the unit of the cutoff used for removing NaN valued samples
     * @returns The cutoff unit
     */
    getGapFillCutoffUnit(): AbstractUnit;
    /**
     * Sets the unit of the gap to show discontinuity in sample
     * when the cutoff value is non zero and the unit is convertible to the index unit. If unit is not specified
     * then curve index unit is used. if a depth or time interval is less than specified cutoff value then interval is connected and NaN
     * values between are removed.
     * @param unit The unit
     * @returns this
     */
    setGapUnit(unit: AbstractUnit | string): this;
    /**
     * Returns the unit of the gap
     * @returns The cutoff unit
     */
    getGapUnit(): AbstractUnit;
    /**
     * Gets the description
     * @returns The description
     */
    getDescription(): string | null;
    /**
     * Sets the description
     * @param description The node description
     * @returns this
     */
    setDescription(description: string | null): this;
    /**
     * Returns type of interpolation for rows values
     * @returns interpolation
     */
    getRowsInterpolation(): InterpolationType;
    /**
     * Set type of interpolation for rows values
     * @param interpolation specify a type of interpolation between rows
     * @returns this
     */
    setRowsInterpolation(interpolation: InterpolationType): this;
    /**
     * Set wrap interpolation
     * @param wrapInterpolation type of the wrap interpolation to specify how to process the edge values
     * @returns this
     */
    setWrapInterpolation(wrapInterpolation: boolean): this;
    /**
     * Return wrap interpolation
     * @returns wrapInterpolation
     */
    getWrapInterpolation(): boolean;
    /**
     * Set interpolation alignment
     * @param alignment alignment of column
     * @returns this
     */
    setAlignment(alignment: ColumnAlignment): this;
    /**
     * Return interpolation alignment
     * @returns wrapInterpolation
     */
    getAlignment(): ColumnAlignment;
    /**
     * Set interpolation alignment
     * @param alignment alignment of row
     * @returns this
     */
    setRowAlignment(alignment: RowAlignment): this;
    /**
     * Return interpolation alignment
     * @returns row alignment
     */
    getRowAlignment(): RowAlignment;
    /**
     * Sets data
     *
     * @param data instance of log2data
     * @param [autoUpdate] automatic update from data source
     * @returns this
     */
    setData(data: Log2DVisual.DataInfo, autoUpdate?: boolean): this;
    /**
     * Return true if the representation is flipped horizontally
     *
     * @returns horizontal flip
     */
    isHorizontalFlip(): boolean;
    /**
     * Set horizontal flip of the representation
     *
     * @param enable enable flip
     * @returns this
     */
    setHorizontalFlip(enable: boolean): this;
    /**
     * Retrieves the  world transformation of the node to transform model
     * coordinates to the parent track
     */
    getWorldTransform(): Transformation | null;
    /**
     * Returns bounds in the parent coordinates
     */
    getBounds(): Rect | null;
    /**
     * @param [fullLimits] flag to return a full depth limits or mining depth limits without null values
     */
    getDataLimits(fullLimits: boolean): Rect | null;
    /**
     * Enable / disable usage limits from data. By default automatic limit is disabled
     * @param enable enable or disable usage data limits
     */
    setAutoAnglesLimits(enable: boolean): this;
    /**
     * Returns the status of the auto angle limits
     */
    getAutoAnglesLimits(): boolean;
    /**
     * Sets angles limits of the data. By default it is from 0 to 2*PI
     *
     * @param left left angle in radians
     * @param right right angle in radians
     */
    setAnglesLimits(left: number, right: number): this;
    /**
     * Returns angle limits
     */
    getAnglesLimits(): Range;
    /**
     * Returns data
     */
    getData(): Log2DVisualData | ArrayLogDataSource;
    /**
     * Sets color provider
     * @param colorProvider the color provider
     */
    setColorProvider(colorProvider?: ColorProvider | {
        type?: string;
    }): this;
    /**
     * Gets color provider
     */
    getColorProvider(): ColorProvider;
    /**
     * Sets Plot type to specify linear o step interpolation of values in columns
     * <p>
     * In linear interpolation mode it interpolates value from the previous column to the end of the current column
     * and the first column is ignored, which can be represented as end of the sector if consider each column as a sector.
     * if it is necessary to start from beginning of the sector or in the middle then you can specify offset equal to
     * the first column angle or
     * the half the first column angle.
     * </p>
     * @param mode plot types (step plot mode or linear plot mode) to be used for interpolation
     */
    setPlotType(mode: PlotTypes | string): this;
    /**
     * Gets plot type
     */
    getPlotType(): PlotTypes | string;
    /**
     * Sets the offset of data
     *
     * @param offsets array of the same size as data set
     * @example
     * // following example shows how to use setOffsets() method to rotate Log2DVisual
     * let degreesToRadians = function(degrees){
     * return degrees * Math.PI / 180;
     * };
     *
     * function createOffsets (data, offset) {
     * let offsets = [];
     * for (let i = 0; i < data.getRows().length; i++)
     * offsets.push(offset);
     * return offsets;
     * }
     *
     * log2dVisual.setOffsets(createOffsets(log2d.getData(), degreesToRadians(val)));
     */
    setOffsets(offsets: number[] | number | null): this;
    /**
     * Sets webGL rendering
     * @experimental
     * @param webglEnabled true, if webGL is needed for rendering
     * @returns this
     */
    setWebGLRendering(webglEnabled: boolean): this;
    /**
     * Gets webGL rendering
     * @experimental
     * @returns true, if webGL is used for rendering
     */
    getWebGLRendering(): boolean;
    /**
     * Returns the offset of data
     * @returns offset array of the same size as data set
     */
    getOffsets(): number[] | number;
    /**
     * Returns minimum depth of the data set
     */
    getMinDepth(): number;
    /**
     * Returns maximum depth of the data set
     */
    getMaxDepth(): number;
    /**
     * Hit test in the device coordinates
     * @param area model area or position
     * @param [radius] radius of selection
     * @returns hit test result
     */
    hitTest(area: Rect | Point, radius?: number): Log2DVisual.Hits | null;
    /**
     * Retrieves the world transformation of the spatial
     */
    getContentsTransform(): Transformation | null;
    /**
     * Renders node
     * @param context The rendering context to be used to draw this visual
     */
    render(context: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): Log2DVisual.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: Log2DVisual.Options): this;
    /**
     * Update state.
     * @param [regions] optional array to return invalid rectangles
     * @param [changes] optional parameter to specify a reason of changes
     * @returns this
     */
    updateState(regions?: Rect[], changes?: StateChanges): this;
    /**
     * Set decimation strategy for dense areas
     * @param decimationStrategy new decimation strategy
     * @throws {Error} if the decimation strategy is null or its type is not based on the AbstractDecimationStrategy
     */
    setDecimationStrategy(decimationStrategy: AbstractDecimationStrategy): this;
    /**
     * Get decimation strategy for dense areas
     */
    getDecimationStrategy(): AbstractDecimationStrategy;
}
export declare namespace Log2DVisual {
    /**
     * instance of log2data or object containing log visual configuration
     */
    type Options = LogAbstractVisual.Options & {
        /**
         * instance of log2Ddata datasource or JSON defining data structure
         */
        data?: Log2DVisualData | ArrayLogDataSource | {
            /**
             * datatable of log data
             */
            datatable?: AbstractDataTable;
            /**
             * properties of column angles
             */
            angles?: {
                /**
                 * array of angles
                 */
                values?: number[];
            };
        };
        /**
         * flag for automatic update from datasource
         */
        autoupdate?: boolean;
        /**
         * color provider
         */
        colorprovider?: ColorProvider | {
            /**
             * color provider type
             */
            type?: string;
        };
        /**
         * plot mode
         */
        plotmode?: PlotTypes | string;
        /**
         * the description
         */
        description?: string;
        /**
         * min angle
         */
        minangle?: number;
        /**
         * max angle
         */
        maxangle?: number;
        /**
         * auto angle model limits
         */
        autoanglelimits?: boolean;
        /**
         * type of the wrap interpolation to specify how to process the edge values
         */
        wrapinterpolation?: boolean;
        /**
         * specify a type of interpolation between rows
         */
        rowsinterpolation?: InterpolationType;
        /**
         * specify a type of interpolation alignment of column
         */
        columnalignment?: ColumnAlignment;
        /**
         * specify a type of interpolation alignment of row
         */
        rowalignment?: RowAlignment;
        /**
         * offsets
         */
        offsets?: number[];
        /**
         * an object containing cutoff options
         */
        gapfillcutoff?: {
            /**
             * The cutoff value. When non zero and a matching unit is set
             */
            value?: number;
            /**
             * unit The unit or unit symbol to use for the gap fill cutoff
             */
            unit?: AbstractUnit | string;
        };
        /**
         * true, if webGL is needed for rendering
         */
        webglrendering?: boolean;
        /**
         * true, if tiled cache is enabled for rendering
         */
        viewcache?: boolean;
        /**
         * enable column decimation if data has more columns than width of the visual in device
         */
        columndecimation?: boolean;
        /**
         * decimation strategy for dense areas
         */
        decimationstrategy?: AbstractDecimationStrategy;
    };
    /**
     * instance of log2data
     */
    type DataInfo = Log2DVisualData | ArrayLogDataSource | {
        /**
         * datatable of log data
         */
        datatable?: AbstractDataTable;
        /**
         * properties of column angles
         */
        angles?: {
            /**
             * array of angles
             */
            values?: number[];
        };
        /**
         * array of rows data
         */
        rows?: {
            /**
             * depth index
             */
            depth: number;
            /**
             * array of values
             */
            values: number[];
            /**
             * array of angles
             */
            angles: number[];
        }[];
        /**
         * flag for automatic update from datasource
         */
        autoupdate?: boolean;
    };
    /**
     * properties object
     */
    type OptionsOut = LogAbstractVisual.OptionsOut & {
        /**
         * flag for automatic update from datasource
         */
        autoupdate?: boolean;
        /**
         * color provider
         */
        colorprovider?: ColorProvider;
        /**
         * plot mode
         */
        plotmode?: PlotTypes | string;
        /**
         * the description
         */
        description?: string;
        /**
         * min angle
         */
        minangle?: number;
        /**
         * max angle
         */
        maxangle?: number;
        /**
         * auto angle model limits
         */
        autoanglelimits?: boolean;
        /**
         * type of the wrap interpolation to specify how to process the edge values
         */
        wrapinterpolation?: boolean;
        /**
         * specify a type of interpolation between rows
         */
        rowsinterpolation?: InterpolationType;
        /**
         * specify a type of interpolation alignment of column
         */
        columnalignment?: ColumnAlignment;
        /**
         * specify a type of interpolation alignment of row
         */
        rowalignment?: RowAlignment;
        /**
         * offsets
         */
        offsets?: number | number[];
        /**
         * an object containing cutoff options
         */
        gapfillcutoff?: {
            /**
             * The cutoff value. When non zero and a matching unit is set
             */
            value: number;
            /**
             * unit The unit or unit symbol to use for the gap fill cutoff
             */
            unit: AbstractUnit;
        };
        /**
         * true, if webGL is needed for rendering
         */
        webglrendering?: boolean;
        /**
         * true, if tiled cache is enabled for rendering
         */
        viewcache?: boolean;
        /**
         * enable column decimation if data has more columns than width of the visual in device
         */
        columndecimation?: boolean;
        /**
         * decimation strategy for dense areas
         */
        decimationstrategy?: AbstractDecimationStrategy;
    };
    type Hits = {
        colorvalue: number;
        columnnumber: number;
    };
}
