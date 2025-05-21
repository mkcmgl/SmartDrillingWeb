/**
 * @module geotoolkit/schematics/factory/SvgNodeFactory
 */
import { AbstractComponentNodeFactory } from '@int/geotoolkit/schematics/factory/AbstractComponentNodeFactory';
import { SvgDataProvider } from '@int/geotoolkit/svg/SvgDataProvider';
import { ExternalGeometryComponentNode } from '@int/geotoolkit/schematics/scene/ExternalGeometryComponentNode';
import { Rect } from '@int/geotoolkit/util/Rect';
import { SVGParser } from '@int/geotoolkit/svg/SVGParser';
import type { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import type { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
import type { ReusableComponentNode } from '@int/geotoolkit/schematics/scene/ReusableComponentNode';
/**
 * Implements a Node Factory for nodes defined by svg files
 */
export declare class SvgNodeFactory extends AbstractComponentNodeFactory {
    /**
     * @param parser Instance of SVG Parser
     * @param filePath Relative path to the SVG file
     * @param [dataProvider] Instance of SvgDataProvider
     * @param [asymmetry] asymmetry options
     */
    constructor(parser: SVGParser, filePath: string, dataProvider?: SvgDataProvider, asymmetry?: ExternalGeometryComponentNode.Asymmetry);
    /**
     * Creates a an svg component node and sends a request for the svg file.
     * Once file loaded, parses it with SVG parser and invalidates the node
     * @param data Data to create the component node
     */
    createComponentNode(data: WellBoreData.Element): ReusableComponentNode;
    /**
     * If the component node is created by SvgNodeFactory then the method returns
     * its inner_child_group's model limits. Those limits are essentially SVG's view box.
     * @param node component node to evaluate
     */
    static getSVGNodeViewBox(node: ComponentNode): Rect | null;
    /**
     * Sets the data provider
     * @param dp Data Provider instance
     * @throws {Error} If passed Data Provider is not inherited from {@link @int/geotoolkit/svg/SvgDataProvider~SvgDataProvider}
     */
    setDataProvider(dp: SvgDataProvider): this;
    getDataProvider(): SvgDataProvider;
    /**
     * Sets SVG Parser
     * @param p SVG Parser instance
     * @throws {Error} If passed Parser is not inherited from {@link @int/geotoolkit/svg/SVGParser~SVGParser}
     */
    setParser(p: SVGParser): this;
    getParser(): SVGParser;
}
