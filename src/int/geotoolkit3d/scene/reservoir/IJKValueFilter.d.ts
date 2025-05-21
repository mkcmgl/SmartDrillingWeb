/**
 * The options type used to define Reservoir filtering parameters.
 */
export declare type IJKValueFilter = {
    /**
     * The attribute nullvalue.<br>If some values are provided for coloring and if one of those values is equal to this nullvalue. <br>Then the cell won't be rendered.
     */
    nullvalue?: number;
    /**
     * If set, cells below this value will not be rendered.
     */
    minvalue?: number;
    /**
     * If set, cells above this value will not be rendered.
     */
    maxvalue?: number;
    /**
     * If set, cells below this I index will not be rendered.
     */
    mini?: number;
    /**
     * If set, cells above this I index will not be rendered.
     */
    maxi?: number;
    /**
     * If set, cells below this J index will not be rendered.
     */
    minj?: number;
    /**
     * If set, cells above this J index will not be rendered.
     */
    maxj?: number;
    /**
     * If set, cells below this K index will not be rendered.
     */
    mink?: number;
    /**
     * If set, cells above this K index will not be rendered.
     */
    maxk?: number;
    /**
     * set to true will turn to exclude mode for ijk filter (value filters are not affected).
     */
    excludemode?: boolean;
    /**
     * Custom Reservoir filter to be implemented by user. Can make use of additional data, a user-defined object that can be defined per-cell.
     * @deprecated since 4.0, please use cellfilter instead.
     */
    filter?: Filter | null;
    /**
     * Custom Reservoir filter to be implemented by user. Can make use of additional data, a user-defined value/data/object that can be defined per-cell.
     */
    cellfilter?: CellFilter | null;
};
/**
 * The Reservoir filter function, to be defined by the user.
 * Filter parameters include the i,j,k and active (visible) value of the cell, but can also include additional data defined by the user for each cell.
 * @deprecated since 4.0, please use the more memory friendly filter in IJKValueFilter.cellfilter
 */
export declare type Filter = (i: number, j: number, k: number, value: number, additionalData?: any) => boolean;
export declare type CellProperties = {
    /**
     * The cell indice, ie the position of the cell when it was fed in the ReservoirData constructor.
     */
    index: number;
    /**
     * The cell I position.
     */
    i: number;
    /**
     * The cell J position.
     */
    j: number;
    /**
     * The cell K position.
     */
    k: number;
    /**
     * The cell volume, if it was computed (volume is computed lazily, please see ReservoirGrid.OptionsType).
     * Undefined otherwise.
     */
    volume?: number;
    /**
     * The Cell 8 corners coordinates.
     */
    corners: [
        x: number,
        y: number,
        z: number
    ][];
    /**
     * The Cell currently displayed value.
     */
    activevalue: number;
    /**
     * The additional data attributed to each cell by the user.
     * Each additional data will be accessible under the property name given by the user.
     * Example: if the user provided a "time" property for each cell, the cell time property will be available at additionalcelldata.time
     */
    additionalcelldata: Record<string, any>;
};
/**
 * The Reservoir Cell filter function, to be defined by the user.
 * Filter parameters include all the cell properties.
 */
export declare type CellFilter = (cellProperties: CellProperties) => boolean;
