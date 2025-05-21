/**
 * @module geotoolkit/schematics/factory/SimpleComponentNodeFactory
 */
import { AbstractComponentNodeFactory } from '@int/geotoolkit/schematics/factory/AbstractComponentNodeFactory';
import type { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import type { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
/**
 * Simple schematics component node factory.
 */
export declare class SimpleComponentNodeFactory extends AbstractComponentNodeFactory {
    /**
     * @param createComponentNode create method
     * @param [validGeometryData] validate method
     */
    constructor(createComponentNode: (data?: WellBoreData.Element) => ComponentNode, validGeometryData?: (geometryData: WellBoreData.Entity) => boolean);
    createComponentNode(data: WellBoreData.Element): ComponentNode;
}
