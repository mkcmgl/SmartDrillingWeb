/**
 * @module geotoolkit/schematics/utils/ShapesBoundsCalculation
 */
import { BoundsCalculation } from '@int/geotoolkit/schematics/utils/BoundsCalculation';
import type { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
/**
 * Class to calculate schematics component bounds as Rect's coordinates
 */
export declare class ShapesBoundsCalculation extends BoundsCalculation {
    constructor();
    getComponentBounds(node: ComponentNode, isCompressed?: boolean): {
        x: number[];
        y: number[];
    } | {
        x: number[];
        y: number[];
    }[];
}
