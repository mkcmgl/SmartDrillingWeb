import { Group } from '@int/geotoolkit/scene/Group';
import type { ViewMode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import { WellBoreNode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import { DeviatedCompositeNode } from '@int/geotoolkit/deviation/scene/DeviatedCompositeNode';
import { INodeEnumerable } from '@int/geotoolkit/scene/INodeEnumerable';
import { Rect } from '@int/geotoolkit/util/Rect';
import { LabelingStrategy } from '@int/geotoolkit/schematics/labeling/LabelingStrategy';
import type { Transformer2d } from '@int/geotoolkit/deviation/Transformer2d';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Trajectory2d } from '@int/geotoolkit/deviation/Trajectory2d';
import type { IViewModeBuilder } from '@int/geotoolkit/schematics/builder/IViewModeBuilder';
/**
 * Represents deviated well bore node with labels. It wraps well bore node with automatically created DeviatedCompositeNode.
 * @deprecated since 4.0. Use {@link @int/geotoolkit/schematics/scene/WellBoreWithLabels~WellBoreWithLabels} instead.
 * @fires @int/geotoolkit/schematics/scene/WellBoreNode~Events.ComponentsLoading
 * @fires @int/geotoolkit/schematics/scene/WellBoreNode~Events.ComponentsLoaded
 */
export declare class DeviatedWellBoreWithLabels extends Group implements INodeEnumerable {
    /**
     * @param [options] options
     */
    constructor(options?: DeviatedWellBoreWithLabels.Options);
    /**
     * Sets properties
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: DeviatedWellBoreWithLabels.Options): this;
    /**
     * Returns properties
     * @returns properties
     */
    getProperties(): DeviatedWellBoreWithLabels.OptionsOut;
    /**
     * Gets well bore view mode
     * @returns viewMode
     */
    getViewMode(): ViewMode;
    /**
     * Sets well bore view mode.
     * @param [viewMode] well bore view mode
     * @returns "model limits to bounds" depths mapping
     */
    setViewMode(viewMode?: ViewMode): IViewModeBuilder.BuildOptions;
    render(context: RenderingContext): this;
    renderAsync(context: RenderingContext, callback: Function): void;
    /**
     * Sets visualization options
     * @param options options see {@link @int/geotoolkit/schematics/scene/DeviatedWellBoreWithLabels~DeviatedWellBoreWithLabels#setProperties}
     * @returns this
     */
    setOptions(options: any): this;
    /**
     * Sets WebGL rendering
     * @param webGLRendering true for enable webgl rendering
     * @returns this
     */
    setWebGLRendering(webGLRendering: boolean): this;
    /**
     * Sets deviation options.
     *
     * @param deviation deviation
     * @returns this
     */
    setDeviation(deviation: DeviatedWellBoreWithLabels.DeviationOptions): this;
    setModelLimits(limits: Rect): this;
    /**
     * Gets deviation options
     *
     * @returns deviation options
     */
    getDeviation(): DeviatedCompositeNode.DeviationOptionsOut;
    /**
     * Sets layout handler
     * @param handler layout handler
     * @returns this
     */
    setOnDoLayoutHandler(handler: Function): this;
    /**
     * Gets layout handler
     * @returns layout handler
     */
    getOnDoLayoutHandler(): Function;
    /**
     * Gets well bore node
     */
    getWellBoreNode(): WellBoreNode;
    /**
     * Sets well bore node
     * @param wellBoreNode well bore node
     */
    setWellBoreNode(wellBoreNode: WellBoreNode): this;
    /**
     * Sets labeling strategy
     * @param strategy labeling strategy
     * @throws {Error} if parameter is not an instance of {@link @int/geotoolkit/schematics/labeling/LabelingStrategy~LabelingStrategy} class
     */
    setLabelingStrategy(strategy: LabelingStrategy): this;
    /**
     * Gets labeling strategy. Default: {@link @int/geotoolkit/schematics/labeling/DefaultDeviatedStrategy~DefaultDeviatedStrategy} instance
     */
    getLabelingStrategy(): LabelingStrategy;
}
export declare namespace DeviatedWellBoreWithLabels {
    /**
     * options
     */
    type Options = Group.Options & {
        /**
         * wellBore node
         */
        wellBoreNode?: WellBoreNode;
        /**
         * labeling strategy and strategy options see {@link @int/geotoolkit/schematics/labeling/DefaultDeviatedStrategy~DefaultDeviatedStrategy#setProperties}
         */
        labeling?: object;
        /**
         * labeling strategy
         */
        labelingStrategy?: LabelingStrategy;
        /**
         * trajectory options
         */
        trajectory?: {
            /**
             * lines options
             */
            lines?: {
                /**
                 * lines visibility
                 */
                visible?: boolean;
                /**
                 * linestyle
                 */
                linestyle?: any;
            };
            /**
             * stations options
             */
            stations?: {
                /**
                 * stations visibility
                 */
                visible?: boolean;
                /**
                 * stations symbol properties see {@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape#setProperties}
                 */
                symbol?: any;
            };
        };
        /**
         * define highlight properties
         */
        highlight?: {
            /**
             * define label highlight properties
             */
            label?: {
                /**
                 * define line style attribute for label highlight
                 */
                linestyle?: any;
                /**
                 * define fill style attribute for label highlight
                 */
                fillstyle?: any;
            };
        };
        /**
         * deviation options
         */
        deviation?: {
            /**
             * 2d-transformer to use
             */
            transformer?: Transformer2d;
            /**
             * track width
             */
            trackWidth?: number;
            /**
             * offset in pixels to the trajectory segment
             */
            offset?: number;
            /**
             * flag to enable clipping
             */
            clip?: number;
        };
    };
    /**
     * properties
     */
    type OptionsOut = Group.OptionsOut & {
        /**
         * wellBore node
         */
        wellBoreNode?: WellBoreNode;
        /**
         * labeling strategy and strategy properties see {@link @int/geotoolkit/schematics/labeling/DefaultDeviatedStrategy~DefaultDeviatedStrategy#setProperties}
         */
        labeling?: object;
        /**
         * labeling strategy
         */
        labelingStrategy?: LabelingStrategy;
        /**
         * trajectory properties
         */
        trajectory?: {
            /**
             * lines properties
             */
            lines?: {
                /**
                 * lines visibility
                 */
                visible?: boolean;
                /**
                 * linestyle
                 */
                linestyle?: any;
            };
            /**
             * stations properties
             */
            stations?: {
                /**
                 * stations visibility
                 */
                visible?: boolean;
                /**
                 * stations symbol properties see {@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape#setProperties}
                 */
                symbol?: any;
            };
        };
        /**
         * define highlight properties
         */
        highlight?: {
            /**
             * define label highlight properties
             */
            label?: {
                /**
                 * define line style attribute for label highlight
                 */
                linestyle?: any;
                /**
                 * define fill style attribute for label highlight
                 */
                fillstyle?: any;
            };
        };
        /**
         * deviation properties
         */
        deviation?: {
            /**
             * 2d-transformer to use
             */
            transformer?: Transformer2d;
            /**
             * track width
             */
            trackWidth?: number;
            /**
             * offset in pixels to the trajectory segment
             */
            offset?: number;
            /**
             * flag to enable clipping
             */
            clip?: number;
        };
    };
    /**
     * deviation
     */
    type DeviationOptions = {
        /**
         * trajectory along the path
         */
        trajectory: Trajectory2d;
        /**
         * transformer to be used
         */
        transformer?: Transformer2d;
        /**
         * track width
         */
        trackWidth?: number;
        /**
         * offset in pixels to the trajectory segment
         */
        offset?: number;
        /**
         * flag to enable clipping
         */
        clip?: number;
    };
}
