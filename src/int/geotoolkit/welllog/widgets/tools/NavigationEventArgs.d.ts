/**
 * @module geotoolkit/welllog/widgets/tools/NavigationEventArgs
 */
import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Range } from '@int/geotoolkit/util/Range';
export declare class NavigationEventArgs extends ProxyEventArgs {
    constructor(eventArgs: EventArgs, limits: Range);
    /**
     * @deprecated since 4.0. Use getLimits instead.
     */
    get limits(): Range;
    /**
     * Returns limits
     */
    getLimits(): Range;
}
