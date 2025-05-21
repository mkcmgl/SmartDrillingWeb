import { AbstractReservoirData } from '@int/geotoolkit3d/data/reservoir/AbstractReservoirData';
import { IJKIndex } from '@int/geotoolkit3d/scene/reservoir/IJKIndex';
import { Octree } from '@int/geotoolkit3d/data/util/Octree';
import type { TypedArray } from '@int/geotoolkit/util/TypedArray';
/**
 * This class host the Reservoir data using hexahedral (8 corner per cell) cell structure.<br>
 * One value per cell can be added for both filtering and render coloration purpose.<br>
 * Additionally, multiple additional data can be defined per cell to be used along user-defined filters,
 * allowing for very customizable cell filtering.
 */
export declare class ReservoirData extends AbstractReservoirData {
    constructor(options: ReservoirData.Options);
    getMetaData(): ReservoirData.ReservoirMetaData;
    /**
     * Returns the reservoir data's attributes
     * @deprecated since 4.0 reservoir attributes are for internal use only.
     * Please instead use the new public methods:
     * {@link @int/geotoolkit3d/data/reservoir/hexahedral/ReservoirData~ReservoirData#getMetaData}(),
     * {@link @int/geotoolkit3d/data/reservoir/hexahedral/ReservoirData~ReservoirData#getReservoirFullVolume}()
     * and the rest of the Reservoir public API.
     */
    getAttributes(): ReservoirData.ReservoirMetaData;
    /**
     * Returns the index for the reservoir cell based on the given i j k index
     * @returns index for this i j k cell (null if the cell doesn't exist)
     */
    getIndexForCell(i: number, j: number, k: number): number | null;
    /**
     * Return the IJK index of the cell identified by the given position in the reservoir.
     * @param index the cell index in the reservoir. Index start at 0, and must be inferior to the total number of cells.
     */
    getCellIJKbyIndex(index: number): [
        i: number,
        j: number,
        k: number
    ];
    /**
     * This function clears all buffers and geometry.
     * @deprecated since 4.0, please use .dispose() instead.
     * Resetting a reservoir to change the cell position data is not a supported feature.
     * If cell count or positions needs to be changed, please create a new reservoir instead.
     */
    reset(): this;
    /**
     * Set several cells options<br>
     * The geometrical data are expected in a regular order, see example<br>
     * <br>
     * x values are [xA, xB, xC, xD, xE, xF, xG, xH],<br>
     * y values are [yA, ..., yH] and z values are [zA, ..., zH]<br>
     * <br>
     * The cell geometry does not need to be orthogonal.<br>
     *
     * @example
     *
     * I |------>
     *
     * A ------- B            __
     * |\        |\            \
     * | \       | \            \  J
     * |  C ------- D     _      v
     * E -|----- F  |     |
     *  \ |       \ |     | K
     *   \|        \|     |
     *    G ------- H     v
     * @throws Error if parameters are invalid.
     * @deprecated since 4.0, to update cells values after reservoir creation please use {@link @int/geotoolkit3d/scene/reservoir/hexahedral/ReservoirGrid~ReservoirGrid#setCellsValues}() instead.
     */
    setCellsOptions(positions?: ReservoirData.CellPosition[], values?: ReservoirData.LegacyCellValue[]): this;
    /**
     * This utility will check for duplicate IJK indices in the reservoirData.<br>
     * Each cell must have an identical IJK indice, this tool is made to verify this.<br>
     * Depending on the number of cells this can be VERY slow, so please use only when debugging.
     * @param ijk the IJK typed array.
     */
    static checkDuplicateIJK(ijk: Int16Array): void;
    /**
     * Returns the number of cells in the data object.
     * @returns number of cells
     */
    getNumberOfCells(): number;
    /**
     * Returns the Cell Data from the given IJK index.
     * @returns the cell datas, or null if the cell is not found
     */
    getCellData(ijk: IJKIndex | number[]): ReservoirData.CellData | null;
    /**
     * Returns the ijk count for this reservoir data.
     */
    getIJKCount(): IJKIndex;
    /**
     * Returns the octree which stores reservoir data.<br>
     * Reservoir Octree store cells by cell index for memory efficiency.
     * @deprecated since 4.0, is meant to be internal/private.
     */
    getOctree(): Octree;
    /**
     * Compute the reservoir cells volume, and enable volume data in {@link @int/geotoolkit3d/data/reservoir/hexahedral/ReservoirData~ReservoirData#getCellData}() method.
     */
    computeCellsVolume(): void;
    /**
     * Returns the total volume of this reservoir.<br>
     * Computed by the sum of the volume of every cells, filters are ignored.<br>
     * The unit of the volume measurement is based on the unit used in cells coordinates, to user discretion.
     * (ex: if cells coordinates are in meters, then the volume will be in cubic meters. If feet, then cubic feet, and so on.)
     */
    getReservoirFullVolume(): number;
    /**
     * Dispose this reservoir data to allow for garbage collection.
     */
    dispose(): void;
}
export declare namespace ReservoirData {
    type Options = {
        /**
         * The structure holding the cells data (xyz coordinates, ijk indices, and optional values).<br>
         * This is the recommended format to provide cells data, as providing cells in typed array is
         * much more efficient from a memory/performance perspective than the legacy structure.
         */
        cellsdata: CellsDataArrays;
        /**
         * The legacy format for cells position.
         * @deprecated since 4.0, please use the parameter "cellsdata" instead.
         */
        cells?: CellPosition[];
        /**
         * The legacy format for cells values.
         * @deprecated since 4.0, please use the parameter "cellsdata" instead.
         */
        values?: LegacyCellValue[];
        /**
         * If true, precompute the cells volume. Can be computed later using {@link @int/geotoolkit3d/data/reservoir/hexahedral/ReservoirData~ReservoirData#computeCellsVolume}().<br>
         * Volume can then be obtained using {@link @int/geotoolkit3d/data/reservoir/hexahedral/ReservoirData~ReservoirData#getReservoirFullVolume}(),
         * or per cell through {@link @int/geotoolkit3d/data/reservoir/hexahedral/ReservoirData~ReservoirData#getCellData}(cellIndex).volume.
         */
        computecellsvolume?: boolean;
        /**
         * The value to be used when a cell has no value, default is -999.25.
         */
        nullvalue?: number;
    };
    type ReservoirMetaData = AbstractReservoirData.MetaData & {
        /**
         * The number of I, J and K layers this reservoir possess.
         */
        numijk: IJKIndex;
        /**
         * The minimum cell property value currently stored in this reservoir data.
         */
        minvalue: number;
        /**
         * The maximum cell property value currently stored in this reservoir data.
         */
        maxvalue: number;
        /**
         * The minimum I index of this reservoir.
         */
        mini: number;
        /**
         * The maximum I index of this reservoir.
         */
        maxi: number;
        /**
         * The minimum J index of this reservoir.
         */
        minj: number;
        /**
         * The maximum J index of this reservoir.
         */
        maxj: number;
        /**
         * The minimum K index of this reservoir.
         */
        mink: number;
        /**
         * The maximum K index of this reservoir.
         */
        maxk: number;
        /**
         * The value to be used when a cell has no value, default is -999.25.
         */
        nullvalue: number;
    };
    /**
     * This object contains the cell geometric values.
     */
    type CellPosition = {
        /**
         * The ijk index of the cell.
         */
        ijk: number[];
        /**
         * The x values of the 8 cell corners.
         */
        x: number[];
        /**
         * The y values of the 8 cell corners.
         */
        y: number[];
        /**
         * The z values of the 8 cell corners.
         */
        z: number[];
    };
    /**
     * This object contains the cell property values.
     * @deprecated since 4.0
     */
    type LegacyCellValue = {
        /**
         * The ijk index of the cell.
         */
        ijk: number[];
        /**
         * The color value of cell.
         */
        value: number;
        /**
         * Additional data used for user defined custom filtering.
         */
        additionaldata?: Record<string, any>;
    };
    /**
     * The cell data format expected by the ReservoirData constructor.<br>
     * This reservoir data format require 8 vertices per cell.<br>
     * The data structure must be of the right type and size, based on the number of cell, to be build without issues.<br>
     * Values are optional.
     */
    type CellsDataArrays = {
        /**
         * The X coordinates of each cell vertices, stored in a typed array.<br>
         * There must be 8 contiguous X coordinates for each cell in the reservoir.
         */
        x: Float32Array;
        /**
         * The Y coordinates of each cell vertices, stored in a typed array.<br>
         * There must be 8 contiguous Y coordinates for each cell in the reservoir.
         */
        y: Float32Array;
        /**
         * The Z coordinates of each cell vertices, stored in a typed array.<br>
         * There must be 8 contiguous Z coordinates for each cell in the reservoir.
         */
        z: Float32Array;
        /**
         * The IJK indices of each cell, stored in a typed array.<br>
         * There must be 3 contiguous values (i, j and k) for each cell in the reservoir.
         */
        ijk: Int16Array;
        /**
         * The value of each cell, stored in a typed array.<br>
         * This array is optional and can be added later through the ReservoirGrid.<br>
         * If defined, there must be one value for each cell in the reservoir, even if the cell has no value (see nullvalue).
         */
        values?: Float32Array;
        /**
         * Additional cell properties, which can be used together with user-defined Reservoir filter.<br>
         * Each additional property consist of a named field containing an Arraylike object (Javascript array, TypedArray, etc).<br>
         * Each of these array should have one value for each cell, in the correct order.<br>
         * We suggest using TypedArrays such as (but not limited to) Float32Array when using very large reservoirs, to reduce the memory footprint.
         */
        additionalcelldata?: Record<string, any[] | TypedArray>;
    };
    /**
     * The structure for setting cells values.<br>
     * Must at least contain either values or additional datas.
     */
    type CellsValues = {
        /**
         * The values of each cell to update, in a typed array.<br>
         * Must include either:<ul>
         * <li>All values of each cells in the same order the cells were created ("ijk" must not be specified).</li>
         * <li>Only the necessary values to update ("ijk" field is required)</li></ul>
         */
        values?: Float32Array;
        /**
         * The IJK indices of the cells to update the values of.<br>
         * Contains the indices in a contiguous typed array in this fashion: [i1, j1, k1, i2, j2, k2,...]<br>
         * Only necessary if the "values" field or "additionalcelldata" is not in the same order the cells were created originally, or if only a subset of cells are updated.
         */
        ijk?: Int16Array;
        /**
         * additional data used for user defined custom filtering.<br>
         * Each cell has its own additionaldata object.<br>
         * Same principle as values, if IJKs are not provided, additionaldata array is expected to match the size and order of existing cells.
         * @deprecated since 4.0, please use additionalcelldata instead, and refer to the new filter function IJKValueFilter.CellFilter
         */
        additionaldata?: Record<string, any>[];
        /**
         * Additional cell properties, which can be used together with user-defined Reservoir filter.<br>
         * Each additional property consist of a named field containing an Arraylike object (Javascript array, TypedArray, etc).<br>
         * Same principle as values, if IJKs are not provided, additionaldata array is expected to match the size and order of existing cells.<br>
         * We suggest using TypedArrays such as Float32Array or even Float16Array when using very large reservoirs, to reduce the memory footprint.
         */
        additionalcelldata?: Record<string, any[] | TypedArray>;
    };
    /**
     * The object holding the cell data, or null if the cell is not found.
     */
    type CellData = CellPosition & {
        /**
         * The ijk index which was given as parameter to {@link @int/geotoolkit3d/data/reservoir/hexahedral/ReservoirData~ReservoirData#getCellData}().
         */
        index: IJKIndex | number[];
        /**
         * The volume of the cell, based on the cell xyz coordinates, if the volume has been calculated.
         * (Will be undefined if the Reservoir volume has not been computed yet! See {@link @int/geotoolkit3d/data/reservoir/hexahedral/ReservoirData~ReservoirData#computeCellsVolume}()).<br>
         * The unit of the volume measurement is based on the unit used in cells coordinates, to user discretion.
         * (ex: if cells coordinates are in meters, then the volume will be in cubic meters. If feet, then cubic feet, and so on.)
         */
        volume?: number;
        /**
         * The [minx, miny, minz, maxx, maxy, maxz] boundaries of this cell. These boundaries will be in Reservoir local coordinates.
         */
        bound: number[];
        /**
         * The ijk index of the cell.
         */
        ijk: number[];
        /**
         * The value of the cell.
         */
        value: number;
        /**
         * @deprecated in 4.0, backward compatibility.
         * Please use "additionalcelldata" instead.
         */
        additionalData?: Record<string, any>;
        /**
         * Additional cell data(s) defined by the user, for custom filtering.
         */
        additionalcelldata?: Record<string, any>;
    };
}
