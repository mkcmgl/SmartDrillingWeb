import { AbstractEditingTool } from '@int/geotoolkit/controls/tools/AbstractEditingTool';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
/**
 * The tool for {@link @int/geotoolkit/welllog/LogAbstractVisual~LogAbstractVisual}s editing.
 */
export declare class WellLogVisualsEditingTool extends AbstractEditingTool {
    /**
     * @param [options] the tool options
     */
    constructor(options?: WellLogVisualsEditingTool.Options);
    /**
     * Sets data layer for new visuals
     * @param layer the data layer for new visuals
     */
    setDataLayer(layer: CompositeNode): this;
    /**
     * Returns data layer for new visuals
     */
    getDataLayer(): CompositeNode | null;
    /**
     * Sets tool properties (mode, styles, etc.)
     * @param [props] tool props
     * @returns this
     */
    setProperties(props?: WellLogVisualsEditingTool.Options): this;
    /**
     * Returns all properties
     * @returns tool options
     */
    getProperties(): WellLogVisualsEditingTool.OptionsOut;
}
export declare namespace WellLogVisualsEditingTool {
    /**
     * the tool options
     */
    type Options = AbstractEditingTool.Options & {
        /**
         * the data layer for new visuals
         */
        datalayer?: CompositeNode;
    };
    /**
     * tool options
     */
    type OptionsOut = AbstractEditingTool.OptionsOut & {
        /**
         * the data layer for new visuals
         */
        datalayer: CompositeNode;
    };
}
