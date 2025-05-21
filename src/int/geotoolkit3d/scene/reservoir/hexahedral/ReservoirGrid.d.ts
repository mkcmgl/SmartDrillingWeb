/**
 * @module geotoolkit3d/scene/reservoir/hexahedral/ReservoirGrid
 */
import type { Box3, Vector4 } from 'three';
import { Mesh } from 'three';
import { AbstractReservoirGrid } from '@int/geotoolkit3d/scene/reservoir/AbstractReservoirGrid';
import type { Merge } from '@int/geotoolkit/base';
import { HighlightMode } from '@int/geotoolkit3d/scene/reservoir/HighlightMode';
import { IJKIndex } from '@int/geotoolkit3d/scene/reservoir/IJKIndex';
import type { ReservoirData } from '@int/geotoolkit3d/data/reservoir/hexahedral/ReservoirData';
import type { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { IJKValueFilter } from '@int/geotoolkit3d/scene/reservoir/IJKValueFilter';
import type { MeshColorMapBasicMaterial } from '@int/geotoolkit3d/scene/MeshColorMapBasicMaterial';
import type { SkeletonOptions } from '@int/geotoolkit3d/scene/reservoir/SkeletonOptions';
import type { DisplayMode } from '@int/geotoolkit3d/scene/reservoir/DisplayMode';
/**
 * A 3D Reservoir object.<br>
 *
 * This object represents the 3D visualization of a reservoir grid with an optional attribute used for coloring.<br>
 * The reservoir cell's geometry and values is defined by the given ReservoirData, and the cell visibility is determined by user-defined filters.
 *
 * The skeleton (outline) is drawn simultaneously as the cell in the GPU fragment stage, so it doesn't need extra CPU/memory resources.<br>
 *
 * The default DisplayMode is showing mesh, skeleton, but not horizons.<br>
 */
export declare class ReservoirGrid extends AbstractReservoirGrid {
    constructor(options: ReservoirGrid.Options);
    /**
     * Change the cells values. This will change the active cells properties used with the colormap.<br>
     * This method is new in 4.0 and use an improved data layout, which is faster and more memory efficient.<br>
     * Changing the main color values will reset the value filters (not the user-defined filter function).
     */
    setCellsValues(cellsValues: ReservoirData.CellsValues): void;
    /**
     * Set this Reservoir Grid options.<br>
     * Changing position data using setOptions is not allowed, as it is more expensive than creating a new Reservoir Grid.
     */
    setOptions(options: ReservoirGrid.OptionsBase): this;
    /**
     * Get this Reservoir Grid options.
     */
    getOptions(): ReservoirGrid.OptionsBaseOut;
    /**
     * Get the bounding box of this Reservoir Grid (in local coordinates).
     * @returns bbox
     */
    getBoundingBox(): Box3;
    /**
     * Get the reservoir data, holding the cells positions and values.
     * @returns data
     */
    getData(): ReservoirData;
    /**
     * Return the volume occupied by the remaining cells resulting from the user's filter.<br>
     * Each cell volume is computed based on the cell's xyz corner coordinates.<br>
     * The unit of the volume measurement is based on the unit used in cells coordinates, to user discretion.
     * (ex: if cells coordinates are in meters, then the volume will be in cubic meters. If feet, then cubic feet, and so on.)
     * @returns the total filtered cells volume.
     */
    getFilteredCellsVolume(): number;
    /**
     * Returns the total volume of this reservoir.<br>
     * Computed by the sum of the volume of every cells, filters are ignored.<br>
     * The unit of the volume measurement is based on the unit used in cells coordinates, to user discretion.
     * (ex: if cells coordinates are in meters, then the volume will be in cubic meters. If feet, then cubic feet, and so on.)
     */
    getReservoirFullVolume(): number;
    /**
     * Return the number of cells resulting from the user's filter.
     */
    getFilteredCellsCount(): number;
    /**
     * Remove the highlight effect on the selected shape.
     */
    removeHighlightShape(): void;
    /**
     * Used by the rendering pass to know whether this object have its won highlight mechanism, or should the pass itself generate a generic one.
     */
    useOwnHighlight(): boolean;
    /**
     * Get selected helper cell<br>
     * Needs to have highlighting enabled in Plot.
     * @returns helper cell with geometry updated upon the selected cell.
     */
    getSelectedCell(): Mesh;
    /**
     * Get IJK info of selected/highlighted cell.
     */
    getSelectedIJKIndex(): IJKIndex;
    /**
     * Return true if the given IJK is valid by the IJK filter of ReservoirGrid, false if is filtered out.
     */
    isIJKValidInFilter(ijk: IJKIndex | number[]): boolean;
    /**
     * Return true if the given value is bounded by the value filter of this ReservoirGrid, false if the value is filtered out.<br>
     * Also return false if the value is not a number or equal to the defined nullvalue.
     */
    isValueValidInFilter(value: number): boolean;
    /**
     * Return true if the cell of the given index is filtered out (is not displayed), based on both IJK filter, value filter, and the user filter.
     */
    isCellIndexFilteredOut(index: number): boolean;
    /**
     * Dispose this reservoir visual, along its ReservoirData.
     */
    dispose(): void;
    /**
     * Rebuild reservoir geometry depending on filters.<br>
     * Calling ReservoirGrid.setOptions() also rebuilds the reservoir. The main use of this updateCellFilter() function is to update the reservoir when the custom filter is updated via closure variables when setOptions() is not called.
     */
    updateCellFilter(): this;
    /**
     * Rebuild reservoir geometry depending on filters.
     * @deprecated since 4.0, reservoir geometry is now updated automatically when filter options are updated.
     */
    rebuild(): this;
}
export declare namespace ReservoirGrid {
    export type Options = Merge<OptionsBase, {
        /**
         * The Reservoir cell data to build this reservoir.
         */
        data: ReservoirData;
        /**
         * Disable the Intel integrated GPU warning when using picking with the reservoir grid.<br>
         * This only disable the warning, Reservoir picking is still disabled by default upon detecting Intel iGPU.<br>
         * To enable Reservoir picking and cell highlight when using an integrated GPU, please use ReservoirGrid.setSelectable(true).
         */
        disableigpuwarning?: boolean;
    }>;
    export type OptionsBase = Partial<CommonOptions> & Geometry.FilterOptions & Material.OptionsBase & Object3D.Options & {
        /**
         * @deprecated since 4.0
         * The cells values to update in this reservoir.
         * Changing values through ReservoirGrid.setOptions() to change the reservoir values is deprecated since 4.0.
         * Please instead use ReservoirGrid.setCellsValues() which use the more efficient data layout.
         */
        cellvalues?: ReservoirData.CellsValues;
        /**
         * @deprecated since 4.0
         * The Reservoir cell data, previously used to update the cell values.
         * Will be removed in the next version, please instead use "cellvalues".
         */
        data?: ReservoirData;
    };
    export type OptionsBaseOut = CommonOptions & Geometry.FilterOptionsOut & Material.OptionsBaseOut & Required<Object3D.Options>;
    type CommonOptions = {
        /**
         * If set to true, compute cells volume. If false, will be computed when the volume is first queried.<br>
         * Volume can then be obtained using {@link @int/geotoolkit3d/data/reservoir/hexahedral/ReservoirData~ReservoirData#getReservoirFullVolume}(),
         * or per cell through {@link @int/geotoolkit3d/data/reservoir/hexahedral/ReservoirData~ReservoirData#getCellData}(cellIndex).volume.
         */
        computecellsvolume: boolean;
        /**
         * The reservoir highlight mode.
         */
        highlightmode: HighlightMode;
    };
    export namespace Geometry {
        type FilterOptions = IJKValueFilter & {
            /**
             * If set, define the minimum bounds of the cells allowed to be rendered, such that:<ul>
             * <li>minbound.x => the minimum I index, cells below that index will not be rendered.</li>
             * <li>minbound.y => the minimum J index, cells below that index will not be rendered.</li>
             * <li>minbound.z => the minimum K index, cells below that index will not be rendered.</li>
             * <li>minbound.w => the minimum active property value, cell with a value below that value will not be rendered.</li></ul>
             */
            minbound?: Vector4;
            /**
             * If set, define the maximum bounds of the cells allowed to be rendered, such that:<ul>
             * <li>maxbound.x => the maximum I index, cells above that index will not be rendered.</li>
             * <li>maxbound.y => the maximum J index, cells above that index will not be rendered.</li>
             * <li>maxbound.z => the maximum K index, cells above that index will not be rendered.</li>
             * <li>maxbound.w => the maximum active property value, cell with a value above that value will not be rendered.</li></ul>
             */
            maxbound?: Vector4;
        };
        type FilterOptionsOut = Required<FilterOptions>;
    }
    export namespace Material {
        type OptionsBase = Shader.Options & MeshColorMapBasicMaterial.OptionsBase;
        type OptionsBaseOut = Shader.OptionsOut & MeshColorMapBasicMaterial.OptionsBaseOut;
    }
    export namespace Shader {
        type OptionsOut = {
            skeleton: SkeletonOptions;
            mode: DisplayMode;
        };
        type Options = Partial<OptionsOut>;
    }
    export {};
}
