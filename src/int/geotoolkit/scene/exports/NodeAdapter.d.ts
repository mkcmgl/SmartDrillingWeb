/**
 * @module geotoolkit/scene/exports/NodeAdapter
 */
import { AbstractNodeAdapter, ScaleMode } from '@int/geotoolkit/scene/exports/AbstractNodeAdapter';
import type { Group } from '@int/geotoolkit/scene/Group';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { DocumentRenderingContext } from '@int/geotoolkit/renderer/DocumentRenderingContext';
import type { Point } from '@int/geotoolkit/util/Point';
import type { Layer } from '@int/geotoolkit/scene/Layer';
export { ScaleMode };
/**
 * Document Element class that is used to layout the pdf document
 */
export declare class NodeAdapter extends AbstractNodeAdapter {
    /**
     * @param node node
     * @param exportLimits export limits in the bounds coordinates
     */
    constructor(node: Group | Layer, exportLimits: Rect);
    /**
     * Returns the Element node
     *
     * @returns node
     */
    getNode(): Group | Layer;
    /**
     * render the document in the context
     *
     * @param context rendering context
     * @param position position of the current document relative to the parent document
     */
    render(context: DocumentRenderingContext, position: Point): void;
    /**
     * render the document in the context
     *
     * @param context rendering context
     * @param position position of the current document relative to the parent document
     * @param callback callback function
     */
    renderAsync(context: DocumentRenderingContext, position: Point, callback: () => void): void;
}
