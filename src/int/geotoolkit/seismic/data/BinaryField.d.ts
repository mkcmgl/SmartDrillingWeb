import { FieldDesc } from '@int/geotoolkit/seismic/data/FieldDesc';
import type { DataFormatType } from '@int/geotoolkit/seismic/data/DataFormatType';
/**
 * Define binary header
 */
export declare class BinaryField extends FieldDesc {
    /**
     * Creates a new BinaryField
     * @param [options] options
     */
    constructor(options?: BinaryField.Options);
    /**
     * Creates a new BinaryField
     * @param offset bytes offset in the header
     * @param dataType type of the data
     * @param fieldId unique identifier of the field
     * @param name name of the field
     */
    constructor(offset: string | number, dataType: DataFormatType, fieldId: string, name: string);
    /**
     * Sets properties
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: BinaryField.Options): this;
    /**
     * Returns properties
     * @returns properties
     */
    getProperties(): BinaryField.OptionsOut;
    /**
     * Returns offset
     */
    getOffset(): number;
    /**
     * Returns data type
     */
    getDataType(): DataFormatType;
}
export declare namespace BinaryField {
    /**
     * options or offset
     */
    type Options = FieldDesc.Options & {
        /**
         * offset of the header
         */
        offset?: number;
        /**
         * type of the data
         */
        datatype?: DataFormatType;
    };
    /**
     * properties
     */
    type OptionsOut = FieldDesc.OptionsOut & {
        /**
         * offset of the header
         */
        offset?: number;
        /**
         * type of the data
         */
        datatype?: DataFormatType;
    };
}
