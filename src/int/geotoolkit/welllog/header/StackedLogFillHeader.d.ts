import { LogVisualHeader } from '@int/geotoolkit/welllog/header/LogVisualHeader';
import { SelectionContext } from '@int/geotoolkit/selection/SelectionContext';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { Point } from '@int/geotoolkit/util/Point';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { StackedLogFill } from '@int/geotoolkit/welllog/StackedLogFill';
/**
 * Define an implementation of visual header for StackedLogFill visual.
 */
export declare class StackedLogFillHeader extends LogVisualHeader<StackedLogFill> {
    /**
     * @param [options] visual for the header or properties object
     */
    constructor(options?: StackedLogFillHeader.Options | StackedLogFill);
    clone(): StackedLogFillHeader;
    protected copyConstructor(src: StackedLogFillHeader, deepCopy?: boolean): this;
    /**
     * Hit test in the device coordinates
     * @param area model area or position
     * @param [radius] radius of selection
     * @returns a collection of selected nodes
     */
    hitTest(area: Rect | Point, radius?: number): StackedLogFillHeader.Hits | null;
    render(context: RenderingContext | SelectionContext): void;
    /**
     * Return marker depth to be used to display value. By default it is NaN and value is not displayed
     */
    getDisplayMarkerDepth(): number;
    setVisual(visual: StackedLogFill): this;
    /**
     * Sets vertical header
     * @param vertical true, if vertical, else false
     * @param [size] size for height of vertical mode
     * @returns this
     */
    setVertical(vertical: boolean, size?: number): this;
}
export declare namespace StackedLogFillHeader {
    /**
     * visual for the header or properties object
     */
    type Options = LogVisualHeader.Options<StackedLogFill>;
    /**
     * a collection of selected nodes
     */
    type Hits = {
        /**
         * a collection of indices selected nodes
         */
        fills?: number[];
        /**
         * a collection of indices selected nodes
         */
        curves?: number[];
    };
}
