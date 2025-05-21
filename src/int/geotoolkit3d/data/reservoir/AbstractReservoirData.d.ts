import type { Box3 } from 'three';
/**
 * Parent class for reservoir data
 */
export declare abstract class AbstractReservoirData {
    /**
     * Returns the metadata of the reservoir
     */
    abstract getMetaData(): AbstractReservoirData.MetaData;
    /**
     * Returns the total number of cells
     * @returns cellcount
     */
    abstract getNumberOfCells(): number;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace AbstractReservoirData {
    type MetaData = {
        boundingbox: Box3;
        cellcount: number;
    };
}
