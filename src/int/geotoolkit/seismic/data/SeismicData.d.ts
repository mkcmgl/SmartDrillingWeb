/**
 * @module geotoolkit/seismic/data/SeismicData
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import type { SeismicMetaData } from '@int/geotoolkit/seismic/data/SeismicMetaData';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { QueryResult } from '@int/geotoolkit/seismic/data/QueryResult';
import type { FetchState } from '@int/geotoolkit/seismic/data/FetchState';
/**
 * IndexType enumerator, describes the index type of the underlying seismic
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * Event type fired when a seismic data is modified and requires an update cycle to be done
     */
    Invalidate = "Invalidate"
}
/**
 * Defines an interface for seismic data source/source of traces.<br>
 * It implements methods like getMetaData() which returns {@link @int/geotoolkit/seismic/data/SeismicMetaData~SeismicMetaData} and <br>
 * Select() function to select and load relevant seismic trace sections .
 */
export declare abstract class SeismicData extends EventDispatcher {
    protected constructor();
    on<E extends keyof SeismicData.EventMap>(type: E, callback: (eventType: E, sender: this, args: SeismicData.EventMap[E]) => void): this;
    off<E extends keyof SeismicData.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: SeismicData.EventMap[E]) => void): this;
    notify<E extends keyof SeismicData.EventMap>(type: E, source: SeismicData, args?: SeismicData.EventMap[E]): this;
    /**
     * Return the value to indicate if data was changed
     */
    getTimeStamp(): number;
    /**
     * Update time stamp
     */
    protected updateTimeStamp(): void;
    /**
     * Returns seismic meta data information
     */
    abstract getMetaData(): SeismicMetaData;
    /**
     * Select seismic trace sections and call "callback" method then section is loaded.
     *
     * @param query a query in JSON format. Should contain parameters relevant to the trace, such as "from", "to", "headers", and "samples"
     * @param callback callback to be called then section is loaded. This method has {@link @int/geotoolkit/seismic/data/QueryResult~QueryResult} as parameter
     * @param [validationCallback] Callback function which is executed before data requested.
     */
    abstract select(query: SeismicData.SelectQuery, callback: SeismicData.SelectCallback, validationCallback?: SeismicData.ValidationCallback): void;
    /**
     * Invalidate data and notify that data is changed
     * @param [rect] optional area of tracers and samples to invalidate. It is not
     * supported now
     */
    invalidate(rect?: Rect): void;
}
export declare namespace SeismicData {
    /**
     * Define a seismic query description. Should contain parameters relevant to the trace, such as
     * "from", "to", "headers", and "samples". Some parameters like "traceOrder", "options" can
     * be used by specific implementations only.
     */
    type SelectQuery = {
        /**
         * result should have trace headers
         */
        headers?: boolean;
        /**
         * result should have trace samples
         */
        samples?: boolean;
        /**
         * specify a start trace index from 0 to getTraceNumbers()-1
         */
        from?: number;
        /**
         * specify end trace index from 0 to getTraceNumbers()-1
         */
        to?: number;
        /**
         * optional indices of traces from 0 to getTraceNumbers()-1
         */
        traceIndexes?: number[];
        /**
         * query type. It can be 'seismicPath' or null. If it is null then query is done by keys overwise by path.
         */
        queryType?: string;
        /**
         * additional options to send to server
         */
        options?: any;
        /**
         * define type of the query. A traceOrder of 1 indicates a XSection query. The Time key is
         * ignored for XSection queries. A trace order of 2 indicates a Map query. The Time key is required for Map queries, with identical min and max values (a time slice).
         */
        traceOrder?: number;
    };
    /**
     * Callback of the method select
     */
    type SelectCallback = (fetchResult: QueryResult) => void;
    /**
     * Callback function which is executed before data requested.
     */
    type ValidationCallback = (fetchState: FetchState) => boolean;
    type EventMap = EventDispatcher.EventMap & {
        [Events.Invalidate]: Rect | null;
    };
}
