import { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
/**
 * Abstract extension of basic schematics component node.
 * It is base class for {@link @int/geotoolkit/schematics/scene/RegularComponentNode~RegularComponentNode}
 * and {@link @int/geotoolkit/schematics/scene/FlippedComponentNode~FlippedComponentNode} implementations.
 */
export declare abstract class ReusableComponentNode extends ComponentNode {
    /**
     * @param [options] An object containing the properties to set
     */
    protected constructor(options?: ReusableComponentNode.Options);
    /**
     * Gets graphical styles associated with it.
     */
    getStyles(): {
        classname: string;
        linestyle: LineStyle;
        fillstyle: FillStyle;
    }[];
    /**
     * Gets template node
     */
    abstract getTemplateNode(): AbstractNode;
    /**
     * Gets template bounds
     */
    abstract getTemplateBounds(): Rect;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): ReusableComponentNode.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: ReusableComponentNode.Options): this;
}
export declare namespace ReusableComponentNode {
    /**
     * An object containing the properties to set
     */
    type Options = ComponentNode.Options & {
        /**
         * parent proxy
         */
        parentproxy?: ComponentNode;
    };
    /**
     * properties
     */
    type OptionsOut = ComponentNode.OptionsOut & {
        /**
         * properties
         */
        parentproxy?: ComponentNode;
    };
}
