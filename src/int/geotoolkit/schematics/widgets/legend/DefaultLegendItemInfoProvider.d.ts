/**
 * @module geotoolkit/schematics/widgets/legend/DefaultLegendItemInfoProvider
 */
import { AbstractLegendItemInfoProvider } from '@int/geotoolkit/schematics/widgets/legend/AbstractLegendItemInfoProvider';
import { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
/**
 * Enum of legend item info modes
 * @enum
 * @readonly
 */
export declare enum Mode {
    /**
     * Description
     */
    Description = "Description",
    /**
     * Name
     */
    Name = "Name",
    /**
     * Description if not null; Name - otherwise
     */
    DescriptionOrName = "DescriptionOrName"
}
/**
 * DefaultLegendItemInfoProvider
 */
export declare class DefaultLegendItemInfoProvider extends AbstractLegendItemInfoProvider {
    constructor(mode?: Mode);
    /**
     * Gets legend item info based on component node
     * @throws Error if componentNode is not an instance of ComponentNode
     * @param componentNode component node
     */
    getLegendItemInfo(componentNode: ComponentNode): null | string;
}
