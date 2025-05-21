/**
 * @module geotoolkit/renderer/RenderingState
 */
import { Graphics } from '@int/geotoolkit/renderer/Graphics';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Define buffer of commands
 */
export declare abstract class RenderingState extends Graphics {
    protected constructor();
    /**
     * Clear buffer
     */
    abstract clear(): void;
    /**
     * Draw buffer on context.
     * @param context
     */
    abstract draw(context: RenderingContext): void;
    /**
     * Check if the state is valid for the current context
     * @param context context to check
     */
    abstract isValid(context: RenderingContext): boolean;
}
