import type { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
/**
 * Abstract class to calculate schematics component bounds
 */
export declare abstract class BoundsCalculation {
    /**
     * Calculates schematics component bounds
     * @param schematics component
     * @returns component bounds
     */
    abstract getComponentBounds(schematics: ComponentNode, isCompressed?: boolean): {
        x: number[];
        y: number[];
    } | {
        x: number[];
        y: number[];
    }[];
    static getClassName(): string;
    getClassName(): string;
}
