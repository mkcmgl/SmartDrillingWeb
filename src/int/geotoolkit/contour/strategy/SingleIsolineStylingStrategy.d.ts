import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { IsolineStylingStrategy } from '@int/geotoolkit/contour/strategy/IsolineStylingStrategy';
export declare class SingleIsolineStylingStrategy implements IsolineStylingStrategy {
    /**
     * @param [singleIsolineLevel] level index for single isoline
     * @param [singleIsolineStyle] linestyle for single line
     * @param [commonIsolineStyle] linestyle for common lines
     */
    constructor(singleIsolineLevel?: SingleIsolineStylingStrategy.Options | number, singleIsolineStyle?: LineStyle, commonIsolineStyle?: LineStyle);
    /**
     * Gets style for isoline
     * @param level level
     */
    getIsolineStyle(level: number): LineStyle;
    /**
     * Returns if isoline of specified level should be drawn
     * @param {number} level level
     */
    getIsolineVisible(): boolean;
    /**
     * Returns single isoline level value
     */
    getSingleIsolineLevel(): number;
    /**
     * Gets linestyle for single line
     */
    getSingleIsolineStyle(): LineStyle;
    /**
     * Sets linestyle for single line
     * @param style style
     */
    setSingleIsoLineStyle(style: LineStyle): this;
    /**
     * Gets linestyle for common line
     */
    getCommonIsolineStyle(): LineStyle;
    /**
     * Sets linestyle for common line
     * @param style style
     */
    setCommonIsoLineStyle(style: LineStyle): this;
    /**
     * Gets strategy properties
     * @returns strategy properties
     */
    getProperties(): SingleIsolineStylingStrategy.Options;
    /**
     * Sets strategy properties
     * @param [props] An object containing the properties to set
     * @returns this
     */
    setProperties(props?: SingleIsolineStylingStrategy.Options): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace SingleIsolineStylingStrategy {
    /**
     * level index for single isoline
     */
    type Options = {
        /**
         * linestyle for single line
         */
        singleisolinestyle?: LineStyle;
        /**
         * linestyle for common lines
         */
        commonisolinestyle?: LineStyle;
        /**
         * level index for single isoline
         */
        singleisolinelevel?: number;
    };
}
