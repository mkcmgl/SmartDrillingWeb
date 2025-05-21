/**
 * @module geotoolkit/axis/CurvedAxis
 */
import { LabelPosition, TickPosition } from '@int/geotoolkit/axis/TickInfo';
import { ScaledShape } from '@int/geotoolkit/scene/shapes/ScaledShape';
import { AdaptiveTickGenerator } from '@int/geotoolkit/axis/AdaptiveTickGenerator';
import { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
/**
 * CurvedAxis draw axis along arbitrary path with given minimum and maximum values
 * This class uses the {@link @int/geotoolkit/axis/TickGenerator~TickGenerator} which is passed to it and creates an axis.<br>
 */
export declare class CurvedAxis extends ScaledShape {
    /**
     * @param [options] options
     */
    constructor(options?: CurvedAxis.Options | LineStyle.Type);
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: CurvedAxis.Options): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties
     */
    getProperties(): CurvedAxis.OptionsOut;
    /**
     * Set baseline path for axis to be plotted
     * @param [path] baseline path
     */
    setData(path?: CurvedAxis.Path): this;
    /**
     * Get baseline path for axis to be plotted
     * @returns baseline path
     */
    getData(): CurvedAxis.Path;
    /**
     * Sets minimum label value on axis
     * @param minValue minimum label value
     * @returns this
     */
    setMinValue(minValue: number): this;
    /**
     * Return minimum label value on axis
     * @returns minimum label value
     */
    getMinValue(): number;
    /**
     * Sets maximum label value on axis
     * @param maxValue maximum label value
     * @returns this
     */
    setMaxValue(maxValue: number): this;
    /**
     * Return maximum label value on axis
     * @returns maximum label value
     */
    getMaxValue(): number;
    /**
     * Sets tick generator
     * @param tickGenerator a tick generator to be used
     * @returns this
     */
    setTickGenerator(tickGenerator: TickGenerator | AdaptiveTickGenerator.Options): this;
    /**
     * Return a current tick generator
     * @returns a current tick generator
     */
    getTickGenerator(): TickGenerator;
    /**
     * Gets axis bounds
     * @returns axis bounds
     */
    getBounds(): Rect | null;
    /**
     * Return tick position
     * @returns tickPosition
     */
    getTickPosition(): TickPosition;
    /**
     * Sets tick position as text
     * @param position
     */
    setTickPosition(position: string | TickPosition): this;
    /**
     * Sets the label position
     * @param position label position
     * @returns this
     */
    setLabelPosition(position: LabelPosition): this;
    /**
     * Return the label position
     */
    getLabelPosition(): LabelPosition;
    /**
     * Sets the label offset
     * @param offset the label offset
     * @returns this
     */
    setLabelOffset(offset: number): this;
    /**
     * Return the label offset
     */
    getLabelOffset(): number;
    /**
     * Return base line visibility
     */
    getBaseLineVisible(): boolean;
    /**
     * Set base line visibility
     * @param visible visible
     */
    setBaseLineVisible(visible: boolean): this;
    render(context: RenderingContext): void;
}
export declare namespace CurvedAxis {
    /**
     * baseline path
     */
    type Path = {
        /**
         * x values values of baseline path
         */
        x?: number[];
        /**
         * y values values of baseline path
         */
        y?: number[];
    };
    /**
     * options
     */
    type Options = Shape.Options & OptionsBase & {
        /**
         * baseline path
         */
        path?: Path;
    };
    /**
     * An object containing the options to set
     */
    type OptionsBase = {
        /**
         * minimum label value on axis
         */
        minvalue?: number;
        /**
         * maximum label value on axis
         */
        maxvalue?: number;
        /**
         * instance of tick generator
         */
        tickgenerator?: TickGenerator | AdaptiveTickGenerator.Options;
        /**
         * position of the tick
         */
        tickposition?: TickPosition;
        /**
         * position label position
         */
        labelposition?: LabelPosition;
        /**
         * offset the label offset
         */
        labeloffset?: number;
        /**
         * visibility of baseline
         */
        visiblebaseline?: boolean;
    };
    /**
     * An object containing the properties
     */
    type OptionsOut = Shape.OptionsOut & Omit<OptionsBase, 'tickgenerator'> & {
        /**
         * instance of tick generator
         */
        tickgenerator?: TickGenerator;
    };
}
