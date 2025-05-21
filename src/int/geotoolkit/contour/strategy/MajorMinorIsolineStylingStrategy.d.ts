import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { IsolineStylingStrategy } from '@int/geotoolkit/contour/strategy/IsolineStylingStrategy';
/**
 * Major-minor isoline styling strategy
 */
export declare class MajorMinorIsolineStylingStrategy implements IsolineStylingStrategy {
    /**
     * @param [options] options
     */
    constructor(options?: MajorMinorIsolineStylingStrategy.Options);
    /**
     * Gets style for isoline
     * @param level level
     */
    getIsolineStyle(level: number): LineStyle | null;
    /**
     * Returns if isoline of specified level should be drawn
     * @param level level
     */
    getIsolineVisible(level: number): boolean;
    /**
     * Sets linestyle for major isoline
     * @param style major style
     */
    setMajorLineStyle(style: LineStyle): this;
    /**
     * Sets linestyle for minor isoline
     * @param style minor style
     */
    setMinorLineStyle(style: LineStyle): this;
    /**
     * Gets linestyle for major isoline
     */
    getMajorLineStyle(): LineStyle;
    /**
     * Gets linestyle for major isoline
     */
    getMinorLineStyle(): LineStyle;
    /**
     * Sets show major isolines
     * @param visible visible
     */
    setMajorIsolinesVisible(visible: boolean): this;
    /**
     * Sets show minor isolines
     * @param visible visible
     */
    setMinorIsolinesVisible(visible: boolean): this;
    /**
     * Gets show major isolines
     */
    getMajorIsolinesVisible(): boolean;
    /**
     * Gets show minor isolines
     */
    getMinorIsolinesVisible(): boolean;
    /**
     * Gets if level is major
     * @param i level index
     */
    isMajorLevel(i: number): boolean;
    /**
     * Gets if level is minor
     * @param i level index
     */
    isMinorLevel(i: number): boolean;
    /**
     * Gets major step
     */
    getMajorStep(): number;
    /**
     * Gets minor step
     */
    getMinorStep(): number;
    /**
     * Sets major step
     * @param step step
     */
    setMajorStep(step: number): this;
    /**
     * Sets minor step
     * @param step step
     */
    setMinorStep(step: number): this;
    /**
     * Gets strategy properties
     * @returns strategy properties
     */
    getProperties(): MajorMinorIsolineStylingStrategy.OptionsOut;
    /**
     * Sets strategy properties
     * @param [props] An object containing the properties to set
     * @returns this
     */
    setProperties(props?: MajorMinorIsolineStylingStrategy.Options): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace MajorMinorIsolineStylingStrategy {
    /**
     * options
     */
    type Options = {
        /**
         * linestyle for major lines
         */
        majorlinestyle?: LineStyle;
        /**
         * linestyle for minor lines
         */
        minorlinestyle?: LineStyle;
        /**
         * step for major lines
         */
        majorstep?: number;
        /**
         * step for minor lines
         */
        minorstep?: number;
        /**
         * visibility of major lines
         */
        majorisolinevisible?: boolean;
        /**
         * deprecated since 4.0, use majorisolinevisible instead
         */
        majorisolinesvisible?: boolean;
        /**
         * visibility of minor lines
         */
        minorisolinevisible?: boolean;
        /**
         * deprecated since 4.0, use minorisolinevisible instead
         */
        minorisolinesvisible?: boolean;
    };
    /**
     * strategy properties
     */
    type OptionsOut = {
        /**
         * Line style form major isoline
         */
        majorlinestyle?: LineStyle;
        /**
         * Line style form minor isoline
         */
        minorlinestyle?: LineStyle;
        /**
         * Major step
         */
        majorstep?: number;
        /**
         * Minor step
         */
        minorstep?: number;
        /**
         * Major isoline visibility
         */
        majorisolinevisible?: boolean;
        /**
         * Minor isoline visibility
         */
        minorisolinevisible?: boolean;
    };
}
