import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { UnitFactory } from '@int/geotoolkit/util/UnitFactory';
/**
 * Abstract factory for unit factory
 */
export declare abstract class AbstractUnitFactory {
    /**
     * Returns the time stamp (version) of unit factory. This value will be updated whenever modification made.
     */
    abstract getTimeStamp(): number;
    /**
     * Returns an instance of unit based on specified information
     * @param value represent the `{string}` name, `{string}` symbol or `{AbstractUnit}` unit to be created
     * @param [quantityType] expected quantity types
     * @param [nullIfNotExist] return null if unit does not exist instead of returning a user-defined unit
     */
    abstract getUnit(value: string | AbstractUnit, quantityType?: string[], nullIfNotExist?: boolean): AbstractUnit | null;
    /**
     * Returns instance of unit factory
     * @returns factory
     */
    static getDefaultFactory(): UnitFactory;
    /**
     * Returns instance of unit factory
     * @param type factory ctor
     */
    static setType(type: typeof UnitFactory): void;
    static getClassName(): string;
    getClassName(): string;
}
