/**
 * @module geotoolkit/scene/shapes/painters/FontPainter
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { IPainter } from '@int/geotoolkit/scene/shapes/painters/IPainter';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Draws a font symbol
 */
export declare class FontPainter extends EventDispatcher implements IPainter {
    /**
     * Create FontPainter
     * @param [url] font url or properties object
     * @param [family] font family, must match to file name
     * @param [text] text which be drawn as a symbol, ascii or unicode
     */
    constructor(url?: FontPainter.Options | ArrayBuffer | string, family?: string, text?: string);
    /**
     * Gets all the properties pertaining to the font painter
     * @returns font painter properties
     */
    getProperties(): FontPainter.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param props font painter properties
     * @returns this
     */
    setProperties(props?: FontPainter.Options): this;
    /**
     * Draw text on context
     * @param context rendering context
     * @param symbol symbol, which uses this painter
     * @param bbox bounding box
     */
    render(context: RenderingContext, symbol: SymbolShape, bbox: Rect): void;
}
export declare namespace FontPainter {
    /**
     * font url or properties object
     */
    type Options = {
        /**
         * font url
         */
        url?: string | ArrayBuffer;
        /**
         * text which be drawn as a symbol, ascii or unicode
         */
        text?: string;
        /**
         * font family, must match to file name
         */
        family?: string;
        /**
         * text fill style
         */
        fill: FillStyle | FillStyle.Options | string;
    };
    /**
     * font painter properties
     */
    type OptionsOut = {
        /**
         * font url
         */
        url: string | ArrayBuffer;
        /**
         * text which be drawn as a symbol, ascii or unicode
         */
        text: string;
        /**
         * font family, must match to file name
         */
        family: string;
        /**
         * text fill style
         */
        fill: FillStyle | null;
    };
}
