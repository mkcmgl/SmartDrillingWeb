import { Group } from '@int/geotoolkit/scene/Group';
import { Rect } from '@int/geotoolkit/util/Rect';
import { RenderingHints } from '@int/geotoolkit/schematics/utils/RenderingHints';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
/**
 * Basic schematics component node. The constructor creates a full data copy by default.
 */
export declare class ComponentNode extends Group {
    /**
     * This instance will be fully copied. To avoid this, create a new instance
     * with null as data and then explicitly call `.setData()` with second argument set to "false".
     * @param [options] Data to set.
     */
    constructor(options?: ComponentNode.Options);
    getTemplateBounds(): Rect;
    /**
     * OnInitialize - virtual method called from this.initialize(options) before this.setData(options)
     * @param [options] Data to set.
     */
    protected onInitialize(options?: ComponentNode.Options): void;
    /**
     * Return initialization state
     */
    protected isInitialized(): boolean;
    /**
     * Sets selected state
     * @param selected selected state
     * @returns this
     */
    setSelected(selected: boolean): this;
    /**
     * Gets selected state
     */
    getSelected(): boolean;
    /**
     * Gets "resource-based" indicator. Inherited class should override the
     * method to ensure WellBoreNode invalidation on the node's resource load.
     *
     * @returns false
     */
    isResourceBased(): boolean;
    /**
     * Dispose node. Clear all listeners
     * and disconnect style to avoid memory leaks
     */
    dispose(): void;
    /**
     * Gets graphical styles associated with it.
     * The implementation returns an empty array.
     *
     * @returns an empty array
     */
    getStyles(): {
        classname: string;
        linestyle: LineStyle;
        fillstyle: FillStyle;
    }[];
    /**
     * Sets model bounds
     * @param rectBounds geometry bounds to set
     */
    protected setGeometryBounds(rectBounds: Rect): this;
    /**
     * Gets model bounds
     */
    getGeometryBounds(): Rect;
    /**
     * Get the node bounds.
     *
     * @returns component node bounds
     */
    getBounds(): Rect;
    /**
     * Gets description (Convenience method)
     * @param [deepCopy] a flag indicating if the data should be fully copied before returning or not
     * @returns description
     */
    getDescription(deepCopy?: boolean): null | WellBoreData.Description;
    /**
     * Sets description (Convenience method)
     * @param description element description
     * @param [deepCopy] a flag indicating if the data should be fully copied before setting or not
     * @returns this
     */
    setDescription(description: WellBoreData.Description, deepCopy?: boolean): this;
    /**
     * Validates geometry data. The implementation returns "true" always.
     * Custom implementation shall override the method.
     * @param geometryData geometry data to validate
     */
    validGeometryData(geometryData: WellBoreData.Entity): boolean;
    /**
     * Gets component data (see "setData" API for return object elements)
     * @param [deepCopy] a flag indicating if the data should be fully copied before returning or not
     * @returns data
     */
    getData(deepCopy?: boolean): ComponentNode.Options;
    /**
     * Sets component data
     * @param data data to set
     * @param [deepCopy] deep copy flag
     * @returns this
     */
    setData(data: ComponentNode.Options, deepCopy?: boolean): this;
    /**
     * Gets geometric data to build the node on (Convenience method)
     * @param [deepCopy] a flag indicating if the data should be fully copied before returning or not
     * @returns geometric data
     */
    getGeometryData(deepCopy?: boolean): WellBoreData.Entity;
    /**
     * Sets geometric data (Convenience method). Overridable must call the base implementation
     * for "getGeometryData" to retrieve proper information.
     * Overridable is expected to build the node geometry based on
     * the geometryData provided.
     * Optional parameters "compressedscale" and "horizontalcompressedscale" are
     * for {@link @int/geotoolkit/schematics/scene/WellBoreNode~ViewMode.Compressed} only,
     * and, "horizontalCompressedScale" works for L-shaped schematics case only.
     *
     * @param geometryData geometry data
     * @param [deepCopy] a flag indicating if the data should be fully copied before returning or not
     * @returns this
     */
    setGeometryData(geometryData: WellBoreData.Entity, deepCopy?: boolean): this;
    /**
     * Sets rendering hints
     * @param hints rendering hints
     * @param [deepCopy] a flag indicating if the data should be fully copied before returning or not
     * @returns this
     */
    setRenderingHints(hints: ComponentNode.RenderingHintsBase | RenderingHints, deepCopy?: boolean): this;
    /**
     * Gets rendering hints
     * @param [deepCopy=true] a flag indicating if the data should be fully copied before returning or not
     * @returns rendering hints
     */
    getRenderingHints(deepCopy?: boolean): ComponentNode.RenderingHintsBase | RenderingHints;
    /**
     * Updates (if needed) shape geometry depending on rendering context state.
     * The implementation does nothing
     *
     * @param context Rendering Context
     */
    updateShapeGeometry(context: RenderingContext): void;
    /**
     * Gets component's textual description. <br>
     * The implementation returns description if available; name otherwise.
     */
    toString(): string;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): ComponentNode.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: ComponentNode.Options): this;
}
export declare namespace ComponentNode {
    type Options = Group.Options & {
        /**
         * element description
         */
        description?: WellBoreData.Description;
        /**
         * element geometry
         */
        geometry?: WellBoreData.Entity;
        /**
         * geometry bounds
         */
        rectbounds?: Rect;
        /**
         * component rendering hints
         */
        renderinghints?: RenderingHintsBase | RenderingHints;
    };
    type RenderingHintsBase = {
        linestyle?: LineStyle | string | LineStyle.Options;
        fillstyle?: FillStyle | string | FillStyle.Options;
    };
    /**
     * properties
     */
    type OptionsOut = Group.OptionsOut & {
        /**
         * element description
         */
        description: WellBoreData.Description;
        /**
         * geometry data
         */
        geometry: WellBoreData.Entity;
        /**
         * component rendering hints
         */
        renderinghints?: RenderingHintsBase | RenderingHints;
        /**
         * geometry bounds
         */
        rectbounds: Rect;
    };
}
