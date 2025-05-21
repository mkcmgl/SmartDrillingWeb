import type { IWellBehavior } from '@int/geotoolkit/welllog/multiwell/IWellBehavior';
import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * Provide a standard behavior for wells and tracks
 */
export declare class WellBehaviorRegistry {
    constructor();
    /**
     * Returns behavior associated with type of node
     * @param node specified visual
     * @returns header
     */
    getBehavior(node: Node): IWellBehavior | null;
    /**
     * Returns behavior associated with class name
     * @param className class name for visual
     */
    getBehaviorByClassName(className: string): IWellBehavior;
    /**
     * Sets header helper
     * @param className class name for visual
     * @param behavior behavior for the specified class name
     */
    registerBehavior(className: string, behavior: IWellBehavior): this;
    /**
     * Return default instance of the {@link @int/geotoolkit/welllog/multiwell/WellBehaviorRegistry~WellBehaviorRegistry}
     */
    static getDefaultInstance(): WellBehaviorRegistry;
    static getClassName(): string;
    getClassName(): string;
}
