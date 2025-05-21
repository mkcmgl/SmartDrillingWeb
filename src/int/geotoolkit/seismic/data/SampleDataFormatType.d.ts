/**
 * @module geotoolkit/seismic/data/SampleDataFormatType
 */
/**
 * Data format type enum
 * @readonly
 * @enum
 */
export declare enum SampleDataFormatType {
    /**
     * Undefined
     */
    Undefined = "Undefined",
    /**
     * IBM Float
     */
    IbmFloat = "IbmFloat",
    /**
     * 32-bit Integer
     */
    Int32 = "Int32",
    /**
     * 16-bit Integer
     */
    Int16 = "Int16",
    /**
     * IEEE Float
     */
    IeeeFloat = "IeeeFloat",
    /**
     * 8-bit Integer
     */
    Int8 = "Int8"
}
export declare const getSampleDataFormatTypeFromNumber: (number: number) => SampleDataFormatType;
