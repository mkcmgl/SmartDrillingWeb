import { SymbolLegendItem } from '@int/geotoolkit/controls/shapes/SymbolLegendItem';
import type { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import type { AbstractChart } from '@int/geotoolkit/charts/AbstractChart';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { Point } from '@int/geotoolkit/util/Point';
/**
 * Toggleable legend item with symbol and text elements
 */
export declare class ToggleableSymbolItem extends SymbolLegendItem {
    /**
     * @param [object] associated with the legend item
     * @param [options] (see "setOptions" API for more info)
     */
    constructor(object?: EventDispatcher, options?: SymbolLegendItem.Options);
    /**
     * Sets selection data to be associated with legend item
     * @param data selection result data
     */
    setData(data: AbstractChart.Hits): this;
    /**
     * Returns selection result data to be associated with legend item
     */
    getData(): AbstractChart.Hits;
    /**
     * Sets all the properties pertaining to item
     * @param [props] item properties
     * @returns this
     */
    setProperties(props?: SymbolLegendItem.Options): this;
    /**
     * Returns all item properties
     * @returns item properties
     */
    getProperties(): SymbolLegendItem.OptionsOut;
    /**
     * Hit test in the device coordinates
     * @param area model area or position
     * @param [radius] radius of selection
     * @returns a collection of selected data
     */
    hitTest(area: Rect | Point, radius?: number): AbstractChart.Hits;
}
