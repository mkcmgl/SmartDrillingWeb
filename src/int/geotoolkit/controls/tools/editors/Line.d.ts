import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { Line as LineShape } from '@int/geotoolkit/scene/shapes/Line';
import { AbstractEditor } from '@int/geotoolkit/controls/tools/editors/AbstractEditor';
import type { AbstractEditorBase } from '@int/geotoolkit/controls/tools/editors/AbstractEditorBase';
import type { Point } from '@int/geotoolkit/util/Point';
/**
 * Line editor can be used to create and modify {@link @int/geotoolkit/scene/shapes/Line~Line} shapes
 */
export declare class Line extends AbstractEditor {
    /**
     * @param [options] editor options
     */
    constructor(options?: Line.Options);
    protected initialize(options: Line.Options): void;
    protected setLine(node: LineShape, from: Point, to: Point): this;
    /**
     * Sets properties to the editing elements
     * @param [properties] editor properties
     * @returns this
     */
    setProperties(properties?: Line.Options): this;
    /**
     * Gets properties
     * @returns editor properties
     */
    getProperties(): Line.OptionsOut;
}
export declare namespace Line {
    /**
     * editor options
     */
    export type Options = AbstractEditorBase.Options & {
        /**
         * handles properties
         */
        handles?: HandlesOptions;
    };
    /**
     * editor properties
     */
    export type OptionsOut = AbstractEditorBase.OptionsOut & {
        /**
         * handles properties
         */
        handles: HandlesOptionsOut;
    };
    /**
     * Handles options
     */
    export type HandlesOptions = {
        /**
         * node from vertex handle properties (@see {@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape#setProperties})
         */
        from?: SymbolShape.Options;
        /**
         * node to vertex handle properties (@see {@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape#setProperties})
         */
        to?: SymbolShape.Options;
    };
    /**
     * Handles out options
     */
    type HandlesOptionsOut = {
        /**
         * node from vertex handle properties (@see {@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape#getProperties})
         */
        from: SymbolShape.OptionsOut;
        /**
         * node to vertex handle properties (@see {@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape#getProperties})
         */
        to: SymbolShape.OptionsOut;
    };
    export {};
}
