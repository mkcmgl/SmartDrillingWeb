import { RegularComponentNode } from '@int/geotoolkit/schematics/scene/RegularComponentNode';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
/**
 * Image-based reusable component node extension.
 *
 * @example
 * // This example shows how to use an image(INT logo) as a custom component.
 * // Register the factory to be customized
 * import {ComponentNodeFactoryRegistry} from '@int/geotoolkit/schematics/factory/ComponentNodeFactoryRegistry';
 * import {WellBoreData} from '@int/geotoolkit/schematics/data/WellBoreData';
 * import {WellBoreNode} from '@int/geotoolkit/schematics/scene/WellBoreNode';
 * import {ReusableImageComponentNode} from '@int/geotoolkit/schematics/scene/ReusableImageComponentNode';
 * const componentName = 'MySimpleComponent';
 * const factoryRegistry = new ComponentNodeFactoryRegistry();
 * factoryRegistry.setFactory(componentName, () => new ReusableImageComponentNode('./int.png'));
 *
 * // data:
 * const wellBoreData = new WellBoreData();
 * wellBoreData.addComponent(componentName, {
 *        'geometry': {
 *            'depth': {'from': 50, 'to': 100},
 *            'diameter': {'outer': 50}
 *        }
 * });
 *
 * // shape:
 * const wellBoreShape = new WellBoreNode({
 *        'data': wellBoreData,
 *        'registry': factoryRegistry
 * });
 */
export declare class ReusableImageComponentNode extends RegularComponentNode {
    constructor(options?: ReusableImageComponentNode.Options | string);
    /**
     * Sets properties
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: ReusableImageComponentNode.Options): this;
    /**
     * Returns properties
     * @returns properties
     */
    getProperties(): ReusableImageComponentNode.OptionsOut;
    /**
     * Gets template node
     */
    getTemplateNode(): AbstractNode;
    /**
     * Gets template bounds
     */
    getTemplateBounds(): Rect;
}
export declare namespace ReusableImageComponentNode {
    /**
     * options or image URL
     */
    type Options = RegularComponentNode.Options & {
        /**
         * image URL
         */
        url?: string;
    };
    /**
     * properties
     */
    type OptionsOut = RegularComponentNode.OptionsOut & {
        /**
         * image URL
         */
        url: string;
    };
}
