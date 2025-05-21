import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { Path } from '@int/geotoolkit/scene/shapes/Path';
import { Polygon } from '@int/geotoolkit/controls/tools/editors/Polygon';
/**
 * Spline editor can be used to create and modify {@link @int/geotoolkit/scene/shapes/Path~Path} shapes that imitates spline
 * behavior using bezier curves.
 */
export declare class Spline extends Polygon {
    /**
     * @param [options] editor options
     */
    constructor(options?: Spline.Options);
    protected initialize(options: Spline.Options): void;
    /**
     * Sets properties to the editing elements
     * @param properties editor properties
     * @returns this
     */
    setProperties(properties?: Spline.Options): this;
    /**
     * Returns all
     * @returns editor properties
     */
    getProperties(): Spline.OptionsOut;
}
export declare namespace Spline {
    /**
     * editor options
     */
    type Options = Polygon.Options & {
        /**
         * control points path properties (@see {@link @int/geotoolkit/scene/shapes/Path~Path#setProperties})
         */
        cpline?: Path.Options;
        /**
         * handles properties
         */
        handles?: {
            /**
             * control point handles properties (@see {@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape#setProperties})
             */
            controlpoint?: SymbolShape.Options;
        };
    };
    /**
     * editor properties
     */
    type OptionsOut = Polygon.OptionsOut & {
        /**
         * control points path properties (@see {@link @int/geotoolkit/scene/shapes/Path~Path#getProperties})
         */
        cpline: Path.OptionsOut;
        /**
         * handles properties
         */
        handles?: {
            /**
             * control point handles properties (@see {@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape#getProperties})
             */
            controlpoint?: SymbolShape.OptionsOut;
        };
    };
    /**
     * handles properties
     */
    type ExtraHandlesOptions = {
        /**
         * control point handles properties (@see {@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape#setProperties})
         */
        controlpoint?: SymbolShape.Options;
    };
}
