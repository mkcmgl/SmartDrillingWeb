import { DiagramVisual } from '@int/geotoolkit/flowcharts/shapes/DiagramVisual';
import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * Class for group operations on shapes.
 * This is virtual group, and used only for logical selection and manipulations
 * over visuals
 */
export declare class VirtualGroupVisual extends DiagramVisual {
    /**
     * @param [options]
     */
    constructor(options?: DiagramVisual.Options);
    /**
     * Sets shapes array to the group
     * @param shapes the shapes to operate
     * @returns this
     */
    setShapes(shapes: Node[]): this;
    /**
     * Tes shapes being operated by the virtual group
     */
    getShapes(): Node[];
}
