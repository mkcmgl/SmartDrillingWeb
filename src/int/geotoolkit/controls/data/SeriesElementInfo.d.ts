import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * @module geotoolkit/controls/data/SeriesElementInfo
 */
/**
 * Define series element information
 */
export declare class SeriesElementInfo {
    constructor(seriesId: number, sampleId: number, owner?: Node);
    /**
     * Gets series ID
     */
    getSeriesId(): number;
    /**
     * Gets series ID
     * @deprecated since 4.0. Use SeriesElementInfo#getSeriesId instead.
     */
    getSerieId(): number;
    /**
     * Gets sample ID
     */
    getSampleId(): number;
    /**
     * Return owner visual if it is specified
     * @returns owner visual
     */
    getOwner(): Node;
}
