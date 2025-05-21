import { Axis } from '@int/geotoolkit/gauges/axis/Axis';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { Point } from '@int/geotoolkit/util/Point';
import { CapStyle, LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { DynamicElementPosition } from '@int/geotoolkit/gauges/AbstractGauge';
import type { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import type { Group } from '@int/geotoolkit/scene/Group';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * Implements an axis which uses Tick Generators to calculate number of ticks and their positions.
 * This axis calculates the ticks dynamically to not allow any intersections among labels and ticks.
 * The axis allows to render ticks and labels in three positions:
 * inside: tick growing from the inner bound of the axis towards the center
 * outside: tick growing from outer bound of axis towards the center
 */
export declare class CircularAxis extends Axis {
    constructor(options?: CircularAxis.Options);
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     * Disposes value and name shapes as well
     */
    dispose(): void;
    /**
     * Returns an object with properties pertaining to this axis
     * @returns Object with properties
     */
    getProperties(): CircularAxis.OptionsOut;
    /**
     * Sets properties pertaining to this axis
     * @param props Object with properties
     */
    setProperties(props?: CircularAxis.Options): this;
    /**
     * Sets properties pertaining to shadow of the axis
     * @param props properties
     * @returns this
     */
    setShadowProperties(props: CircularAxis.ShadowOptions): this;
    /**
     * Gets properties pertaining to shadow of the axis
     * @returns properties
     */
    getShadowProperties(): CircularAxis.ShadowOptionsOut;
    /**
     * Renders the axis and ticks
     * @param context rendering context
     */
    render(context: RenderingContext): void;
    /**
     * Sets the needle for the axis
     * @param params JSON with needle properties
     * @returns this
     */
    setNeedle(params: CircularAxis.NeedleOptions): this;
    /**
     * Gets position of the needle (bottom layer or top layer)
     */
    getNeedlePosition(): string;
    /**
     * Gets the current needle geometry
     */
    getNeedleGeometry(): Group;
    /**
     * Sets the value of the axis
     * @param val The value to be displayed by the axis.
     * @param skipAnimation If true, no animation will be displayed
     */
    setValue(val: number, skipAnimation?: boolean): this;
    /**
     * Sets the color of shadow fill for the gauge
     * @param color New color of the value fill
     * @returns this
     */
    setShadowColor(color: string | RgbaColor): this;
    /**
     * Gets the color of shadow fill for the gauge
     * @returns color
     */
    getShadowColor(): string;
    /**
     * Sets a new tick generator on the axis
     * @param tickGenerator tick generator
     */
    setTickGenerator(tickGenerator: TickGenerator): this;
    /**
     * Returns the tick generator pertaining to this axis
     */
    getTickGenerator(): TickGenerator;
    /**
     * Shows or hides the needle
     * @param visible Visibility flag for the needle
     */
    setNeedleVisible(visible: boolean): this;
    /**
     * Gets properties pertaining to needle
     * @returns properties
     */
    getNeedleOptions(): CircularAxis.NeedleOptionsOut;
    /**
     * Sets options pertaining to the needle
     * @param props properties
     */
    setNeedleOptions(props: CircularAxis.NeedleOptions): this;
}
export declare namespace CircularAxis {
    /**
     * Object with properties
     */
    type Options = Axis.Options & {
        /**
         * Fill style of the base arc of the axis
         */
        fillstyle?: FillStyle.Type;
        /**
         * Thickness of the axis base in CSS format (relative to the radius of the axis)
         */
        thickness?: number | string;
        /**
         * start angle
         */
        startangle?: number | string;
        /**
         * sweep angle
         */
        sweepangle?: number | string;
        /**
         * center
         */
        center?: Point | Point.Options | [
            number,
            number
        ];
        /**
         * The distance (offset) of the start angle of the axis from start angle of the gauge.
         * Rotates the axis clockwise
         */
        startangleoffset?: number | string;
        /**
         * The distance (offset) of the start angle of the axis from start angle of the gauge.
         * Shrinks the axis counterclockwise
         */
        endangleoffset?: number | string;
        /**
         * Radius of the axis in CSS format (relative to gauge radius)
         */
        radius?: number | string;
        /**
         * parent radius
         */
        parentradius?: number | string;
        /**
         * JSON with shadow properties
         */
        shadow?: ShadowOptions;
        /**
         * Properties defining the needle
         */
        needle?: NeedleOptions;
        /**
         * Angles counting orientation relative to gauge
         */
        reversed?: boolean;
    };
    /**
     * Object with properties
     */
    type OptionsOut = Axis.OptionsOut & {
        /**
         * Fill style of the base arc of the axis
         */
        fillstyle?: FillStyle;
        /**
         * Line style of the base arc of the axis
         */
        linestyle?: LineStyle;
        /**
         * Thickness of the axis base in CSS format (relative to the radius of the axis)
         */
        thickness?: number | string;
        /**
         * start angle
         */
        startangle?: number | string;
        /**
         * sweep angle
         */
        sweepangle?: number | string;
        /**
         * center
         */
        center?: Point;
        /**
         * The distance (offset) of the start angle of the axis from start angle of the gauge
         */
        startangleoffset: number | string;
        /**
         * The distance (offset) of the start angle of the axis from start angle of the gauge
         */
        endangleoffset: number | string;
        /**
         * Radius of the axis in CSS format (relative to gauge radius)
         */
        radius: number | string;
        /**
         * parent radius
         */
        parentradius?: number | string;
        /**
         * JSON with shadow properties
         */
        shadow?: ShadowOptionsOut;
        /**
         * properties
         */
        needle?: NeedleOptionsOut;
        /**
         * Angles counting orientation relative to gauge
         */
        reversed?: boolean;
    };
    /**
     * properties
     */
    type ShadowOptions = {
        /**
         * Color of the filling of the gauge shadows
         */
        color?: string | RgbaColor;
        /**
         * Visibility flag for the shadow
         */
        visible?: boolean;
        /**
         * Style of the edges of the shadow
         */
        linecap?: CapStyle | string;
        /**
         * shadow position
         */
        position?: DynamicElementPosition;
        /**
         * inner radius (axis's inner by default)
         */
        innerradius?: number;
        /**
         * outer radius (axis's outer by default)
         */
        outerradius?: number;
    };
    /**
     * properties
     */
    type ShadowOptionsOut = {
        /**
         * Color of the filling of the gauge shadows
         */
        color: string;
        /**
         * Visibility flag for the shadow
         */
        visible: boolean;
        /**
         * Style of the edges of the shadow
         */
        linecap: CapStyle | string;
        /**
         * shadow position
         */
        position: DynamicElementPosition;
        /**
         * inner radius (axis's inner by default)
         */
        innerradius?: number;
        /**
         * outer radius (axis's outer by default)
         */
        outerradius?: number;
    };
    /**
     * properties
     */
    type NeedleOptions = Node.Options & {
        /**
         * Geotoolkit group containing the shapes which form the geometry of the needle
         */
        geometry?: Group;
        /**
         * A point in model of needle which serves as an anchor point for rotation
         * and centering the needle with the gauge.
         */
        center?: Point;
        /**
         * Layer on which the needle should be positioned, either in front of all components, or in the back.
         */
        position?: DynamicElementPosition;
        /**
         * For circular needle the length of the needle relative to the radius of the axis.
         * The length will be calculated automatically and if the needle has to be enlarged or shrinked, this will be done with
         * preservation of aspect ratio.
         */
        radius?: number | string;
    };
    /**
     * properties
     */
    type NeedleOptionsOut = Node.OptionsOut & {
        /**
         * Geotoolkit group containing the shapes which form the geometry of the needle
         */
        geometry?: Group;
        /**
         * A point in model of needle which serves as an anchor point for rotation
         * and centering the needle with the gauge.
         */
        center?: Point;
        /**
         * Layer on which the needle is positioned
         */
        position?: DynamicElementPosition | string;
        /**
         * For circular needle the length of the needle relative to the radius of the axis
         */
        radius?: number | string;
    };
}
