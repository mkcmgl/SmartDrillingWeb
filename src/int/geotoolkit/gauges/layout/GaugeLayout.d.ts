import { Regions } from '@int/geotoolkit/gauges/layout/Regions';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Region } from '@int/geotoolkit/gauges/layout/Region';
import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * Defines a layout for gauges
 */
export declare class GaugeLayout {
    constructor(options?: GaugeLayout.Options);
    /**
     * Deletes a region from the layout. Only custom added regions can be removed.
     * @param name Name of the region
     */
    removeRegion(name: string): this;
    /**
     * Returns a custom component which was registered by provided name
     * @param name Name of component to return
     */
    getCustomComponent(name: string): Node;
    /**
     * Parser region CSS parameters and updates regions accordingly
     */
    updateCssRegions(): void;
    /**
     * Checks if the region with this name is a custom region
     * @param name Name of the region to test
     */
    isCustomRegion(name: string): boolean;
    /**
     * Changes parameters of custom regions
     * @param name Name of the custom region
     * @param params JSON with CSS properties
     */
    setCustomRegionParams(name: string, params: GaugeLayout.Region): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace GaugeLayout {
    /**
     * properties
     */
    type Options = {
        /**
         * layout regions
         */
        regions?: {
            /**
             * east region
             */
            east?: Region;
            /**
             * west region
             */
            west?: Region;
            /**
             * north region
             */
            north?: Region;
            /**
             * south region
             */
            south?: Region;
            /**
             * northwest region
             */
            northwest?: Region;
            /**
             * northeast region
             */
            northeast?: Region;
            /**
             * southeast region
             */
            southeast?: Region;
            /**
             * southwest region
             */
            southwest?: Region;
            /**
             * central region
             */
            center?: Region;
        };
        /**
         * layout sides
         */
        sides?: {
            /**
             * top position
             */
            north?: number;
            /**
             * bottom position
             */
            south?: number;
            /**
             * left position
             */
            west?: number;
            /**
             * right position
             */
            east?: number;
        };
        /**
         * layout bounds
         */
        bounds?: Rect;
        /**
         * component positions
         */
        componentpositions?: {
            /**
             * gauge position
             */
            gauge?: Regions;
            /**
             * value position
             */
            value?: Regions;
            /**
             * name position
             */
            name?: Regions;
        };
    };
    /**
     * properties
     */
    type OptionsOut = {
        /**
         * layout regions
         */
        regions: {
            /**
             * east region options
             */
            east: Region.OptionsOut;
            /**
             * west region options
             */
            west: Region.OptionsOut;
            /**
             * north region options
             */
            north: Region.OptionsOut;
            /**
             * south region options
             */
            south: Region.OptionsOut;
            /**
             * northwest region options
             */
            northwest: Region.OptionsOut;
            /**
             * northeast region options
             */
            northeast: Region.OptionsOut;
            /**
             * southeast region options
             */
            southeast: Region.OptionsOut;
            /**
             * southwest region options
             */
            southwest: Region.OptionsOut;
            /**
             * central region options
             */
            center: Region.OptionsOut;
        };
        /**
         * layout sides
         */
        sides: {
            /**
             * top position
             */
            north: number;
            /**
             * bottom position
             */
            south: number;
            /**
             * left position
             */
            west: number;
            /**
             * right position
             */
            east: number;
        };
        /**
         * layout bounds
         */
        bounds: Rect;
        /**
         * component positions
         */
        componentpositions: {
            /**
             * gauge position
             */
            gauge: Regions | string;
            /**
             * value position
             */
            value: Regions | string;
            /**
             * name position
             */
            name: Regions | string;
        };
    };
    /**
     * JSON with CSS properties
     */
    type Region = {
        /**
         * X of the region relative to its parent
         */
        x?: number | string;
        /**
         * Y of the region relative to its parent
         */
        y?: number | string;
        /**
         * Width of the region relative to its parent
         */
        width?: number | string;
        /**
         * Height of the region relative to its parent
         */
        height?: number | string;
    };
}
