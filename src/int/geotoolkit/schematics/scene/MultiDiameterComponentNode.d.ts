import { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import { Layer } from '@int/geotoolkit/scene/Layer';
import type { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
/**
 * Basic multi-diameter component node.
 */
export declare class MultiDiameterComponentNode extends ComponentNode {
    protected getShapesLayer(): Layer;
    getRangesLayer(): Layer;
    protected getInnerRangesLayer(): Layer;
    protected getLeftRangesLayer(): Layer;
    protected getRightRangesLayer(): Layer;
    /**
     * Gets component's textual description. <br>
     * The returned string contains description (if available, name otherwise),
     * plus geometry information: 'depth' ('from' and 'to'), as well as 'diameter' ('outer' and 'inner')
     */
    toString(): string;
    /**
     * Validates geometry data.
     *
     * @param geometryData geometry object or an array of such objects
     */
    validGeometryData(geometryData: WellBoreData.Entity): boolean;
}
