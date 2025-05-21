/**
 * @module geotoolkit/util/FormatFactory
 */
import { Format } from '@int/geotoolkit/util/Format';
import { NumberFormat } from '@int/geotoolkit/util/NumberFormat';
import { AutoNumberFormat } from '@int/geotoolkit/util/AutoNumberFormat';
import { DecimalFormat } from '@int/geotoolkit/util/DecimalFormat';
import { DateTimeFormat } from '@int/geotoolkit/util/DateTimeFormat';
import type { TimeZone } from '@int/geotoolkit/axis/TimeZone';
/**
 * Defines abstract class for formatting numbers, dates and time
 */
export declare class FormatFactory {
    /**
     * Create or get fill style from object
     *
     * @param [object] object can be in format of constructor {@link @int/geotoolkit/util/Format~Format}
     */
    static createFromObject(object: FormatFactory.Object | Format | null): Format | null;
}
export declare namespace FormatFactory {
    type Object = {
        type?: 'number';
    } & NumberFormat.Options | {
        type?: 'decimal';
        format: string;
    } & AutoNumberFormat.Options | {
        type?: 'decimal';
    } & DecimalFormat.Options | {
        type?: 'datetime';
        timezone: TimeZone | string;
    } & DateTimeFormat.Options | NumberFormat.Options;
}
