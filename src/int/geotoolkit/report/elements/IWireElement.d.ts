/**
 * @module geotoolkit/report/elements/IWireElement
 */
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
/**
 * Define an object that represents the report element supported Wire mode
 * @interface
 */
export declare abstract class IWireElement {
    /**
     * Return default wire opacity alpha
     */
    static getWireOpacity(): number;
    /**
     * Return default wire line style
     */
    static getWireLineStyle(): LineStyle;
    /**
     * Return default wire fill style
     */
    static getWireFillStyle(): FillStyle;
    /**
     * Return default wire light line style
     */
    static getWireLightLineStyle(): LineStyle;
    /**
     * Set Wire mode
     * @param wireMode wire mode
     * @returns this
     */
    abstract setWireMode(wireMode: boolean): this;
    /**
     * Returns Wire mode
     * @returns return wire mode
     */
    abstract getWireMode(): boolean;
}
