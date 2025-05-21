/**
 * @module geotoolkit/svg/SvgPainter
 */
import { GeometryPainter } from '@int/geotoolkit/scene/shapes/painters/GeometryPainter';
import { Group } from '@int/geotoolkit/scene/Group';
import { INodeEnumerable } from '@int/geotoolkit/scene/INodeEnumerable';
/**
 * Parses and draws an svg file
 */
export declare class SvgPainter extends GeometryPainter implements INodeEnumerable {
    constructor(options?: {
        geometry?: Group | null;
        xml?: string;
    } | string);
    clone(): SvgPainter;
    /**
     * Return SVG
     * @returns xml string
     */
    getSvg(): string;
    /**
     * Set SVG value
     * @param xml XML String
     */
    setSvg(xml: string): this;
}
