import { Element } from '@int/geotoolkit/report/elements/Element';
import { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
export declare abstract class ShapeElement extends Element {
    /**
     * @param [options] contentElement or properties object
     */
    protected constructor(options?: ShapeElement.Options | AbstractNode);
    protected copyConstructor(src: ShapeElement, deepCopy?: boolean): this;
}
export declare namespace ShapeElement {
    /**
     * contentElement or properties object
     */
    type Options = Element.Options & {
        /**
         * contentElement
         */
        shapeelement?: AbstractNode;
    };
}
