/**
 * @module geotoolkit/welllog/multiwell/tools/ProxyTrackHighlightTool
 */
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
/**
 * Creates tool to highlight proxy tracks
 */
export declare class ProxyTrackHighlightTool extends AbstractTool {
    /**
     * @param manipulatorLayer layer for holding temporary shapes
     * @param trackContainer track container
     * @param [options] options
     */
    constructor(manipulatorLayer: CompositeNode, trackContainer: CompositeNode, options?: ProxyTrackHighlightTool.Options);
    /**
     * Unhighlight track
     */
    unhighlight(): void;
    /**
     * Sets options
     * @param [options] options
     * @returns this
     */
    setOptions(options?: ProxyTrackHighlightTool.Options): this;
}
export declare namespace ProxyTrackHighlightTool {
    /**
     * options
     */
    type Options = AbstractTool.Options & {
        /**
         * options highlight
         */
        highlight?: {
            /**
             * options for track highlighting fill style
             */
            fillstyle?: FillStyle | FillStyle.Options | string;
            /**
             * options for track highlighting line style
             */
            linestyle?: LineStyle | LineStyle.Options | string;
        };
    };
}
