import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Point } from '@int/geotoolkit/util/Point';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
/**
 * Pyramid Chart reflects a hierarchical way of representing the data.
 * It divides the whole triangle into number of sections.
 * Size of each section is a percentage of data contributing with respect to the whole height.<br>
 * It takes arrays of Label names and its values.<br>
 */
export declare class PyramidChart extends CompositeNode {
    constructor(options?: PyramidChart.Options);
    /**
     * setData takes all the input and feeds it to the chart drawn
     * @param data data
     */
    setData(data: PyramidChart.Data): this;
    /**
     * sets all properties related to the chart
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: PyramidChart.Options): this;
    /**
     * gets any property of the chart
     * @returns properties
     */
    getProperties(): PyramidChart.OptionsOut;
    /**
     * Get data
     */
    getData(): PyramidChart.Data;
    setModelLimits(limits: Rect): this;
    /**
     * Returns the name and value represented by the section which is
     * referenced by the index provided.
     * @param index The index of the section
     * @returns Name and value or null if no such section
     */
    getSectionInfo(index: number): {
        name: string;
        value: number;
    };
    /**
     * Highlights the shape specified by the index and with the choice you can set it false too.
     * @param index of the section to be highlighted
     */
    highlight(index: number): this;
    /**
     * Performs selection of the node with its device coordinates
     * @param pt is the device coordinates received by mouse event
     * @param radius [radius =5] is the radius of selection
     * @returns index of the node being selected else returns -1
     */
    hitTest(pt: Point, radius: number): number;
}
export declare namespace PyramidChart {
    type Options = CompositeNode.Options & Data;
    type Data = {
        /**
         * Returns an array of label names.
         */
        names?: string[];
        /**
         * Returns an array of values corresponding to the label names.
         */
        value?: number[];
        /**
         * Returns an array of fill styles objects set.
         */
        fillstyle?: FillStyle.Type[];
        /**
         * Returns bool value to invert or not.
         */
        invert?: boolean;
        /**
         * Returns preferred alignment.
         */
        align?: string;
        /**
         * Returns line styles specified for each section.
         */
        linestyle?: LineStyle.Type[];
        border?: LineStyle.Type[];
        /**
         * Returns line length pointing the labels.
         */
        linelength?: number;
        /**
         * Returns if highlight is enabled or not.
         */
        highlight?: boolean;
        /**
         * returns color of the highlighting
         */
        highlightstyle?: RgbaColor | string;
    };
    /**
     * properties
     */
    type OptionsOut = CompositeNode.OptionsOut & Required<Data>;
}
