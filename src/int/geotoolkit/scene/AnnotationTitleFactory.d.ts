import { Text } from '@int/geotoolkit/scene/shapes/Text';
/**
 * Defines helper method(s) to create annotation title instance
 */
export declare class AnnotationTitleFactory {
    /**
     * Returns instance of the factory
     * @returns factory
     */
    static getInstance(): AnnotationTitleFactory;
    /**
     * Creates annotation title
     *
     * @param options annotation title options
     * @returns annotation title
     */
    create(options: Text.Options): Text;
    static getClassName(): string;
    getClassName(): string;
}
