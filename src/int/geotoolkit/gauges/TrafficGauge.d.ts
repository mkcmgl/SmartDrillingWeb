import { NumericGauge } from '@int/geotoolkit/gauges/NumericGauge';
import type { Merge } from '@int/geotoolkit/base';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { CssStyle } from '@int/geotoolkit/css/CssStyle';
export declare class TrafficGauge extends NumericGauge {
    constructor(options?: TrafficGauge.Options);
    /**
     * Sets properties pertaining to traffic gauge.
     * @param props properties
     */
    setProperties(props?: TrafficGauge.Options): this;
    /**
     * Sets properties pertaining to this object.
     * @returns properties
     */
    getProperties(): TrafficGauge.OptionsOut;
    /**
     * Adds a traffic light or an array of traffic lights to the
     * @param lights Object with properties of the light or array with such objects
     * @param [name] Name of the light, used to reference this light in the future
     */
    addTrafficLights(lights: TrafficGauge.LightOptions[] | TrafficGauge.LightOptions, name?: string): this;
    /**
     * Sets properties pertaining to a specific light in the traffic gauge. The properties will be applies to the light with
     * provided name, or to none.
     * @param name Name of the light, all the operations on this light will be referenced by this name,
     * array with light properties, or object with light properties containing name inside
     * @param [props] properties
     */
    setTrafficLightProperties(name: TrafficGauge.LightOptions[] | TrafficGauge.LightOptions | string, props?: TrafficGauge.LightOptions): this;
    /**
     * Gets an array with JSON properties of all registered traffic lights
     * @returns obj Array of properties
     */
    getTrafficLightsProperties(): TrafficGauge.LightOptionsOut[];
    /**
     * Updates the state of the gauge
     */
    update(): void;
    /**
     * Updates the value of gauge, this will trigger the update of every dynamic component and
     * fire 'gaugeValueUpdated' event
     * @param value New value to set
     */
    setValue(value: number): this;
    /**
     * Returnt current value of the traffic gauge
     */
    getValue(): number;
}
export declare namespace TrafficGauge {
    /**
     * properties
     */
    type Options = NumericGauge.Options & {
        /**
         * Orientation of the gauge (horizontal or vertical)
         */
        orientation?: Orientation;
        /**
         * An array with properties of each traffic light or an object with a single light
         */
        trafficlights?: LightOptions | LightOptions[];
        /**
         * @deprecated since 4.0, use 'cssstyle' instead
         */
        css?: string | CssStyle.Options | CssStyle;
    };
    /**
     * properties
     */
    type OptionsOut = NumericGauge.OptionsOut & {
        /**
         * Orientation of the gauge (horizontal or vertical)
         */
        orientation: Orientation;
        /**
         * An array with properties of each traffic light
         */
        trafficlights: LightOptionsOut[];
    };
    /**
     * properties
     */
    type LightOptions = {
        /**
         * Name of the light, all the operations on this light will be referenced by this name
         */
        name?: string;
        /**
         * Line style of the light shape
         */
        linestyle?: LineStyle.Type;
        /**
         * Fill style applied to this light when the value of the gauge falls within its range
         */
        activefill?: FillStyle.Type;
        /**
         * Fill style applied to this light when the value of the gauge falls out of its range
         */
        inactivefill?: FillStyle.Type;
        /**
         * Painter used to draw the light shape
         */
        painter?: SymbolShape.Painter;
        /**
         * A flag defining if the shape should have equal width and height regardless of its container dimensions
         */
        preserveaspectratio?: boolean;
        /**
         * Padding inside the container of this light in CSS notation. This will be applied to all the sides.
         */
        padding?: string | number;
        /**
         * Lower bound of the range in which this light is active
         */
        low?: number;
        /**
         * Higher bound of the range in which this light is active
         */
        high?: number;
    };
    /**
     * properties
     */
    type LightOptionsOut = Merge<Required<LightOptions>, {
        /**
         * Painter used to draw the light shape
         */
        painter: SymbolShape.PainterFunction;
        /**
         * Padding inside the container of this light in CSS notation. This will be applied to all the sides.
         */
        padding: number;
        /**
         * Line style of the light shape
         */
        linestyle: LineStyle;
        /**
         * Fill style applied to this light when the value of the gauge falls within its range
         */
        activefill: FillStyle;
        /**
         * Fill style applied to this light when the value of the gauge falls out of its range
         */
        inactivefill: FillStyle;
    }>;
}
