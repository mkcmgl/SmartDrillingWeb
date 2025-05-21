import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
/**
 * Abstraction to formalize an input transformation adjustment
 */
export declare class ScaleScrollStrategy {
    /**
     * Adjusts input transformation
     * @param model model
     * @param newTr transformation to adjust
     * @returns adjusted transformation
     */
    adjustTransformation(model: AbstractNode, newTr: Transformation): Transformation;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace ScaleScrollStrategy {
    type Delegate = ScaleScrollStrategy | ((model: AbstractNode, tr: Transformation) => Transformation);
}
