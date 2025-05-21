import { NumericTickGenerator } from '@int/geotoolkit/axis/NumericTickGenerator';
/**
 * Creates discrete value tick generator
 */
export declare class DiscreteValueTickGenerator extends NumericTickGenerator {
    constructor(dataProvider?: DiscreteValueTickGenerator.Options | TicksAndLabelsCallback);
    clone(): DiscreteValueTickGenerator;
    protected copyConstructor(src: DiscreteValueTickGenerator, deepCopy?: boolean): this;
    /**
     * Sets discrete data provider
     * @param dataProvider should be a function or instance of class that implements 'getTicksAndLabels' method
     */
    setDataProvider(dataProvider: DiscreteValueTickGenerator.DataProvider): this;
    /**
     * Set Major or Minor tick step size
     *
     * @param tickGrade tick grade MAJOR or MINOR
     * @param tickStep amount each tick should step
     */
    setTickStep(tickGrade: string, tickStep: number): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): DiscreteValueTickGenerator.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     */
    setProperties(properties?: DiscreteValueTickGenerator.Options): this;
}
export declare namespace DiscreteValueTickGenerator {
    type Options = NumericTickGenerator.Options & DataProvider & {
        /**
         * max label
         */
        maxlabel?: string;
    };
    /**
     * properties
     */
    type OptionsOut = NumericTickGenerator.OptionsOut & {
        /**
         * max label
         */
        maxlabel: string;
    };
    type DataProvider = DataProviderInfo | TicksAndLabelsCallback;
}
declare type DataProviderInfo = {
    /**
     * array of labels
     */
    labels?: string[];
    /**
     * array of the model label positions
     */
    positions?: number[];
    /**
     * function to get ticks and labels
     */
    getticksandlabels?: TicksAndLabelsCallback;
    /**
     * @deprecated since 4.0. Use 'getticksandlabels' instead
     * function to get ticks and labels
     */
    getTicksAndLabels?: TicksAndLabelsCallback;
};
declare type TicksAndLabelsCallback = () => TicksAndLabels;
declare type Tick = {
    position: number;
    grade: string;
};
declare type Label = {
    position: number;
    grade: string;
    label: string;
};
declare type TicksAndLabels = {
    ticks: Tick[];
    labels: Label[];
};
export {};
