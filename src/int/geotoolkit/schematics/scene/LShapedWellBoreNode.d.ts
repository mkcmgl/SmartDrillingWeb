import { ViewMode, WellBoreNode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import { Layer } from '@int/geotoolkit/scene/Layer';
import { Iterator } from '@int/geotoolkit/util/iterator';
import { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import type { Path } from '@int/geotoolkit/scene/shapes/Path';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { IViewModeBuilder } from '@int/geotoolkit/schematics/builder/IViewModeBuilder';
/**
 * L-shaped WellBoreNode extension.
 *
 * @example
 * // how to create and add data to L-Shaped Schematic
 * import {LShapedWellBoreNode} from '@int/geotoolkit/schematics/scene/LShapedWellBoreNode';
 * ...
 * const wellBoreNode = new LShapedWellBoreNode({
 *  'data': wellBoreData,
 *  'trackWidth': 250,
 *  // Setup the deviation point (compare to the "tubing" depth range above)
 *  'deviationDepth': 8000,
 *  'LShapeAccuracy': 16
 * })
 */
export declare class LShapedWellBoreNode extends WellBoreNode {
    constructor(options?: LShapedWellBoreNode.Options);
    protected getHighlightLayersIterator(func?: (item: Node) => boolean): Iterator<Layer<Path>>;
    protected getHighlightShapes(nodeId: string, type: 'highlight' | 'selection'): Path[];
    /**
     * Gets deviation depth value (or object if 'KOP' and 'EOC' values set before)
     * @param [type] deviation depth type ('KOP' or 'EOC')
     * @returns value or structure
     */
    getDeviationDepth(type: 'kop' | 'eoc'): number;
    getDeviationDepth(): {
        kop: number;
        eoc: number;
    };
    /**
     * Sets deviation depth value
     * @param deviationDepth deviation depth value
     * @param [type] deviation depth type ('KOP' or 'EOC')
     * @returns this
     */
    setDeviationDepth(deviationDepth: {
        kop: number;
        eoc: number;
    } | number): this;
    /**
     * Sets selected component nodes
     * @param selectedComponentNodes selected component nodes
     * @returns this
     */
    setSelectedComponentNodes(selectedComponentNodes: ComponentNode[]): this;
    /**
     * @param [disposeComponents] automatically dispose components
     */
    protected clearComponents(disposeComponents?: boolean): void;
    /**
     * Gets well bore view mode.
     */
    getViewMode(): ViewMode;
    /**
     * Sets well bore view mode.
     * @param [viewMode] view mode type or
     * an object containing view mode type and options
     * @returns "model limits to bounds" depths mapping
     */
    setViewMode(viewMode?: WellBoreNode.ViewModeInfo | ViewMode): IViewModeBuilder.BuildOptions;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): LShapedWellBoreNode.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LShapedWellBoreNode.Options): this;
}
export declare namespace LShapedWellBoreNode {
    type Options = WellBoreNode.Options & {
        /**
         * track width
         */
        trackwidth?: number;
        /**
         * deviation depth (if "null" then it's calculated based on the data)
         */
        deviationdepth?: number | {
            kop: number;
            eoc: number;
        };
        /**
         * accuracy (bigger number means smoother L-shape)
         */
        lshapeaccuracy?: number;
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = WellBoreNode.OptionsOut & {
        /**
         * track width
         */
        trackwidth?: number;
        /**
         * deviation depth
         */
        deviationdepth?: number | {
            kop: number;
            eoc: number;
        };
        /**
         * accuracy
         */
        lshapeaccuracy?: number;
    };
}
