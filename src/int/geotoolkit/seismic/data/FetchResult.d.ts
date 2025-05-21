import type { TraceSection } from '@int/geotoolkit/seismic/data/TraceSection';
import type { Trace } from '@int/geotoolkit/seismic/data/Trace';
import { QueryResult } from '@int/geotoolkit/seismic/data/QueryResult';
import type { SeismicData } from '@int/geotoolkit/seismic/data/SeismicData';
/**
 * Defines fetch result. Contains all traces that was requested by user in any select query.
 */
export declare class FetchResult extends QueryResult {
    foreach(callback: (sectionId: number, traceSection: TraceSection) => void): void;
    /**
     * Gets size
     */
    getSize(): number;
    /**
     * Returns condition
     */
    getQuery(): SeismicData.SelectQuery;
    /**
     * Returns trace by id
     * @param traceId unique trace id
     */
    getTrace(traceId: number): Trace | null;
    /**
     * Returns valid state
     */
    isValid(): boolean;
}
