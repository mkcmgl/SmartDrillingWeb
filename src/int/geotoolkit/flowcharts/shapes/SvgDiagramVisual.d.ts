import { DiagramVisual } from '@int/geotoolkit/flowcharts/shapes/DiagramVisual';
import { Group } from '@int/geotoolkit/scene/Group';
import { Point } from '@int/geotoolkit/util/Point';
import { Dimension } from '@int/geotoolkit/util/Dimension';
/**
 * A visual used for SVG graphics rendering. SVG may load slowly or not load at all, this visual loads contents asynchronously and renders it once it’s done.
 */
export declare class SvgDiagramVisual extends DiagramVisual {
    /**
     * @param [options] visual options
     */
    constructor(options?: SvgDiagramVisual.Options);
    /**
     * Sets a new SVG data
     * @param svgData a well-formed SVG document to set
     */
    setData(svgData: string): void;
    /**
     * Creates a copy from the given source
     * @param src source object to copy from
     */
    copyConstructor(src: SvgDiagramVisual): this;
    getGeometry(): Group;
    /**
     * Gets a flag indicating if the link points are defined in relative (proportional) values
     */
    getIsLinkPointsRelative(): boolean;
    /**
     * Get a collection of relative points, if defined.
     * Values assumed as percentages: 0 - 0%, 1 - 100%
     * @returns an array of relative points
     */
    getRelativeLinkPoints(): Point[];
    /**
     * Returns an array of link points. This array may be calculated
     * dynamically if points are defined in relative mode
     * @returns an array of linking points
     */
    getLinkPoints(): Point[];
    /**
     * Has no effect, assuming SVG image should remain unchanged
     * @param properties ignored
     */
    setProperties(properties?: SvgDiagramVisual.Options): this;
    /**
     * Gets properties
     * @returns properties
     */
    getProperties(): SvgDiagramVisual.OptionsOut;
}
export declare namespace SvgDiagramVisual {
    /**
     * visual options
     */
    type Options = DiagramVisual.Options & {
        /**
         * reference size
         */
        referencesize?: Dimension;
        /**
         * flag indicating if the link points are defined in relative (proportional) values
         */
        islinkpointsrelative?: boolean;
        /**
         * a well-formed SVG document to set
         */
        svgdata?: string;
    };
    /**
     * properties
     */
    type OptionsOut = DiagramVisual.OptionsOut & {
        /**
         * reference size
         */
        referencesize?: Dimension;
        /**
         * flag indicating if the link points are defined in relative (proportional) values
         */
        islinkpointsrelative?: boolean;
        /**
         * a well-formed SVG document to set
         */
        svgdata?: string;
    };
}
