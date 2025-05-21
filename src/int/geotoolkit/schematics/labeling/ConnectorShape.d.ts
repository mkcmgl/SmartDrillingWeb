import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { LabelData } from '@int/geotoolkit/schematics/labeling/LabelData';
import type { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Abstract label connector shape representation
 */
export declare abstract class ConnectorShape {
    protected constructor(options?: ConnectorShape.Options);
    /**
     * Return visibility of the connector
     * @returns {boolean} true if connector is visible
     */
    getVisible(): boolean;
    /**
     * Sets visibility of the node.
     * @param {boolean} value visibility flag
     * @returns this
     */
    setVisible(value: boolean): this;
    /**
     * Gets line style
     *
     * @returns current line style
     */
    getLineStyle(): LineStyle;
    /**
     * Sets line style
     *
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setLineStyle(lineStyle: LineStyle | string | RgbaColor | LineStyle.Options | null, merge?: boolean): this;
    /**
     * Gets label data
     */
    getLabelData(): LabelData;
    /**
     * Sets label data
     *
     * @param labelData label Data
     * @returns this
     */
    setLabelData(labelData: LabelData): this;
    /**
     * Sets all the properties pertaining to this object
     *
     * @param options An object containing the properties to set
     * @returns this
     */
    setProperties(options?: ConnectorShape.Options): this;
    /**
     * Returns all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): ConnectorShape.OptionsOut;
    /**
     * Renders itself
     * @param context Rendering Context
     */
    abstract render(context: RenderingContext): void;
    getClassName(): string;
    static getClassName(): string;
}
export declare namespace ConnectorShape {
    /**
     * An object containing the properties to set
     */
    type Options = {
        visible?: boolean;
        labeldata?: LabelData;
        linestyle?: LineStyle | string | RgbaColor | LineStyle.Options | null;
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = {
        visible: boolean;
        labeldata?: LabelData;
        linestyle?: LineStyle;
    };
}
