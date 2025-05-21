import { IBaseWellTrack } from '@int/geotoolkit/welllog/multiwell/IBaseWellTrack';
import type { CompositeTool } from '@int/geotoolkit/controls/tools/CompositeTool';
import type { WellTrack } from '@int/geotoolkit/welllog/multiwell/WellTrack';
import type { LogTrack } from '@int/geotoolkit/welllog/LogTrack';
/**
 * Define an interface for proxy track
 *
 * @interface
 * @deprecated since 4.0. Use ProxyWellTrack directly
 */
export declare abstract class IProxyWellTrack extends IBaseWellTrack {
    /**
     * Return a reference to template
     * @returns track prototype
     */
    abstract getPrototype(): WellTrack | LogTrack | null;
    /**
     * Return a reference to track instance
     * @returns track instance
     */
    abstract getTrack(): WellTrack | LogTrack | null;
    /**
     * Returns root tool associated to this widget
     */
    abstract getTool(): CompositeTool;
    /**
     * Instantiate template
     */
    abstract createWritableInstance(): Promise<WellTrack | LogTrack>;
}
