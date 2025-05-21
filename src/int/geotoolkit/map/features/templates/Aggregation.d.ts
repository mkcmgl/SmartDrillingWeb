import { BaseTemplate } from '@int/geotoolkit/map/features/templates/BaseTemplate';
import { Line } from '@int/geotoolkit/scene/shapes/Line';
import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import type { AnchoredShape } from '@int/geotoolkit/scene/shapes/AnchoredShape';
import type { Aggregation as AggregationFeature } from '@int/geotoolkit/map/features/Aggregation';
/**
 * Manages {@link @int/geotoolkit/map/features/Aggregation~Aggregation}-to-{@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape}
 * logic used by {@link @int/geotoolkit/map/layers/Template~Template} class
 *
 * @example
 * import {Aggregation} from '@int/geotoolkit/map/features/templates/Aggregation';
 * import {DefaultColorProvider} from '@int/geotoolkit/util/DefaultColorProvider';
 * const template = new Aggregation({
 *     ...
 *     // change shape size dynamically:
 *     'size': {
 *         // size is based on the sum of aggregated features' population:
 *         'field': 'population',
 *         // size is changing from 25px to 60px:
 *         'range': [25, 60]
 *     },
 *     'color': {
 *         // no 'field' provided i.e. color is based on amount of aggregated features
 *         // color 'range' can be either a color provider or an array:
 *         'range': new DefaultColorProvider({
 *             // use first color for 2 aggregated points, second for 50 and third for 500
 *             // (linear interpolation):
 *             'values': [2, 50, 500],
 *             'colors': ['rgba(0, 0, 255, 0.5)', 'rgba(0, 0, 127, 0.5)', 'rgba(0, 0, 0, 0.5)']
 *         })
 *     }
 * });
 * @example
 * const template = new Aggregation({
 *     ...
 *     // change shape size dynamically:
 *     'size': {
 *         // 'field' can be a function, here's a callback to calculate the average 'age' of aggregated features:
 *         'field': (feature) => {
 *              let sum = 0, count = 0;
 *              feature.getAggregation().forEach((element) => {
 *                  sum += +element.getAttributes()['age']; // add 'age' value
 *                  count++; // count the processed elements
 *              });
 *              return sum / count; // return average 'age' value
 *         },
 *         // now size is based on the average 'age' value:
 *         'range': [25, 60]
 *     },
 *     'color': {
 *         // color is based on the sum of aggregated features' priority:
 *         'field': 'priority',
 *         // color 'range' can be either a color provider or an array:
 *         // color changes from white to black basing on priority:
 *         'range': ['white', 'black']
 *     }
 * });
 */
export declare class Aggregation extends BaseTemplate {
    /**
     * @param [options] template options
     */
    constructor(options?: Aggregation.Options);
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: Aggregation.Options): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns object containing the properties
     */
    getProperties(): Aggregation.OptionsOut;
    /**
     * Returns true if aggregation template has dynamic resize component, false otherwise
     */
    isDynamicSize(): boolean;
}
export declare namespace Aggregation {
    /**
     * template options
     */
    type Options = BaseTemplate.Options & {
        /**
         * dynamic size options
         */
        size?: {
            /**
             * parameter depending on which size of aggregations will be changed. May be a callback (function), an attribute field (if string, all values of aggregated features will be summed up) or aggregation size itself if nothing provided (number of aggregated features)
             */
            field?: string | DataCallback;
            /**
             * sizes array, according to which the size of the aggregations will be changed, based on its 'field' value. Current aggregation size is linearly interpolated from minimum to maximum among all the aggregations.
             * WARNING! array must be strictly increasing or decreasing
             */
            range: number[];
        };
        /**
         * dynamic color options
         */
        color?: {
            /**
             * parameter depending on which color of aggregations will be changed. May be a callback (function), an attribute field (if string, all values of aggregated features will be summed up) or aggregation size itself if nothing provided (number of aggregated features)
             */
            field?: string | DataCallback;
            /**
             * color array/provider, according to which the color of the aggregations will be changed, based on its 'field' value. If array provided, current aggregation color is linearly interpolated from minimum to maximum among all the aggregations.
             */
            range: (string | RgbaColor)[] | ColorProvider;
        };
        /**
         * carnac shape to visualize aggregation feature
         */
        shape?: AnchoredShape;
        /**
         * carnac shape to visualize expanded aggregation feature (if {@link @int/geotoolkit/map/tools/AggregationSelection~AggregationSelection} tool is used)
         */
        expandedshape?: AnchoredShape;
        /**
         * color provider to change shape fill color depending on aggregation size (number of points aggregated)
         */
        colorprovider?: ColorProvider;
        /**
         * color provider to change shape fill color depending on expanded aggregation level (0 for root, 1 for its children, etc.)
         */
        expandedcolorprovider?: ColorProvider;
        /**
         * line to connect expanded aggregation with its child (set visible false if no needed)
         */
        expandedline?: Line;
    };
    /**
     * object containing the properties
     */
    type OptionsOut = BaseTemplate.OptionsOut & {
        /**
         * carnac shape to visualize expanded aggregation feature (if {@link @int/geotoolkit/map/tools/AggregationSelection~AggregationSelection} tool is used)
         */
        expandedshape?: AnchoredShape;
        /**
         * color provider to change shape fill color depending on aggregation size (number of points aggregated)
         */
        colorprovider?: ColorProvider;
        /**
         * color provider to change shape fill color depending on expanded aggregation level (0 for root, 1 for its children, etc.)
         */
        expandedcolorprovider?: ColorProvider;
        /**
         * line to connect expanded aggregation with its child (set visible false if no needed)
         */
        expandedline?: Line;
    };
    type DataCallback = (feature: AggregationFeature) => number;
}
