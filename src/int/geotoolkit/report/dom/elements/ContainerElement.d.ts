import { AbstractTextElement } from '@int/geotoolkit/report/dom/elements/AbstractTextElement';
import type { Node } from '@int/geotoolkit/report/dom/Node';
/**
 * ContainerElement is an interface which has padding style;
 * for example, inheriting the same set of methods, or being testable in the same way.<br>
 * <br>
 */
export declare class ContainerElement extends AbstractTextElement {
    constructor(options: Node.Options);
    /**
     * Set content transformation angle
     * @param angle content transformation angle (90deg|180deg|270deg|-90deg)
     */
    setContentTransform(angle: string): this;
    /**
     * Return content transformation angle or null if there is no content rotation specified
     * @returns content transformation angle (90deg|180deg|270deg|-90deg)
     */
    getContentTransform(): string | null;
}
