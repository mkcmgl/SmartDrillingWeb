import { WellLogWidget } from '@int/geotoolkit/welllog/widgets/WellLogWidget';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
/**
 * Define tool to open / close collapsed intervals
 */
export declare class CollapsedIntervalTool extends AbstractTool {
    protected _manipulatorLayer: WellLogWidget;
    /**
     * Creates tool to open / close collapsed intervals
     * @param options tool options
     * @throws {Error}
     * This exception is thrown if manipulator layer is null
     */
    constructor(options: AbstractTool.Options);
    /**
     * Creates tool to open / close collapsed intervals
     * @param widget well log widget
     * @throws {Error}
     * This exception is thrown if manipulator layer is null
     */
    constructor(options: WellLogWidget);
}
