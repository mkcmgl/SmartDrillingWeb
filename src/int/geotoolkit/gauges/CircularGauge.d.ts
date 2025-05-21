import { AxisGauge } from '@int/geotoolkit/gauges/AxisGauge';
import { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import { CircularAxis } from '@int/geotoolkit/gauges/axis/CircularAxis';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
/**
 * This class implements a full Circular Gauge with possibility of multiple arrows. <br>
 * A Circular Gauge is a visual representation of a measuring device with a radial axis that sweeps any angle from 0 to 360 degrees and a pointer (Needle or arrow) that indicates values on that scale.<br>
 * Gauges value is basically an angle on a circle plot. Gauges can have radius and start and end angle.
 * Gauge axes are usually colored for easy value distinction.
 */
export declare class CircularGauge extends AxisGauge {
    constructor(options?: CircularGauge.Options);
    protected copyConstructor(gauge: CircularGauge): this;
    /**
     * Sets padding style
     * @param style padding style
     * @param [merge] true if you want to merge paddingStyle with existing attribute, false by default
     */
    setPaddingStyle(style: SpaceStyle | SpaceStyle.Options, merge?: boolean): this;
    /**
     * Gets padding style
     */
    getPaddingStyle(): SpaceStyle | null;
    /**
     * Sets a new start angle
     * @param angle Angle in radians
     */
    setStartAngle(angle: number): this;
    /**
     * Sets a new sweep angle
     * @param angle Angle in radians
     */
    setSweepAngle(angle: number): this;
    /**
     * Adds a new circular axis to the gauge. An axis can have only one needle. In order to add more needles to a gauge
     * user needs to add a new axis with its own ranges and data.
     * @param params Parameters required to create an axis
     */
    addAxis(params: CircularAxis | CircularAxis.Options): CircularAxis;
    getAxis(name: string | number): CircularAxis | null;
    /**
     * Returns properties pertaining to this gauge.
     * @returns properties
     */
    getProperties(): CircularGauge.OptionsOut;
    /**
     * Sets properties pertaining to circulr gauge.
     * @param props properties
     */
    setProperties(props?: CircularGauge.Options): this;
    /**
     * Updates and recalculates parameters of gauge, like radius, angles, and updates axes.
     */
    update(): this;
}
export declare namespace CircularGauge {
    /**
     * JSON with gauge parameters
     */
    type Options = AxisGauge.Options & {
        /**
         * Start of the gauge body in radians
         */
        startangle?: number;
        /**
         * Sweep of the gauge body in radians
         */
        sweepangle?: number;
        /**
         * JSON with background properties
         */
        background?: {
            /**
             * Fillstyle to apply to background
             */
            fillstyle?: FillStyle.Type;
            /**
             * Linestyle to apply to background
             */
            linestyle?: LineStyle.Type;
            /**
             * Sets visibility to background
             */
            visible?: boolean;
        };
    };
    /**
     * properties
     */
    type OptionsOut = AxisGauge.OptionsOut & {
        /**
         * Start angle of gauge body arc
         */
        startangle: number;
        /**
         * Angle by which the axis body sweeps. End angle becomes startangle + sweepanle
         */
        sweepangle: number;
        /**
         * Object with background properties
         */
        background: {
            /**
             * Fillstyle of background circle
             */
            fillstyle: FillStyle;
            /**
             * Linestyle of background circle
             */
            linestyle: LineStyle;
            /**
             * Visibility of the background shape
             */
            visible: boolean;
        };
    };
}
