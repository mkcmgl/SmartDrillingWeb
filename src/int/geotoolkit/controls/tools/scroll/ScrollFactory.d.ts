/**
 * @module geotoolkit/controls/tools/scroll/ScrollFactory
 */
import { HorizontalScroll } from '@int/geotoolkit/controls/tools/scroll/HorizontalScroll';
import type { AbstractScroll } from '@int/geotoolkit/controls/tools/scroll/AbstractScroll';
import type { HVBaseScroll } from '@int/geotoolkit/controls/tools/scroll/HVBaseScroll';
/**
 * Scroll factory
 *
 * This factory registers a name-function pair.
 * the function is responsible for creating an instance of a scrollbar which inherits from
 * geotoolkit.controls.tools.scroll.AbstractScroll, and returns it
 */
export declare class ScrollFactory {
    constructor();
    /**
     * Get instance
     * @returns instance
     */
    static getInstance(): ScrollFactory;
    /**
     * Register scrollbar
     * @param name class name or unique name
     * @param constructor function which instantiates the required scrollbar
     */
    registerScrollbar(name: string, constructor: (opt: any) => AbstractScroll): this;
    getScrollbar(name: 'geotoolkit.controls.tools.scroll.HorizontalScroll', options: HVBaseScroll.Options): HorizontalScroll;
    getScrollbar(name: 'geotoolkit.controls.tools.scroll.VerticalScroll', options: HVBaseScroll.Options): HorizontalScroll;
    getScrollbar(name: string, options: HVBaseScroll.Options): HorizontalScroll;
    static getClassName(): string;
    getClassName(): string;
}
