import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { Iterator } from '@int/geotoolkit/util/iterator';
import type { ILayout1D } from '@int/geotoolkit/layout/ILayout1D';
import type { LogMarker } from '@int/geotoolkit/welllog/LogMarker';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Creates custom marker visual using the overlapping markers and {@link @int/geotoolkit/layout/ILayout1D~ILayout1D}.
 */
export declare class MarkerSet extends CompositeNode {
    constructor(options?: MarkerSet.Options);
    getProperties(): MarkerSet.OptionsOut;
    setProperties(properties?: MarkerSet.Options): this;
    /**
     * Specify border name visible or not.
     *
     * @param visible border name visible or not.
     * @returns this
     */
    setVisibleNameBorder(visible: boolean): this;
    /**
     * Return true if Name label border is visible. It is visible by default.
     */
    isVisibleNameBorder(): boolean;
    /**
     * Specify depth label border visible or not.
     *
     * @param visible depth label border visible or not
     * @returns this
     */
    setVisibleDepthBorder(visible: boolean): this;
    /**
     * Return true if depth label border is visible. It is visible by default.
     */
    isVisibleDepthBorder(): boolean;
    /**
     * Specify name label visible or not.
     *
     * @param visible name label visible or not.
     * @returns this
     */
    setVisibleNameLabel(visible: boolean): this;
    /**
     * Return true if name label is visible. It is visible by default.
     */
    isVisibleNameLabel(): boolean;
    /**
     * Specify depth label visible or not.
     *
     * @param visible specifies if depth label visible or not
     * @returns this
     */
    setVisibleDepthLabel(visible: boolean): this;
    /**
     * Return true if depth label is visible. It is visible by default.
     */
    isVisibleDepthLabel(): boolean;
    /**
     * Return name label position as an anchor point
     */
    getNameLabelPosition(): AnchorType;
    /**
     * Set label position
     *
     * @param anchorPoint label position
     * @returns this
     */
    setNameLabelPosition(anchorPoint: AnchorType): this;
    /**
     * Return depth label position as an anchor point
     */
    getDepthLabelPosition(): AnchorType;
    /**
     * Set depth label position
     *
     * @param anchorPoint label position
     * @returns this
     */
    setDepthLabelPosition(anchorPoint: AnchorType): this;
    /**
     * Remove marker or array of markers
     * @param marker marker(s) to remove
     */
    removeChild(marker: LogMarker | LogMarker[]): this;
    /**
     * Add marker or array of markers
     * @param marker marker(s) to add
     * @returns this
     */
    addChild(marker: LogMarker | LogMarker[] | Iterator<LogMarker>): this;
    getVisibleModelLimits(): Rect;
}
export declare namespace MarkerSet {
    /**
     * markerset options
     */
    type Options = CompositeNode.Options & {
        /**
         * markers layout
         */
        layout?: ILayout1D;
        /**
         * show overlapped labels
         */
        showoverlappedlabels?: boolean;
        /**
         * visible name label
         */
        visiblenamelabel?: boolean;
        /**
         * visible depth label
         */
        visibledepthlabel?: boolean;
        /**
         * name label anchor
         */
        namelabelposition?: AnchorType;
        /**
         * depth label anchor
         */
        depthlabelposition?: AnchorType;
        /**
         * visible name border
         */
        visiblenameborder?: boolean;
        /**
         * visible depth border
         */
        visibledepthborder?: boolean;
    };
    type OptionsOut = CompositeNode.OptionsOut & {
        /**
         * markers layout
         */
        layout?: ILayout1D;
        /**
         * show overlapped labels
         */
        showoverlappedlabels?: boolean;
        /**
         * visible name label
         */
        visiblenamelabel?: boolean;
        /**
         * visible depth label
         */
        visibledepthlabel?: boolean;
        /**
         * name label anchor
         */
        namelabelposition?: AnchorType;
        /**
         * depth label anchor
         */
        depthlabelposition?: AnchorType;
        /**
         * visible name border
         */
        visiblenameborder?: boolean;
        /**
         * visible depth border
         */
        visibledepthborder?: boolean;
    };
}
