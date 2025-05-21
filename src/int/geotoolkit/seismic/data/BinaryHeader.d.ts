/**
 * @module geotoolkit/seismic/data/BinaryHeader
 */
import { DataHeader } from '@int/geotoolkit/seismic/data/DataHeader';
import { ByteOrder } from '@int/geotoolkit/seismic/data/ByteOrder';
import type { BinaryField } from '@int/geotoolkit/seismic/data/BinaryField';
/**
 * Define Binary Header.
 */
export declare class BinaryHeader extends DataHeader {
    /**
     * Add field to fields array
     *
     * @param field Binary field inside header
     */
    addField(field: BinaryField): void;
    /**
     * Set byte order.
     * True if order === "BIG_ENDIAN"
     *
     * @param order the byte order
     * @returns this
     */
    setByteOrder(order: ByteOrder | string): this;
    /**
     * Returns byte order.
     * "BIG_ENDIAN" or LITTLE_ENDIAN"
     */
    getByteOrder(): string | ByteOrder;
    /**
     * Returns true if fieldType exists in fields array
     *
     * @param fieldType type of the field in the array
     */
    containsField(fieldType: string | number): boolean;
    /**
     * Returns index of the field by fieldId or -1 if it is not exist
     *
     * @param fieldId field id that gives information about the field
     */
    getIndexById(fieldId: string | number): number;
    /**
     * Returns true if fieldName exists in fields array
     *
     * @param fieldName name that gives information about the field
     */
    containsFieldByName(fieldName: string): boolean;
    /**
     * Returns field for corresponding index
     *
     * @param index index for the array of field data
     */
    getFieldByIndex(index: number): BinaryField;
    /**
     * Returns field with correct fieldType
     *
     * @param fieldType type of the binary field
     */
    getField(fieldType: string): BinaryField | null;
    /**
     * Returns field with correct fieldName
     *
     * @param fieldName name that gives information about the field
     */
    getFieldByName(fieldName: string): BinaryField | null;
    /**
     * Returns an array of the fields
     */
    getFields(): BinaryField[];
    /**
     * Returns an array of the parsed fields. Each element in the parsed array has an index, which equals
     * to index of the related field in the array of fields
     *
     * @param binary binary data
     */
    parse(binary: ArrayBuffer): number[];
    /**
     * Parse a specific header
     * @param uint8binary array of 8-bit unsigned integers.
     * @param field the BinaryField
     * @throws {Error} if field is null, uint8binary is null or if it not supported data format
     * @returns The header value
     */
    parseField(uint8binary: Uint8Array, field: BinaryField): number;
    getFieldByIdentifier(identifier: string | number): BinaryField | null;
    /**
     * Returns field value for a specific field id
     *
     * @param data data
     * @param headerFieldType unique name of the header field.
     */
    getFieldValue(data: number[], headerFieldId: string | number): number;
}
