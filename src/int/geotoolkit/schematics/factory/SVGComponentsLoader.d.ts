import { SVGParser } from '@int/geotoolkit/svg/SVGParser';
import { SvgDataProvider } from '@int/geotoolkit/svg/SvgDataProvider';
import type { ComponentNodeFactoryRegistry } from '@int/geotoolkit/schematics/factory/ComponentNodeFactoryRegistry';
import type { AbstractHttpService } from '@int/geotoolkit/http/AbstractHttpService';
/**
 * SVG-components loader
 */
export declare class SVGComponentsLoader {
    constructor(options: SVGComponentsLoader.Options);
    /**
     * Loads SVG-components to registry
     */
    load(): Promise<void>;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace SVGComponentsLoader {
    /**
     * loader parameters
     */
    type Options = {
        /**
         * relative path to JSON-file containing SVG-components to register
         */
        path: string;
        /**
         * registry to add SVG-components to
         */
        registry: ComponentNodeFactoryRegistry;
        /**
         * SVG parser
         */
        parser?: SVGParser;
        /**
         * data provider
         */
        dataprovider?: SvgDataProvider;
        /**
         * http service to make any HTTP request
         */
        httpservice?: AbstractHttpService;
    };
}
