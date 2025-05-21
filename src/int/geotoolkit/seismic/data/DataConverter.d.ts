/**
 * @module geotoolkit/seismic/data/DataConverter
 */
import type { SampleDataFormatType } from '@int/geotoolkit/seismic/data/SampleDataFormatType';
import type { Statistics } from '@int/geotoolkit/seismic/data/Statistics';
/**
 * Define abstract converter of binary data to array of numbers
 */
export declare abstract class DataConverter {
    /**
     * Created converter
     * @param [dataType] data type
     * @param [nullValue] null value
     */
    protected constructor(dataType?: SampleDataFormatType, nullValue?: number);
    /**
     * Converts binary data and return statistics
     * @param uint8binary binary data
     * @param offset offset
     * @param target target array
     * @param samplesCount samples count
     */
    abstract convert(uint8binary: Uint8Array, offset: number, target: number[], samplesCount: number): Statistics;
}
