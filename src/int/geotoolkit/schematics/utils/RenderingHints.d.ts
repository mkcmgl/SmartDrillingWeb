import type { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
/**
 * Abstract class to formalize rendering hints
 */
export declare abstract class RenderingHints {
    /**
     * Applies rendering hints
     * @param schematics component
     */
    abstract apply(schematics: ComponentNode): void;
    /**
     * Saves default rendering state
     * @param schematics component
     */
    abstract saveDefaults(schematics: ComponentNode): Record<string, any>[];
    /**
     * Restores default rendering state
     * @param schematics component
     * @param defaults default rendering state
     */
    abstract restoreDefaults(schematics: ComponentNode, defaults: Record<string, any>[]): void;
    static getClassName(): string;
    getClassName(): string;
}
