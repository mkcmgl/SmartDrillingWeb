/**
 * @module geotoolkit/seismic/data/DataConverterFactory
 */
import { SampleDataFormatType } from '@int/geotoolkit/seismic/data/SampleDataFormatType';
import type { DataConverter } from '@int/geotoolkit/seismic/data/DataConverter';
/**
 * Define factory of converters of sample formats
 */
export declare class DataConverterFactory {
    /**
     * Create instance of data converter
     * @param dataType data type
     * @param [nullValue] null value
     * @returns converter
     */
    create(dataType: SampleDataFormatType, nullValue?: number): DataConverter | null;
    /**
     * Return factory instance
     */
    static getInstance(): DataConverterFactory;
}
