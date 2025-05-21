/**
 * @module geotoolkit/schematics/factory/FlippedSvgNodeFactory
 */
import { SvgNodeFactory } from '@int/geotoolkit/schematics/factory/SvgNodeFactory';
import { SvgDataProvider } from '@int/geotoolkit/svg/SvgDataProvider';
import type { SVGParser } from '@int/geotoolkit/svg/SVGParser';
/**
 * Implements a Flipped Node Factory for nodes defined by svg files
 */
export declare class FlippedSvgNodeFactory extends SvgNodeFactory {
    /**
     * @param parser Instance of SVG Parser
     * @param filePath Relative path to the SVG file
     * @param [dataProvider] Instance of SvgDataProvider
     * @param [isLeft] isLeft flag
     */
    constructor(parser: SVGParser, filePath: string, dataProvider?: SvgDataProvider, isLeft?: boolean);
}
