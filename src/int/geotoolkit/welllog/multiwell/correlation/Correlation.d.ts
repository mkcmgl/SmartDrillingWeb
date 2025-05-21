import { ITrack } from '@int/geotoolkit/welllog/ITrack';
import { Node } from '@int/geotoolkit/scene/Node';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { IStyleListener } from '@int/geotoolkit/attributes/IStyleListener';
/**
 * Define an abstract correlation to displayed in the correlation track
 */
export declare abstract class Correlation extends Node {
    /**
     * Creates correlation
     * @param [options]  options to create correlation
     */
    protected constructor(options?: Correlation.Options);
    /**
     * Sets correlation marker style
     *
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Returns line style of correlation.
     */
    getLineStyle(): LineStyle;
    /**
     * Sets left and right well
     * @param leftWell left well
     * @param rightWell right well
     * @returns this
     */
    setWells(leftWell: ITrack, rightWell: ITrack): this;
    /**
     * Return left well
     */
    getLeftWell(): ITrack | null;
    /**
     * Return right well
     */
    getRightWell(): ITrack | null;
    /**
     * Gets invalidate method
     * @returns method to invalidate this object
     */
    protected getInvalidateMethod(): IStyleListener.AttributeCallback;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): Correlation.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: Correlation.Options): this;
}
export declare namespace Correlation {
    /**
     * options
     */
    type Options = Node.Options & {
        /**
         * applied style
         */
        linestyle?: LineStyle.Type;
    };
    /**
     * properties object
     */
    type OptionsOut = Node.OptionsOut & {
        /**
         * line style
         */
        linestyle: LineStyle;
    };
}
