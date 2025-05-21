/**
 * @module geotoolkit/util/UnitFactory
 */
import { AbstractUnitFactory } from '@int/geotoolkit/util/AbstractUnitFactory';
import { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
/**
 * Factory that creates {@link @int/geotoolkit/util/Unit~Unit}
 * This class acts as a factory and a registry class that can convert string representation of units into plain unit object. Unit objects themselves can perform conversion of values. <br>
 * This class embeds a default catalog of commonly used units. <b>Units Tutorial</b> in Geotoolkit/CarnacJS/Utils demonstrates how one could extend or replace units by creating and registering new units.<br>
 * It lists the base units and shows how to convert and add new units to the factory as shown in the example below.<br>
 * This class also holds the information used by the toolkit to convert device (screen) dimensions to rendering dimensions.<br>
 * For example if we are rendering a track with width 1" on display or device size, this 1" can be measured through a ruler.
 * But Javascript cannot set size in device coordinates, so we need Pixel per Inch (PPI, each device has different value) and
 * Pixel per css Pixel (PPCP is what can be used in Javascript and is not same as Pixel).<br>
 * UnitFactory Class has a static dictionary and can recognize all existing Apple devices and we have APIs to let predefined devices set correct values.
 * The toolkit embeds a recognition algorithm that will try to retrieve those values from a dictionary by analysing the user-agent and other
 * global properties of the browser. However, this algorithm will only recognize some of the predefined devices.<br>
 * One could either extend this list or customize the algorithm or explicitly set those ppi & ppcp values.<br>
 * The later is recommended for production application where the displayed scales are critical and the supported platforms list is open.
 * The suggested approach is to provide the user with a calibration tool that will let him set the actual ratios manually.
 *
 * @example
 * const unit = factory.getUnit('foot');
 * // unit is named unit.getName(), and display a unit.getQuantityType() in unit.getSymbol()
 * // convert to another length unit:
 * unit.convert(1500.00, 'm'); // 1500.00 ft = 457.20 m
 *
 * // Add new unit for your own use
 * factory.addUnit({
 *  // information about the new Unit
 *   'name': 'pint',
 *   'quantityType': 'volume', //or create your own
 *   'symbol': 'pt',
 *   'description': 'drink responsibly',
 *   'baseUnitSymbol': 'm3',
 *   // Computation Detail : newunit = (a+b*base)/(c+d*base)
 *   'a': 0, 'b': 0.000473176, 'c': 1, 'd': 0
 * });
 */
export declare class UnitFactory extends AbstractUnitFactory {
    constructor();
    /**
     * Returns the time stamp (version) of unit factory. This value will be updated whenever modification made.
     */
    getTimeStamp(): number;
    /**
     * Returns an instance of unit based on specified information
     * @param value represent the `{string}` name, `{string}` symbol or `{AbstractUnit}` unit to be created
     * @param [quantityType] expected quantity types
     * @param [nullIfNotExist] return null if unit does not exist instead of returning a user-defined unit
     */
    getUnit(value: string | AbstractUnit, quantityType?: string[], nullIfNotExist?: boolean): AbstractUnit | null;
    /**
     * Return array of unit symbols by class name
     * @param name class name
     */
    getUnitSymbolsByClass(name: string): string[];
    /**
     * Returns all convertible unit symbols
     * @param unit unit to convert from/to
     */
    getConvertableUnitSymbols(unit: AbstractUnit | string): string[];
    /**
     * Clears all units from unit factory except CSS units (pixel, point and pica)
     * @returns this
     */
    clearUnits(): this;
    /**
     * Adds a unit to factory. please reference the constructor in {@link @int/geotoolkit/util/Unit~Unit} for more details.
     * @param name unit name or unit inherited from AbstractUnit
     * @param quantityType expected quantity type
     * @param symbol unit symbol
     * @param baseUnitSymbol base unit symbol
     * @param a factor
     * @param b factor
     * @param c factor
     * @param d factor
     * @param [description] description of the unit
     * @returns this
     */
    addUnit(name: string | AbstractUnit, quantityType: string[] | string, symbol: string, baseUnitSymbol: string, a: number, b: number, c: number, d: number, description?: string): this;
    /**
     * Removes a unit from factory.
     * @param unit unit name or unit inherited from AbstractUnit
     * @returns this
     */
    removeUnit(unit: string | AbstractUnit): this;
    /**
     * Clears all unit classes from unit factory
     * @returns this
     */
    clearUnitClasses(): this;
    addUnitClass(unitInfo: UnitFactory.UnitInfo): this;
    /**
     * Adds a unit class to unit factory
     * @param name unit name or object
     * @param [baseUnitSymbol] base unit symbol
     * @param [unitSymbols] array of unit symbols
     * @returns this
     */
    addUnitClass(name: string, baseUnitSymbol?: string, unitSymbols?: string[] | string): this;
    /**
     * Removes a unit class from unit factory
     * @param name unit name or object
     * @param [unitSymbols] array of unit symbols
     * @returns this
     */
    removeUnitClass(name: Omit<UnitFactory.UnitInfo, 'baseunitsymbol'> | string, unitSymbols?: string[] | string): this;
    /**
     * Clears all unit alias from unit factory
     * @returns this
     */
    clearUnitAlias(): this;
    /**
     * Adds a unit alias to unit factory
     * @param baseUnitSymbol base unit symbol
     * @param isCaseSensitive isCaseSensitive case sensitivity flag
     * @param [alias] alias unit symbols
     * @returns this
     */
    addUnitAlias(baseUnitSymbol: string, isCaseSensitive: boolean, alias?: string[] | string): this;
    /**
     * Removes a unit alias from unit factory
     * @param baseUnitSymbol base unit symbol
     * @param isCaseSensitive case sensitivity flag
     * @param alias alias unit symbols
     * @returns this
     */
    removeUnitAlias(baseUnitSymbol: string, isCaseSensitive: boolean, alias: string[] | string): this;
    /**
     * Adds device PPI list
     * @param list Accept function returns true if device matched.
     * @returns this
     */
    addDevicePPIList(list: UnitFactory.PPI[]): this;
    /**
     * Clears device PPI list
     * @returns this
     */
    clearDevicePPIList(): this;
    /**
     * Returns physical pixels per inch of the device
     */
    getPPI(): number;
    /**
     * Sets physical pixels per inch of the device
     * @param ppi pixel per inch
     * @param ppcp pixel per css pixel (sometimes different from window.devicePixelRatio)
     * @returns this
     */
    setPPI(ppi: number, ppcp: number): this;
    /**
     * Returns the number of CSS pixels (browser) per physical inch (device)
     * CSS pixels per physical inch is different from pixels per inch of the device.
     * It considers operating system and browser scaling and the ratio between browser inch and physical device inch
     */
    getCSSPixelPerInch(): number;
    /**
     * Updates CSS pixels per physical inch
     * @returns this
     */
    updateDevicePPI(): this;
    /**
     * Returns instance of unit factory
     * @returns factory
     */
    static getInstance(): UnitFactory;
    /**
     * Returns instance of unit factory
     * @returns factory
     */
    static registerDefaults(): UnitFactory;
}
export declare namespace UnitFactory {
    /**
     * unit name or object
     */
    type UnitInfo = {
        name: string;
        /**
         * base unit symbol
         */
        baseunitsymbol?: string;
        /**
         * array of unit symbols
         */
        unitsymbols?: string[] | string;
    };
    type PPI = {
        device?: string;
        ppi: number;
        ppcp: number;
        accept: () => boolean;
    };
}
