/**
 * Defines css Lexical unit
 */
export declare class LexicalUnit {
    constructor(value?: string, p?: LexicalUnit);
    /**
     * Gets an integer representing the type of CssLexeme
     * @param [type] type
     */
    getLexicalUnitType(type?: string): number;
    /**
     * Parses value passed into constructor
     * @param value Value of the parameter
     * @param [p] Previous lexical unit
     */
    parseParameters(value: string, p?: LexicalUnit): this;
    /**
     * Returns string representing dimension unit
     * @throws Error if dimensions are not supported
     */
    getDimensionUnitText(): null | string;
    /**
     * Get number value
     */
    getNumberValue(): null | number;
    /**
     * Gets the next lexical unit, if present, otherwise null
     */
    getNextLexicalUnit(): LexicalUnit | null;
    /**
     * Gets the previous lexical unit, if present, otherwise null
     */
    getPreviousLexicalUnit(): LexicalUnit | null;
    /**
     * Gets the string representation of value
     * If the type is CSS_URI, the return value doesn't contain uri(....) or quotes.
     * If the type is CSS_ATTR, the return value doesn't contain attr(....).
     */
    getStringValue(): string;
    static getClassName(): string;
    getClassName(): string;
}
