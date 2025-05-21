/**
 * The FieldDesc is a base class for seismic trace header's field descriptors. It is common to all field descriptors.
 * A header field descriptor describes the name and identifier of a given header field.
 */
export declare class FieldDesc {
    /**
     * Creates field description
     * @param [options] options to specify fieldId, name and title
     */
    constructor(options?: FieldDesc.Options);
    /**
     * Creates field description
     * @param fieldId identifier of the field
     * @param name name of the field
     * @param [title] title of the field
     */
    constructor(fieldId: string | number, name: string, title?: string);
    /**
     * Returns name
     */
    getName(): string;
    /**
     * Returns identifier (type)
     */
    getIdentifier(): string | number;
    /**
     * Returns title
     */
    getTitle(): string;
    /**
     * Set title
     *
     * @param title title
     * @returns this
     */
    setTitle(title: string): this;
    /**
     * Returns clone of the field descriptor
     * @returns clone
     */
    clone(): FieldDesc;
    /**
     * Returns clone of the field descriptor
     * @deprecated  since 4.0 Use clone instead
     * @returns clone
     */
    getClone(): FieldDesc;
    /**
     * Returns string representation
     */
    toString(): string;
    /**
     * Returns true if headers are identical
     * @param header header
     */
    equalsTo(header: FieldDesc | {
        identifier?: string;
        name?: string;
    }): boolean;
    /**
     * Gets the properties
     */
    getProperties(): FieldDesc.OptionsOut;
    /**
     * Sets the properties
     * @param [props] properties
     * @returns this
     */
    setProperties(props?: FieldDesc.Options): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace FieldDesc {
    /**
     * identifier (type)
     */
    type Options = {
        /**
         * identifier (type)
         */
        fieldid?: string | number;
        /**
         * name of the field
         */
        name?: string;
        /**
         * title of the field
         */
        title?: string;
    };
    type OptionsOut = {
        /**
         * identifier (type)
         */
        fieldid: string | number;
        /**
         * name of the field
         */
        name: string;
        /**
         * title of the field
         */
        title: string;
    };
}
