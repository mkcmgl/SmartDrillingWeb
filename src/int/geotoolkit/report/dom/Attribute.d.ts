import type { Node } from '@int/geotoolkit/report/dom/Node';
/**
 * @module geotoolkit/report/dom/Attribute
 */
/**
 * The Attr interface represents one of a DOM element's attributes as an object. In most DOM methods, you will directly retrieve the attribute as a string.<br>
 */
export declare class Attribute {
    /**
     * @param [options] The options
     */
    constructor(options?: Attribute.Options | string);
    /**
     * The attribute's name.
     * @name module:geotoolkit/report/dom/Attribute~Attribute#name
     * @readonly
     */
    get name(): string;
    /**
     * The element holding the attribute.
     * @name module:geotoolkit/report/dom/Attribute~Attribute#ownerElement
     * @readonly
     */
    get ownerElement(): Node;
    /**
     * The attribute's value.
     * @name module:geotoolkit/report/dom/Attribute~Attribute#value
     */
    get value(): string;
    /**
     * The attribute's value.
     * @name module:geotoolkit/report/dom/Attribute~Attribute#value
     */
    set value(v: string);
    /**
     * The attribute's value.
     * @name module:geotoolkit/report/dom/Attribute~Attribute#nodeValue
     */
    get nodeValue(): string;
    /**
     * This property always returns true. Originally, it returned true if the attribute was explicitly specified in the source code or by a script, and false if its value came from the default one defined in the document's DTD.
     * @name module:geotoolkit/report/dom/Attribute~Attribute#specified
     * @readonly
     */
    get specified(): boolean;
    /**
     * A string representing the namespace URI of the attribute, or null if there is no namespace.
     * @name module:geotoolkit/report/dom/Attribute~Attribute#namespaceURI
     * @readonly
     */
    get namespaceURI(): string;
    /**
     * A string representing the local part of the qualified name of the attribute.
     * @name module:geotoolkit/report/dom/Attribute~Attribute#localName
     * @readonly
     */
    get localName(): string;
    /**
     * A string representing the namespace prefix of the attribute, or null if no prefix is specified.
     * @name module:geotoolkit/report/dom/Attribute~Attribute#prefix
     * @readonly
     */
    get prefix(): string;
}
export declare namespace Attribute {
    /**
     * The options
     */
    type Options = {
        /**
         * name of the attribute.
         */
        name?: string;
        /**
         * attribute value.
         */
        value?: string;
        /**
         * attribute namespaceURI.
         */
        namespaceURI?: string;
        /**
         * attribute localName.
         */
        localName?: string;
        /**
         * attribute prefix.
         */
        prefix?: string;
    };
}
