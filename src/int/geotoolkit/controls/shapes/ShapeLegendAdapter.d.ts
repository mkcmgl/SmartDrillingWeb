/**
 * @module geotoolkit/controls/shapes/ShapeLegendAdapter
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import type { LegendItem } from '@int/geotoolkit/controls/shapes/LegendItem';
import type { AnchorType } from '@int/geotoolkit/util/AnchorType';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { Group } from '@int/geotoolkit/scene/Group';
/**
 * Legend adapter events enumerator
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * LegendItemOptionsChanged
     */
    LegendItemOptionsChanged = "LegendItemOptionsChanged",
    /**
     * LegendSourceStateChanged
     */
    LegendSourceStateChanged = "LegendSourceStateChanged"
}
/**
 * Abstract class that creates {@link @int/geotoolkit/controls/shapes/LegendItem~LegendItem} elements
 * based on the "shape" state
 */
export declare abstract class ShapeLegendAdapter extends EventDispatcher {
    /**
     * Create ShapeLegendAdapter
     * @param [object] an object to tie legend items to
     * @param [legendItemOptions] external legend item options
     */
    protected constructor(object?: Group, legendItemOptions?: ShapeLegendAdapter.Options);
    on<E extends keyof ShapeLegendAdapter.EventMap>(type: E, callback: (eventType: E, sender: this, args: ShapeLegendAdapter.EventMap[E]) => void): this;
    off<E extends keyof ShapeLegendAdapter.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: ShapeLegendAdapter.EventMap[E]) => void): this;
    notify<E extends keyof ShapeLegendAdapter.EventMap>(type: E, source: ShapeLegendAdapter, args?: ShapeLegendAdapter.EventMap[E]): this;
    /**
     * Gets object the adapter and legend items are associated with
     * @returns object
     */
    getObject(): Group;
    /**
     * Creates legend items based on its shape's state
     * @param [options] legend items' options
     * @returns elements
     */
    abstract createLegendItems(options?: ShapeLegendAdapter.Options): LegendItem[];
    /**
     * Gets legend item's external options
     * @returns options
     */
    getLegendItemOptions(): ShapeLegendAdapter.Options;
    /**
     * Sets legend item's external options.
     * Sends {@link import("geotoolkit/controls/shapes/ShapeLegendAdapter").Events.LegendItemOptionsChanged} event
     * @param options options
     * @returns this
     */
    setLegendItemOptions(options: ShapeLegendAdapter.Options): this;
}
export declare namespace ShapeLegendAdapter {
    /**
     * legend object
     */
    type Options = {
        /**
         * symbol
         */
        symbol?: {
            /**
             * painter
             */
            painter?: SymbolShape.PainterFunction;
            /**
             * width
             */
            width?: number;
            /**
             * height
             */
            height?: number;
        };
        /**
         * alignment
         */
        alignment?: AnchorType;
        /**
         * textstyle
         */
        textstyle?: TextStyle | TextStyle.Options;
        /**
         * text margin
         */
        margintext?: number;
    } | Record<string, any>;
    type EventMap = EventDispatcher.EventMap & {
        [Events.LegendItemOptionsChanged]: ShapeLegendAdapter.Options;
        [Events.LegendSourceStateChanged]: void;
    };
}
