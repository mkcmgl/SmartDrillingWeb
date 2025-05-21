/**
 * @module geotoolkit/scene/shapes/painters/ImagePainter
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { IPainter } from '@int/geotoolkit/scene/shapes/painters/IPainter';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Draws an image symbol
 */
export declare class ImagePainter extends EventDispatcher implements IPainter {
    /**
     * Create ImagePainter
     * @param [url] image url or properties object
     */
    constructor(url?: {
        url?: string;
    } | string);
    /**
     * Returns all the properties pertaining to the image painter
     * @returns image painter properties
     */
    getProperties(): {
        url: string;
    };
    /**
     * Sets all the properties pertaining to the painter
     * @param props image painter properties
     * @returns this
     */
    setProperties(props?: {
        url?: string;
    }): this;
    /**
     * Draw image on context
     * @param context rendering context
     * @param symbol symbol, which uses this painter
     * @param bbox bounding box
     */
    render(context: RenderingContext, symbol: SymbolShape, bbox: Rect): void;
}
