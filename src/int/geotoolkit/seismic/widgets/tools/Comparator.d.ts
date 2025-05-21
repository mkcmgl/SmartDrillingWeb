import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { SeismicViewWidget } from '@int/geotoolkit/seismic/widgets/SeismicViewWidget';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import type { SeismicPipeline } from '@int/geotoolkit/seismic/pipeline/SeismicPipeline';
import type { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
/**
 * Creates default implementation of the seismic comparison tool.
 *
 * @example
 * // To initialize the comparator/layer tool
 * seismicWidget.getToolByName('comparator').setEnabled(true)
 * @example
 * // By default the orientation is vertical. Following example shows how to change the orientation.
 * import {Orientation} from '@int/geotoolkit/util/Orientation';
 * seismicWidget.getToolByName('comparator').setOrientation(Orientation.Horizontal);
 */
export declare class Comparator extends AbstractTool {
    /**
     * @param [options] object or the target widget to add the comparator to
     * @param [manipulatorLayer] layer for holding temporary shapes
     */
    constructor(options?: Comparator.Options | SeismicViewWidget, manipulatorLayer?: CompositeNode);
    /**
     * Sets properties
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: Comparator.Options): this;
    /**
     * dispose object
     */
    dispose(): void;
    /**
     * returns pipeline
     * @returns pipeline
     */
    getPipeline(): SeismicPipeline;
    /**
     * set pipeline
     * @param pipeline pipeline
     * @returns this
     */
    setPipeline(pipeline: SeismicPipeline): this;
    /**
     * Returns visual options
     * @returns object containing visual options
     */
    getOptions(): Comparator.OptionsOut;
    /**
     * Set visual options
     * @param options visual options
     * @returns this
     */
    setOptions(options: Comparator.OptionsType): this;
    /**
     * Returns split flag
     */
    getSplit(): boolean;
    /**
     * Set split flag
     * @param split default is true
     */
    setSplit(split: boolean): this;
    /**
     * Return continuous mode flag
     */
    getContinuous(): boolean;
    /**
     * Set continuous mode flag
     * @param continuous continuous mode flag
     */
    setContinuous(continuous: boolean): this;
    /**
     * Set orientation
     * @param orientation orientation
     * @returns this
     */
    setOrientation(orientation: Orientation): this;
    /**
     * returns splitter orientation
     * @returns orientation
     */
    getOrientation(): Orientation;
    /**
     * Returns split position
     * @returns return splitter position (between 0..1)
     */
    getPosition(): number;
    /**
     * Set split position
     * @param position splitter position (interval [0, 1])
     * @returns this
     */
    setPosition(position: number): this;
    protected start(eventArgs?: ProxyEventArgs): this;
}
export declare namespace Comparator {
    /**
     * object or the target widget to add the comparator to
     */
    type Options = AbstractTool.Options & {
        /**
         * the target widget to add the comparator to.
         */
        widget?: SeismicViewWidget;
    };
    /**
     * object containing visual options
     */
    type OptionsOut = {
        /**
         * splitter width
         */
        width: number;
        /**
         * splitter border line style
         */
        linestyle: LineStyle;
        /**
         * splitter fill style
         */
        fillstyle: FillStyle;
    };
    /**
     * visual options
     */
    type OptionsType = {
        /**
         * splitter width
         */
        width?: number;
        /**
         * splitter border line style
         */
        linestyle?: LineStyle | LineStyle.Options | string;
        /**
         * splitter fill style
         */
        fillstyle?: FillStyle | FillStyle.Options | string;
    };
}
