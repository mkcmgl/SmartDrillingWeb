/**
 * @module geotoolkit/svg/SVGParser
 */
import type { EmptyRecord } from '@int/geotoolkit/base';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Group } from '@int/geotoolkit/scene/Group';
/**
 * A class that parses svg documents into carnac shapes
 */
export declare class SVGParser {
    /**
     * Create SVGParser
     * @param [xmlDocument] Input SVG document to parse
     * @param [dpi] Screen resolution
     */
    constructor(xmlDocument?: SVGParser.XmlDocument, dpi?: number);
    /**
     * Returns pattern scalability flag
     */
    scalablePatterns(): boolean;
    /**
     * Sets pattern scalability flag
     * @param scale Pattern scalability flag
     */
    setScalablePatterns(scale: boolean): this;
    /**
     * Parses the given XML document into given group
     *
     * @param shapesGroup A group to fill with parsed elements
     * @param [doc] The document to parse
     */
    parse(shapesGroup: Group, doc?: Document | string): SVGParser.ParseResult | null;
    /**
     * Returns information stored in svg tag of the document
     * @param [doc] The document to parse
     * @returns Object with meta information from the svg tag
     */
    getSvgMetaInfo(doc?: Document | string): SVGParser.MetaInfo | EmptyRecord;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace SVGParser {
    /**
     * Input SVG document to parse
     */
    type XmlDocument = string | {
        /**
         * Input SVG document to parse
         */
        xmldocument?: string;
        /**
         * Screen resolution
         */
        dpi?: number;
    };
    type ParseResult = {
        /**
         * Bounding box of the root group containing all the parsed elements
         */
        bounds: Rect | null;
        /**
         * Viewbox of the svg file
         */
        viewbox: Rect | null;
    };
    /**
     * Object with meta information from the svg tag
     */
    type MetaInfo = {
        /**
         * Overflow property of svg
         */
        overflow: string;
        /**
         * Parsed viewBox property
         */
        viewbox: Rect;
        /**
         * Numeric height in device
         */
        height: number;
        /**
         * Numeric width in device
         */
        width: number;
    };
}
