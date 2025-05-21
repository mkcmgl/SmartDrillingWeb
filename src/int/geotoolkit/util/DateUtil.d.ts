/**
 * Helper class for the Date
 */
export declare class DateUtil {
    /**
     * Format date
     * @param date date instance
     * @param format date format
     */
    static format(date: Date, format: string): string;
    /**
     * Format UTC date
     * @param date date instance
     * @param format date format
     */
    static formatUTC(date: Date, format: string): string;
    /**
     * Returns array of days short names
     */
    static getShortsDays(): string[];
    /**
     * Returns array of days long names
     */
    static getLongDays(): string[];
    /**
     * Returns array of months short names
     */
    static getShortsMonths(): string[];
    /**
     * Returns array of months long names
     */
    static getLongMonths(): string[];
    static getClassName(): string;
    getClassName(): string;
}
