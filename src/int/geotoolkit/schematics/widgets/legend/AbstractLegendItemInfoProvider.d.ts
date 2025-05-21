import type { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
/**
 * Abstraction for schematics' legend item text.
 */
export declare abstract class AbstractLegendItemInfoProvider {
    /**
     * Gets legend item info based on component node
     * @param componentNode component node
     */
    abstract getLegendItemInfo(componentNode: ComponentNode): null | string;
    static getClassName(): string;
    getClassName(): string;
}
