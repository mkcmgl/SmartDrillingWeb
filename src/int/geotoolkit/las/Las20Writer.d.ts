import type { NumericalDataSeries } from '@int/geotoolkit/data/NumericalDataSeries';
import type { IWritable } from '@int/geotoolkit/util/stream/IWritable';
/**
 * LAS writer for LAS version 2.0
 */
export declare class Las20Writer {
    /**
     * Constructor
     * @param indexData data series which stores index values (depth, time or index)
     */
    constructor(indexData: NumericalDataSeries);
    /**
     * Sets company name
     * @param value value
     * @returns this
     */
    setCompanyName(value: string): this;
    /**
     * Sets well name
     * @param value value
     * @returns this
     */
    setWellName(value: string): this;
    /**
     * Sets field
     * @param value value
     * @returns this
     */
    setField(value: string): this;
    /**
     * Sets location
     * @param value value
     * @returns this
     */
    setLocation(value: string): this;
    /**
     * Sets province
     * @param value value
     * @returns this
     */
    setProvince(value: string): this;
    /**
     * Sets county
     * @param value value
     * @returns this
     */
    setCounty(value: string): this;
    /**
     * Sets state
     * @param value value
     * @returns this
     */
    setState(value: string): this;
    /**
     * Sets country
     * @param value value
     * @returns this
     */
    setCountry(value: string): this;
    /**
     * Sets service company
     * @param value value
     * @returns this
     */
    setServiceCompany(value: string): this;
    /**
     * Sets date
     * @param value value
     * @returns this
     */
    setDate(value: string): this;
    /**
     * Sets unique well id
     * @param value value
     * @returns this
     */
    setUWI(value: string): this;
    /**
     * Sets API number
     * @param value value
     * @returns this
     */
    setAPINumber(value: string): this;
    /**
     * Sets license number
     * @param value value
     * @returns this
     */
    setLicenceNumber(value: string): this;
    /**
     * Save
     * @param stream stream to save file
     */
    save(stream: IWritable): void;
    /**
     * Adds parameter
     * @param mnemonic mnemonic
     * @param unit unit
     * @param value value
     * @param description description
     */
    addParameter(mnemonic: string, unit: string, value: string, description: string): this;
    /**
     * Adds curve
     * @param curveData curve data series
     * @param [mnemonic] mnemonic
     * @param [unit] unit
     * @param [value] value
     * @param [description] description
     */
    addCurve(curveData: NumericalDataSeries, mnemonic?: string, unit?: string, value?: string, description?: string): this;
    /**
     * Adds comment to version section
     * @param position position
     * @param comment comment
     */
    addVersionComment(position: number, comment: string): this;
    /**
     * Adds comment to well section
     * @param position position
     * @param comment comment
     */
    addWellComment(position: number, comment: string): this;
    /**
     * Adds comment to parameter section
     * @param position position
     * @param comment comment
     */
    addParameterComment(position: number, comment: string): this;
    /**
     * Adds comment to curve section
     * @param position position
     * @param comment comment
     */
    addCurveComment(position: number, comment: string): this;
    /**
     * Sets null value
     * @param value null value
     */
    setNullValue(value: number): this;
    getNullValue(): number;
    static getClassName(): string;
    getClassName(): string;
}
