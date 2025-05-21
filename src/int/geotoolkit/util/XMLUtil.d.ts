/**
 * Define utils methods to prettify or simplify XML
 */
export declare class XMLUtil {
    /**
     * Return pretty string
     * @param xmlObject xml string or DOM Document
     * @param onError onError callback
     */
    static prettify(xmlObject: string | Document, onError: (error: string) => void): string;
    /**
     * Return simplified XML string
     * @param xmlObject xml string or DOM Document
     */
    static simplify(xmlObject: string | Document): string;
}
