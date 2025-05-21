import { Log2DVisual } from '@int/geotoolkit/welllog/Log2DVisual';
import { LogCompositeVisualHeader } from '@int/geotoolkit/welllog/header/LogCompositeVisualHeader';
import { AdaptiveLogVisualHeader } from '@int/geotoolkit/welllog/header/AdaptiveLogVisualHeader';
import { ColorBar } from '@int/geotoolkit/controls/shapes/ColorBar';
import type { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import type { LogVisualHeader } from '@int/geotoolkit/welllog/header/LogVisualHeader';
/**
 * Composite header for Log2d visual
 */
export declare class CompositeLog2DVisualHeader extends LogCompositeVisualHeader<Log2DVisual> {
    /**
     * @param [options] visual for the header or properties object
     */
    constructor(options?: CompositeLog2DVisualHeader.Options | Log2DVisual);
    clone(): CompositeLog2DVisualHeader;
    protected copyConstructor(src: CompositeLog2DVisualHeader, deepCopy?: boolean): this;
    notify(event: string, source: LogVisualHeader, args?: any): this;
    /**
     * Return header options
     * @returns header options
     * @see {@link import("geotoolkit/controls/shapes/ColorBar").ColorBar.getOptions}
     */
    getOptions(): CompositeLog2DVisualHeader.OptionsOut;
    /**
     * Set header options
     * @param options header options
     * @see {@link import("geotoolkit/welllog/header/AdaptiveLogVisualHeader").AdaptiveLogVisualHeader.setElement}
     * @see {@link import("geotoolkit/controls/shapes/ColorBar").ColorBar.setOptions}
     * @returns this
     */
    setOptions(options: CompositeLog2DVisualHeader.OptionsType): this;
    /**
     * Returns tick generator using for color bar
     */
    getTickGenerator(): TickGenerator;
    /**
     * Set color bar tick generator
     * @param tickGenerator color bar tick generator
     */
    setTickGenerator(tickGenerator: TickGenerator): this;
}
export declare namespace CompositeLog2DVisualHeader {
    /**
     * visual for the header or properties object
     */
    type Options = LogCompositeVisualHeader.Options<Log2DVisual>;
    /**
     * header options
     */
    type OptionsOut = {
        /**
         * color bar options
         */
        colorbar: ColorBar.Options;
    };
    /**
     * header options
     */
    type OptionsType = {
        /**
         * title options
         */
        title?: AdaptiveLogVisualHeader.ElementOptions;
        /**
         * colorbar options
         */
        colorbar?: ColorBar.Options;
    };
}
