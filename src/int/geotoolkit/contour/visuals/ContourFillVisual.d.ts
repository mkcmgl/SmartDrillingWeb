import { AbstractVisual } from '@int/geotoolkit/contour/visuals/AbstractVisual';
import { EventType as FillVisualEventType } from '@int/geotoolkit/contour/events/FillVisualEvent';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Contour visual class which renders the contour fills. Ie. the fill regions between the contour isolines.
 */
export declare class ContourFillVisual extends AbstractVisual {
    constructor(options?: ContourFillVisual.Options);
    on<E extends keyof ContourFillVisual.EventMap>(type: E, callback: (eventType: E, sender: this, args: ContourFillVisual.EventMap[E]) => void): this;
    off<E extends keyof ContourFillVisual.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: ContourFillVisual.EventMap[E]) => void): this;
    notify<E extends keyof ContourFillVisual.EventMap>(type: E, source: ContourFillVisual, args?: ContourFillVisual.EventMap[E]): this;
    /**
     * Should the holes be transparent? If not, they will be drawn as opaque squares. Default is Transparent = ON.
     * @returns transparentHoles The flag indicating whether hole transparency is true.
     */
    getTransparentHoles(): boolean;
    /**
     * Should the holes be transparent? If not, they will be drawn as opaque squares. Default is Transparent = ON.
     * @param transparentHoles The flag indicating whether hole transparency is true.
     * @returns this
     */
    setTransparentHoles(transparentHoles: boolean): this;
    /**
     * Which color should be used to draw the opaque holes? This is not used if holes are transparent. The default is 'white'.
     * @returns holeColor The color that will be used when rendering opaque holes.
     */
    getHoleColor(): string;
    /**
     * Which color should be used to draw the opaque holes? This is not used if holes are transparent. The default is 'white'.
     * @param holeColor The color that will be used when rendering opaque holes.
     * @returns this
     */
    setHoleColor(holeColor: string): this;
    render(renderingContext: RenderingContext): void;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     */
    setProperties(properties?: ContourFillVisual.Options): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns visual properties
     */
    getProperties(): ContourFillVisual.OptionsOut;
}
export declare namespace ContourFillVisual {
    /**
     * An object containing the properties to set
     */
    type Options = AbstractVisual.Options & {
        /**
         * The flag indicating whether hole transparency is true
         */
        transparentholes?: boolean;
        /**
         * The color that will be used when rendering opaque holes
         */
        holecolor?: string;
    };
    /**
     * visual properties
     */
    type OptionsOut = AbstractVisual.OptionsOut & {
        /**
         * The flag indicating whether hole transparency is true
         */
        transparentholes?: boolean;
        /**
         * The color that will be used when rendering opaque holes
         */
        holecolor?: string;
    };
    type EventMap = AbstractVisual.EventMap & {
        [FillVisualEventType.HOLES_CHANGED]: void;
    };
}
