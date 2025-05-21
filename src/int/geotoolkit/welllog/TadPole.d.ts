import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { IExtendedDataSymbol } from '@int/geotoolkit/welllog/IExtendedDataSymbol';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
/**
 * Creates a tadpole, which is a symbol that receives metaInfo
 *
 * @example
 * // How to use TadPole with LogCurve
 * import {TadPole} from '@int/geotoolkit/welllog/TadPole';
 * import {LogCurve} from '@int/geotoolkit/welllog/LogCurve';
 * import {FillStyle} from '@int/geotoolkit/attributes/FillStyle';
 * import {LineStyle} from '@int/geotoolkit/attributes/LineStyle';
 * import {KnownColors} from '@int/geotoolkit/util/ColorUtil';
 *
 * const symbol = new TadPole({
 *      'ax’: 0,
 *      ‘ay’: 0,
 *      ‘width’: 15,
 *      ‘height’: 15,
 *      ‘sizeisindevicespace’: true
 * })
 * .setFillStyle(new FillStyle({
 *      ‘color’: fillColor || KnownColors.Yellow
 * }))
 * .setLineStyle(new LineStyle({
 *      ‘color’: KnownColors.Orange
 * }));
 *
 * return new LogCurve(dataSource, true)
 * .setSymbol(symbol)
 * .setDisplayMode([‘symbol’])
 * .setNormalizationLimits(0, 90);
 */
export declare class TadPole extends SymbolShape implements IExtendedDataSymbol<TadPole.MetaInfo> {
    /**
     * Creates tadpole
     * @param [options] properties object
     */
    constructor(options?: TadPole.Options);
    protected copyConstructor(src: TadPole, deepCopy?: boolean): this;
    /**
     * Specify rotations angle
     * @param angle angle
     * @returns this
     */
    setAngle(angle: number): this;
    /**
     * Return rotation angle
     */
    getAngle(): number;
    /**
     * Set Legs
     * @param legs line element associated with the symbol
     * @returns this
     */
    setLegs(legs: TadPole.Leg[]): this;
    /**
     * Get Legs
     * @returns legs
     */
    getLegs(): TadPole.Leg[];
    acceptMetaInfo(info: TadPole.MetaInfo): boolean;
    /**
     * Sets meta info
     * @param info meta info
     * @returns this
     */
    setMetaInfo(info: TadPole.MetaInfo): this;
    getMetaInfo(): TadPole.MetaInfoOut;
}
export declare namespace TadPole {
    /**
     * properties object
     */
    type Options = SymbolShape.Options & MetaInfo;
    type Leg = {
        angle: number;
        length: number;
        linestyle?: LineStyle.Type;
    };
    /**
     * meta info
     */
    type MetaInfo = {
        /**
         * rotation angle
         */
        angle?: number;
        /**
         * line element associated with the tadpole symbol
         */
        legs?: Leg[];
    };
    /**
     * meta info
     */
    type MetaInfoOut = {
        /**
         * rotation angle
         */
        angle: number;
        /**
         * line element associated with the tadpole symbol
         */
        legs: Leg[];
    };
}
