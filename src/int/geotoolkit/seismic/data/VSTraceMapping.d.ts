/**
 * @module geotoolkit/seismic/data/VSTraceMapping
 */
import { TraceMapping } from '@int/geotoolkit/seismic/data/TraceMapping';
import { NumericalDataSeries } from '@int/geotoolkit/data/NumericalDataSeries';
import { Range } from '@int/geotoolkit/util/Range';
import type { SeismicPipeline } from '@int/geotoolkit/seismic/pipeline/SeismicPipeline';
import type { NumericalDataSeriesView } from '@int/geotoolkit/data/NumericalDataSeriesView';
/**
 * Defines variable space trace mapping
 */
export declare class VSTraceMapping extends TraceMapping {
    /**
     * Create variable trace mapping
     * @param pipeline pipeline
     * @param positions positions of traces in
     * the model space (depths)
     * @param [traceSpacing] model trace spacing
     * @param [traceRange] model trace range
     * @throws {Error} when positions is  not specified
     */
    constructor(pipeline: SeismicPipeline, positions: NumericalDataSeries | NumericalDataSeriesView | number[], traceSpacing?: number, traceRange?: Range);
    /**
     * Returns model trace spacing
     * @returns model trace spacing
     */
    getModelTraceSpacing(): number;
    getTraceIndex(location: number): number;
    getTraceLocation(index: number): number;
    getTraces(from: number, to: number): number[];
    getTraceLocationRange(): Range;
    getNumberOfDestinationTraces(): number;
}
