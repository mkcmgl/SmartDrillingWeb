import type { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import type { AbstractComponentNodeFactory } from '@int/geotoolkit/schematics/factory/AbstractComponentNodeFactory';
import type { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
/**
 * Default componentName-to-componentFactory mapping
 */
export declare class DefaultMap {
    /**
     * Gets array of componentName-to-componentFactory pairs
     * @example
     * // To retrieve a list of all components supported in SchematicsJS  use the following call
     * import {DefaultMap} from '@int/geotoolkit/schematics/factory/DefaultMap';
     * const elements = DefaultMap.getElements();
     */
    static getElements(): {
        name: string;
        factory: AbstractComponentNodeFactory | ((data?: WellBoreData.Element) => ComponentNode);
    }[];
    static getClassName(): string;
    getClassName(): string;
}
