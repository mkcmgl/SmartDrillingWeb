import { DateTimeFormat } from '@int/geotoolkit/util/DateTimeFormat';
import type { Locale } from '@int/geotoolkit/util/Locale';
/**
 * Define date time factory
 */
export declare class DateTimeFormatFactory {
    /**
     * Return default factory instance
     */
    static getDefault(): DateTimeFormatFactory;
    /**
     * Create a new format
     * @param [options] options
     * @returns a new Format instance
     */
    createFormat(options?: DateTimeFormatFactory.Options): DateTimeFormat;
    /**
     * Sets default format factory
     * @param instance a new instance
     */
    static setDefault(instance: DateTimeFormatFactory): void;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace DateTimeFormatFactory {
    /**
     * options
     */
    type Options = DateTimeFormat.Options & {
        /**
         * To support locales register a custom factory, which supports it.
         */
        locale?: Locale | string;
    };
}
