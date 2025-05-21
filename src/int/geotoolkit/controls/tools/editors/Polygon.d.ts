import { Polyline as PolylineShape } from '@int/geotoolkit/scene/shapes/Polyline';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { Path } from '@int/geotoolkit/scene/shapes/Path';
import { AbstractEditor } from '@int/geotoolkit/controls/tools/editors/AbstractEditor';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { AbstractEditorBase } from '@int/geotoolkit/controls/tools/editors/AbstractEditorBase';
/**
 * Polygon editor can be used to create and modify {@link @int/geotoolkit/scene/shapes/Polygon~Polygon} shapes
 */
export declare class Polygon extends AbstractEditor {
    /**
     * @param [options] editor options
     */
    constructor(options?: Polygon.Options);
    protected initialize(options: Polygon.Options): void;
    /**
     * Handles mouse double click event
     * @param eventArgs event args
     */
    protected onDoubleClick(eventArgs: EventArgs): void;
    protected setCoordinates(node: Node, x: number[], y: number[]): this;
    /**
     * Returns active handle index
     * @returns active handle index if any
     */
    getActiveHandle(): number;
    /**
     * Set active handle index
     * @param handle active handle index
     * @returns this
     */
    setActiveHandle(handle: number | null): this;
    /**
     * Delete joint point at specified index
     * @param index joint point index
     * @returns this
     */
    deletePointAt(index: number): this;
    /**
     * Convert active shape to Polyline
     * @param [index] split index
     */
    split(index?: number): PolylineShape;
    /**
     * Sets properties to the editing elements
     * @param properties editor properties
     * @returns this
     */
    setProperties(properties?: Polygon.Options): this;
    /**
     * Returns properties to the editing elements
     * @returns editor properties
     */
    getProperties(): Polygon.OptionsOut;
}
export declare namespace Polygon {
    /**
     * editor options
     */
    type Options = AbstractEditorBase.Options & {
        /**
         * preview path properties (@see {@link @int/geotoolkit/scene/shapes/Path~Path#setProperties})
         */
        preview?: Path.Options;
        /**
         * handles properties
         */
        handles?: {
            /**
             * node first vertex handle properties see {@link import("geotoolkit/scene/shapes/SymbolShape").SymbolShape.setProperties}
             */
            begin?: SymbolShape.Options;
            /**
             * node middle vertex handles properties see {@link import("geotoolkit/scene/shapes/SymbolShape").SymbolShape.setProperties}
             */
            middle?: SymbolShape.Options;
            /**
             * node last vertex handle properties see {@link import("geotoolkit/scene/shapes/SymbolShape").SymbolShape.setProperties}
             */
            end?: SymbolShape.Options;
        };
    };
    /**
     * editor properties
     */
    type OptionsOut = AbstractEditorBase.OptionsOut & {
        /**
         * preview path properties (@see {@link @int/geotoolkit/scene/shapes/Path~Path#getProperties})
         */
        preview: Path.OptionsOut;
        /**
         * handles properties
         */
        handles: {
            /**
             * node first vertex handle properties see {@link import("geotoolkit/scene/shapes/SymbolShape").SymbolShape.getProperties}
             */
            begin: SymbolShape.OptionsOut;
            /**
             * node middle vertex handles properties see {@link import("geotoolkit/scene/shapes/SymbolShape").SymbolShape.getProperties}
             */
            middle: SymbolShape.OptionsOut;
            /**
             * node last vertex handle properties see {@link import("geotoolkit/scene/shapes/SymbolShape").SymbolShape.getProperties}
             */
            end: SymbolShape.OptionsOut;
        };
    };
}
