import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import type { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
/**
 * Label data structure to use by a LabelingStrategy.
 */
export declare class LabelData {
    constructor(params?: LabelData.Options);
    /**
     * @deprecated since 4.0. Use getProperties instead.
     * @name module:geotoolkit/schematics/labeling/LabelData~LabelData#node
     */
    get node(): ComponentNode;
    /**
     * @deprecated since 4.0. Use getProperties instead.
     * @name module:geotoolkit/schematics/labeling/LabelData~LabelData#node
     */
    set node(value: ComponentNode);
    /**
     * @deprecated since 4.0. Use getProperties instead.
     * @name module:geotoolkit/schematics/labeling/LabelData~LabelData#nodeInfo
     */
    get nodeInfo(): string;
    /**
     * @deprecated since 4.0. Use getProperties instead.
     * @name module:geotoolkit/schematics/labeling/LabelData~LabelData#nodeInfo
     */
    set nodeInfo(value: string);
    /**
     * @deprecated since 4.0. Use getProperties instead.
     * @name module:geotoolkit/schematics/labeling/LabelData~LabelData#anchorType
     */
    get anchorType(): AnchorType;
    /**
     * @deprecated since 4.0. Use getProperties instead.
     * @name module:geotoolkit/schematics/labeling/LabelData~LabelData#anchorType
     */
    set anchorType(value: AnchorType);
    /**
     * @deprecated since 4.0. Use getProperties instead.
     * @name module:geotoolkit/schematics/labeling/LabelData~LabelData#xLabel
     */
    get xLabel(): number;
    /**
     * @deprecated since 4.0. Use getProperties instead.
     * @name module:geotoolkit/schematics/labeling/LabelData~LabelData#xLabel
     */
    set xLabel(value: number);
    /**
     * @deprecated since 4.0. Use getProperties instead.
     * @name module:geotoolkit/schematics/labeling/LabelData~LabelData#yLabel
     */
    get yLabel(): number;
    /**
     * @deprecated since 4.0. Use getProperties instead.
     * @name module:geotoolkit/schematics/labeling/LabelData~LabelData#yLabel
     */
    set yLabel(value: number);
    /**
     * @deprecated since 4.0. Use getProperties instead.
     * @name module:geotoolkit/schematics/labeling/LabelData~LabelData#xConnector
     */
    get xConnector(): any[];
    /**
     * @deprecated since 4.0. Use getProperties instead.
     * @name module:geotoolkit/schematics/labeling/LabelData~LabelData#xConnector
     */
    set xConnector(value: any[]);
    /**
     * @deprecated since 4.0. Use getProperties instead.
     * @name module:geotoolkit/schematics/labeling/LabelData~LabelData#yConnector
     */
    get yConnector(): any[];
    /**
     * @deprecated since 4.0. Use getProperties instead.
     * @name module:geotoolkit/schematics/labeling/LabelData~LabelData#yConnector
     */
    set yConnector(value: any[]);
    /**
     * @returns options to initialize the strategy
     */
    getProperties(): LabelData.OptionsOut;
    /**
     * @param properties options to initialize the strategy
     */
    setProperties(properties?: LabelData.Options): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace LabelData {
    /**
     * options to initialize the strategy
     */
    type Options = {
        /**
         * component node to label
         */
        node?: ComponentNode;
        /**
         * the node information
         */
        nodeinfo?: string;
        /**
         * anchor type
         */
        anchortype?: AnchorType;
        /**
         * label x-position
         */
        xlabel?: number;
        /**
         * label y-position
         */
        ylabel?: number;
        /**
         * connector x-position
         */
        xconnector?: number[];
        /**
         * connector y-position
         */
        yconnector?: number[];
    };
    /**
     * options to initialize the strategy
     */
    type OptionsOut = Required<Options>;
}
