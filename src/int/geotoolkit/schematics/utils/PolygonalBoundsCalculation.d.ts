/**
 * @module geotoolkit/schematics/utils/PolygonalBoundsCalculation
 */
import { BoundsCalculation } from '@int/geotoolkit/schematics/utils/BoundsCalculation';
import type { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
/**
 * Class to calculate schematics component bounds as Polygon's coordinates
 * (critical for multi-diameter components)
 */
export declare class PolygonalBoundsCalculation extends BoundsCalculation {
    getComponentBounds(node: ComponentNode, isCompressed?: boolean): {
        x: number[];
        y: number[];
    } | {
        x: number[];
        y: number[];
    }[];
}
