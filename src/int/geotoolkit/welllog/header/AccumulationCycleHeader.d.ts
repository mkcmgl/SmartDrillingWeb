import { LogVisualHeader } from '@int/geotoolkit/welllog/header/LogVisualHeader';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { AccumulationCycle } from '@int/geotoolkit/welllog/AccumulationCycle';
/**
 * Define visual to render curve header
 */
export declare class AccumulationCycleHeader extends LogVisualHeader<AccumulationCycle> {
    /**
     * @param [options] visual for the header or properties object
     */
    constructor(options?: AccumulationCycleHeader.Options | AccumulationCycle);
    clone(): AccumulationCycleHeader;
    protected copyConstructor(src: AccumulationCycleHeader, deepCopy?: boolean): this;
    render(inputContext: RenderingContext): void;
}
export declare namespace AccumulationCycleHeader {
    type Options = LogVisualHeader.Options<AccumulationCycle>;
}
