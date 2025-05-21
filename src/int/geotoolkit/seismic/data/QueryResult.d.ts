import type { Trace } from '@int/geotoolkit/seismic/data/Trace';
import type { SeismicData } from '@int/geotoolkit/seismic/data/SeismicData';
import type { TraceSection } from '@int/geotoolkit/seismic/data/TraceSection';
/**
 * Defines a result which is returned by query
 */
export declare abstract class QueryResult {
    /**
     * Iterate each section is result set
     * @param callback callback function with two parameters section id and section
     */
    abstract foreach(callback: (sectionId: number, traceSection: TraceSection) => void): void;
    /**
     * Returns initial query object
     */
    abstract getQuery(): SeismicData.SelectQuery;
    /**
     * Return trace by index
     * @param id trace id
     */
    abstract getTrace(id: number): Trace | null;
}
