/**
 * @module geotoolkit/seismic/axis/TraceHeaderTickGenerator
 */
import { SeismicPipeline } from '@int/geotoolkit/seismic/pipeline/SeismicPipeline';
import { IndexTickGenerator } from '@int/geotoolkit/seismic/axis/IndexTickGenerator';
import { FieldDesc } from '@int/geotoolkit/seismic/data/FieldDesc';
import type { IModel } from '@int/geotoolkit/scene/IModel';
import type { Orientation } from '@int/geotoolkit/util/Orientation';
import type { TickInfo } from '@int/geotoolkit/axis/TickInfo';
/**
 * Defines a tick generator for seismic traces header values. This tick generator can display ticks for the seismic traces headers.<br>
 * It will retrieve the header values from the given {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline~SeismicPipeline} for the given {@link @int/geotoolkit/seismic/data/FieldDesc~FieldDesc} and display ticks for those trace headers.
 */
export declare class TraceHeaderTickGenerator extends IndexTickGenerator {
    /**
     * @param [options] An object containing the properties to set
     */
    constructor(options?: TraceHeaderTickGenerator.Options);
    /**
     * @param pipeline pipeline
     * @param [headerField] header field or name of the header field, or id
     * @param [invalidateHandler] invalidateHandler
     */
    constructor(pipeline: SeismicPipeline, headerField?: FieldDesc | string | number, invalidateHandler?: () => void);
    clone(): TraceHeaderTickGenerator;
    protected copyConstructor(src: TraceHeaderTickGenerator, deepCopy?: boolean): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties
     */
    getProperties(): TraceHeaderTickGenerator.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: TraceHeaderTickGenerator.Options): this;
    resetAsync(parent: IModel, orientation: Orientation | string, tickInfo: TickInfo, callback: (x: any[]) => any): void;
}
export declare namespace TraceHeaderTickGenerator {
    /**
     * An object containing the properties to set
     */
    type Options = IndexTickGenerator.Options & {
        /**
         * invalidatehandler
         */
        invalidatehandler?: () => void;
        /**
         * header field or name of the header field, or id
         */
        headerfield?: FieldDesc | string | number;
    };
    /**
     * An object containing the properties
     */
    type OptionsOut = IndexTickGenerator.OptionsOut & {
        /**
         * invalidatehandler
         */
        invalidatehandler?: () => void;
        /**
         * header field or name of the header field, or id
         */
        headerfield?: FieldDesc | string | number;
    };
}
