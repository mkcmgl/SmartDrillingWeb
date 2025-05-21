import type { LogTrack } from '@int/geotoolkit/welllog/LogTrack';
import type { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
export declare class GhostToolEventArgs {
    /**
     * @param selection selected visuals
     * @param minDepth min depth
     * @param maxDepth max depth
     * @param track track to select
     */
    constructor(selection: LogAbstractVisual[], minDepth: number, maxDepth: number, track: LogTrack);
    /**
     * Return a selected nodes in the current track. (by default are all curve)
     */
    getSelection(): LogAbstractVisual[];
    /**
     * @returns min selected depth
     */
    getMinDepth(): number;
    /**
     * @returns max selected depth
     */
    getMaxDepth(): number;
    /**
     * @returns track to select
     */
    getTrack(): LogTrack;
    /**
     * Sets a selected area in the model coordinate
     * @param selection selected visuals
     * @returns this
     */
    setSelection(selection: LogAbstractVisual[]): this;
    static getClassName(): string;
    getClassName(): string;
}
