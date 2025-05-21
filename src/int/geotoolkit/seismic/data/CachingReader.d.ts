/**
 * @module geotoolkit/seismic/data/CachingReader
 */
import { SeismicReader } from '@int/geotoolkit/seismic/data/SeismicReader';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { FieldDesc } from '@int/geotoolkit/seismic/data/FieldDesc';
import type { SeismicMetaData } from '@int/geotoolkit/seismic/data/SeismicMetaData';
import type { SeismicData } from '@int/geotoolkit/seismic/data/SeismicData';
import type { Statistics } from '@int/geotoolkit/seismic/data/Statistics';
/**
 * A seismic reader that keeps all traces in memory.
 * This Reader is the Proxy for any SeismicReader.
 * It saves traces in inner cache at the first request and gives them from cache at the following requests.
 */
export declare class CachingReader<T extends SeismicReader = SeismicReader> extends SeismicReader {
    /**
     * Created reader
     * @param seismicReader instance of SeismicReader that will be proxied
     * @param memoryLimit Memory limit in Megabytes
     */
    constructor(seismicReader: T, memoryLimit: number);
    /**
     * Sets memory limit in Megabytes. Attention! Removes all existing traces from cache.
     * @param memoryLimit Memory limit in Megabytes
     * @returns this
     */
    setCacheSize(memoryLimit: number): this;
    /** */
    select(query: SeismicData.SelectQuery, callback: SeismicData.SelectCallback): Promise<unknown>;
    /**
     * proxy to original reader
     */
    getOptions(): ReturnType<T['getOptions']>;
    /**
     * proxy to original reader
     */
    getNullValue(): number;
    /**
     * proxy to original reader
     */
    getModelLimits(): Rect;
    /**
     * proxy to original reader
     */
    loadMetaData(callback: (reader: SeismicReader) => void): void;
    /**
     * proxy to original reader
     */
    getNumberOfTraces(): number;
    /**
     * proxy to original reader
     */
    getNumberOfSamples(): number;
    /**
     * proxy to original reader
     */
    getSampleRate(): number;
    /**
     * proxy to original reader
     */
    getTraceHeaderFields(): FieldDesc[];
    /**
     * proxy to original reader
     * @returns min, max, average, rms
     */
    getStatistics(): Statistics;
    /**
     * proxy to original reader
     */
    getMetaData(): SeismicMetaData;
}
