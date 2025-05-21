/**
 * @module geotoolkit/scene/shapes/painters/AimPainter
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { Rect } from '@int/geotoolkit/util/Rect';
import { IPainter } from '@int/geotoolkit/scene/shapes/painters/IPainter';
/**
 * Draws an aim symbol that consists of a multiple circles with the same center and different radiuses
 */
export declare class AimPainter extends EventDispatcher implements IPainter {
    /**
     * Create AimPainter
     * @param [radiuses] array of the circles radiuses (from 0 to 1) or properties object
     */
    constructor(radiuses?: {
        radiuses?: number[];
    } | number[]);
    /**
     * Gets all the properties pertaining to the aim painter
     * @returns aim painter properties
     */
    getProperties(): {
        radiuses: number[];
    };
    /**
     * Sets all the properties pertaining to this object
     * @param props aim painter properties
     * @returns this
     */
    setProperties(props?: {
        radiuses?: number[];
    }): this;
    /**
     * Sets aim circle radiuses (from 0 to 1)
     * @param radiuses array of the circles radiuses (from 0 to 1)
     * @returns this
     */
    setRadiuses(radiuses: number[]): this;
    /**
     * Returns current aim circle radiuses
     * @returns radiuses
     */
    getRadiuses(): number[];
    /**
     * Draw text on context
     * @param context rendering context
     * @param symbol symbol, which uses this painter
     * @param bbox bounding box
     */
    render(context: RenderingContext, symbol: SymbolShape, bbox: Rect): void;
}
