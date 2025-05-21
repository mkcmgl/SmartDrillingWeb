import { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { AbstractScaledData } from '@int/geotoolkit/data/AbstractScaledData';
/**
 * Create point set visual
 */
export declare abstract class LogPointSet extends LogAbstractVisual {
    /**
     * Constructor
     * @param [options] options
     */
    protected constructor(options?: LogAbstractVisual.Options);
    protected copyConstructor(src: LogPointSet, deepCopy?: boolean): this;
    /**
     * Returns null
     */
    getModelLimits(): Rect | null;
    /**
     * Return bound in the parent coordinates
     */
    getBounds(): Rect | null;
    /**
     * Sets bounds of the point set in the parent coordinates false
     *
     * @param bounds bounds of the point set
     * @returns this
     */
    setBounds(bounds: Rect): this;
    /**
     * Enable or disable auto bounds If auto bounds is enabled then it equals to
     * parent model limits
     *
     * @param enable Enable or disable auto bounds
     * @returns this
     */
    setAutoBounds(enable: boolean): this;
    /**
     * Enable automatic bounds. If auto bounds is enabled then it equals to
     * parent model limits
     */
    isAutoBounds(): boolean;
    /**
     * Gets the visual's scaled data
     *
     * @returns (the implementation returns null).
     */
    getScaledData(): AbstractScaledData | null;
}
