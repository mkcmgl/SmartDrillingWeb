import type { FieldDesc } from '@int/geotoolkit/seismic/data/FieldDesc';
import type { HeaderType } from '@int/geotoolkit/seismic/data/HeaderType';
/**
 * @module geotoolkit/seismic/data/DataHeader
 */
/**
 * DataHeader is an 'interface/abstract' class responsible for holding the seismic trace header. Inheriting classes would provide the actual implementation.
 * Headers are organized as set of 'fields' and 'values'.
 */
export declare class DataHeader {
    /**
     * Creates data header
     * @param size number of bytes
     * @param headerType type of traceheader
     */
    constructor(size: number, headerType: HeaderType);
    /**
     * Return size
     */
    getSize(): number;
    /**
     * Return identifier (type)
     */
    getHeaderType(): HeaderType;
    /**
     * Return trace header value by identifier
     *
     * @param binary binary data
     * @returns binary
     */
    parse(binary: ArrayBuffer): any;
    /**
     * Returns true if contains field type
     *
     * @param fieldType type of the field in the array.
     */
    containsField(fieldType: string): boolean;
    /**
     * Returns true if array contains field type
     *
     * @param data which contains the parse data
     * @param headerFieldId unique id of the header field
     * @returns null
     */
    getFieldValue(data: any, headerFieldId: string | number): number | null;
    /**
     * Get a field by its identifier
     *
     * @param identifier unique header number
     */
    getFieldByIdentifier(identifier: string): FieldDesc | null;
}
