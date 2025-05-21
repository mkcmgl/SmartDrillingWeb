/**
 * @module geotoolkit/controls/shapes/PolarAxis
 */
import { Point } from '@int/geotoolkit/util/Point';
import { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { PolarGrid } from '@int/geotoolkit/controls/shapes/PolarGrid';
export declare class PolarAxis extends Shape {
    constructor(options?: PolarAxis.Options);
    /**
     * Return chart options
     * @returns {object} options
     */
    getProperties(): PolarAxis.OptionsOut;
    /**
     * Set the data to be plotted in chart
     *
     * @param options to be charted in polar chart
     * @returns this
     */
    setProperties(options: PolarAxis.Options): this;
    /**
     * Returns current bounds
     *
     * @returns {Rect} bounds
     */
    getBounds(): Rect;
    /**
     * Sets bounds of the node in the parent coordinates
     *
     * @param {Rect} bounds bound of the node in the parent coordinates
     * @returns {PolarAxis} this
     */
    setBounds(bounds: Rect): this;
    /**
     * Render polar chart shape
     * @param {RenderingContext} context Rendering Context
     */
    render(context: RenderingContext): void;
}
export declare namespace PolarAxis {
    /**
     * label format options
     */
    type LabelFormat = {
        text: string;
        value: number;
        padding: {
            x: number;
            y: number;
        };
        textstyle: TextStyle;
        linestyle: LineStyle;
        fillstyle: FillStyle;
    };
    /**
     * An object containing the properties to set
     */
    type Options = Shape.Options & {
        polargrid?: PolarGrid;
        center?: Point;
        startangle?: number;
        relativeangle?: boolean;
        step?: number;
        modelradius?: number;
        outerradius?: number;
        labels?: {
            visible?: boolean;
            formatter?: (format: PolarAxis.LabelFormat) => PolarAxis.LabelFormat;
            textstyle?: TextStyle.Type;
            linestyle?: LineStyle.Type;
            fillstyle?: FillStyle.Type;
        };
    };
    /**
     * An object containing chart properties
     */
    type OptionsOut = Shape.OptionsOut & {
        polargrid?: PolarGrid;
        center?: Point;
        startangle?: number;
        relativeangle?: boolean;
        step?: number;
        modelradius?: number;
        outerradius?: number;
        labels?: {
            visible?: boolean;
            formatter?: (format: PolarAxis.LabelFormat) => PolarAxis.LabelFormat;
            textstyle?: TextStyle.Type;
            linestyle?: LineStyle.Type;
            fillstyle?: FillStyle.Type;
        };
    };
}
