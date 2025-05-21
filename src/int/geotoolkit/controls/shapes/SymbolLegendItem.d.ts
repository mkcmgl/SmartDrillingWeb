import { LegendItem } from '@int/geotoolkit/controls/shapes/LegendItem';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Group } from '@int/geotoolkit/scene/Group';
import type { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
/**
 * Legend item with symbol and text elements
 */
export declare class SymbolLegendItem extends LegendItem {
    /**
     * Create SymbolLegendItem
     * @param [object] associated with the legend item or options
     * @param [options] options
     */
    constructor(object?: EventDispatcher | null, options?: SymbolLegendItem.Options);
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: SymbolLegendItem): this;
    /**
     * Returns the current symbol legend options
     * @returns options
     */
    getProperties(): SymbolLegendItem.OptionsOut;
    /**
     * Sets item's options
     * @param options options
     */
    setProperties(options?: SymbolLegendItem.Options): this;
    /**
     * Sets item's options
     * @deprecated since 4.0 use getProperties instead
     * @returns options options
     */
    getOptions(): SymbolLegendItem.OptionsOut;
    /**
     * Sets item's options
     * @deprecated since 4.0 use getProperties instead
     * @param options options
     */
    setOptions(options: SymbolLegendItem.Options): this;
}
export declare namespace SymbolLegendItem {
    /**
     * options
     */
    type Options = LegendItem.Options & {
        text?: string;
        /**
         * background rectangle options
         */
        background?: {
            /**
             * Line style for background rectangle
             */
            linestyle?: LineStyle.Type;
            /**
             * Fill style for background rectangle
             */
            fillstyle?: FillStyle.Type;
        };
        /**
         * text style
         */
        textstyle?: TextStyle.Type;
        /**
         * padding of the background rectangle
         */
        internalpadding?: number;
        /**
         * Text margin for text to the left and right
         */
        margintext?: number;
        /**
         * alignment
         */
        alignment?: AnchorType;
        /**
         * symbol options
         */
        symbol?: SymbolShape.Options;
    };
    /**
     * returned options
     */
    type OptionsOut = Group.OptionsOut & {
        text?: string;
        /**
         * background rectangle options
         */
        background?: {
            /**
             * Line style for background rectangle
             */
            linestyle?: LineStyle.Type;
            /**
             * Fill style for background rectangle
             */
            fillstyle?: FillStyle.Type;
        };
        /**
         * text style
         */
        textstyle?: TextStyle;
        /**
         * padding of the background rectangle
         */
        internalpadding?: number;
        /**
         * Text margin for text to the left and right
         */
        margintext?: number;
        /**
         * alignment
         */
        alignment?: AnchorType;
        /**
         * symbol options
         */
        symbol?: SymbolShape.Options;
    };
}
