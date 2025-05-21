import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import type { MultiWellWidget } from '@int/geotoolkit/welllog/multiwell/MultiWellWidget';
/**
 * Creates tool to activate proxy tracks on mouse:hover
 */
export declare class ProxyTrackActivationTool extends AbstractTool {
    /**
     * Create tool
     * @param [selectionTool] selection tool or properties object
     * @param [rootNode] target header object
     */
    constructor(target: MultiWellWidget);
}
