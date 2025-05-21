/**
 * @module geotoolkit/controls/tools/editors/Callout
 */
import { Rect } from '@int/geotoolkit/util/Rect';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { Callout as CalloutShape } from '@int/geotoolkit/controls/shapes/Callout';
import { Text } from '@int/geotoolkit/controls/tools/editors/Text';
import type { Point } from '@int/geotoolkit/util/Point';
/**
 * Callout editor can be used to create and modify {@link @int/geotoolkit/controls/shapes/Callout~Callout} nodes. Textarea dom element is used to
 * modify text.
 */
export declare class Callout extends Text {
    /**
     * @param [options] editor options
     */
    constructor(options?: Callout.Options);
    protected initialize(options: Callout.Options): void;
    protected updateBounds(bounds: Rect, node: CalloutShape): Rect;
    protected setAnchor(node: CalloutShape, ax: number | Point, ay?: number): this;
    protected move(node: CalloutShape, x: number, y: number): this;
    /**
     * Sets properties to the editing elements
     * @param properties editor properties
     * @returns this
     */
    setProperties(properties?: Callout.Options): this;
    /**
     * Returns properties
     * @returns editor properties
     */
    getProperties(): Callout.OptionsOut;
}
export declare namespace Callout {
    /**
     * editor options
     */
    type Options = Text.Options & {
        /**
         * handles properties
         */
        handles?: {
            /**
             * callout anchor handle properties (@see {@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape#setProperties})
             */
            anchor?: SymbolShape.Options;
        };
    };
    /**
     * editor properties
     */
    type OptionsOut = Text.OptionsOut & {
        /**
         * handles properties
         */
        handles: {
            /**
             * callout anchor handle properties (@see {@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape#setProperties})
             */
            anchor: SymbolShape.Options;
        };
    };
}
