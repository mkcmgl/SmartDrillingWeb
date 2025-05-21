import type { SnapPickingStrategy } from '@int/geotoolkit/seismic/data/snap/SnapPickingStrategy';
/**
 * Snap picking strategy factory
 */
export declare class SnapPickingStrategyFactory {
    constructor();
    /**
     * Register snap picking strategy to factory
     * @param strategy strategy to register
     */
    register(strategy: SnapPickingStrategy): void;
    /**
     * Get snap picking strategy by name
     * @param [name] name of strategy
     * @returns snap picking strategy
     */
    get(name?: string): SnapPickingStrategy;
    /**
     * Get instance of snap picking strategy factory
     * @returns instance
     */
    static getInstance(): SnapPickingStrategyFactory;
    static getClassName(): string;
    getClassName(): string;
}
