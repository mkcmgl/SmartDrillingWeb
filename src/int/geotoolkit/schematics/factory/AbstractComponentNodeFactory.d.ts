import type { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import type { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
/**
 * Base schematics component node factory.
 */
export declare abstract class AbstractComponentNodeFactory {
    /**
     * Creates component node and return it.
     * @param data to build the node of
     */
    abstract createComponentNode(data?: WellBoreData.Element, forceCreateNewNode?: boolean, deepCopyData?: boolean): ComponentNode;
    /**
     * Validates geometry data. The implementation returns "true" always
     * @param geometryData geometry data to validate
     */
    validGeometryData(geometryData: WellBoreData.Entity): boolean;
}
