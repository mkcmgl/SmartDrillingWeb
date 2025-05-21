import type { ColorRepresentation } from 'three';
import { GridAlignment } from '@int/geotoolkit3d/scene/well/loggrid/GridAlignment';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { Rect } from '@int/geotoolkit/util/Rect';
import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { IModel } from '@int/geotoolkit/scene/IModel';
import type { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
/**
 * Object LogGrid2D. This is grid along trajectory. User can customize its background, texts and ticks.
 */
export declare class LogGrid2D extends Object3D implements IModel {
    constructor(options: LogGrid2D.Options);
    setOptions(options?: LogGrid2D.SetOptions): this;
    getOptions(): LogGrid2D.GetOptions;
    getModelLimits(): Rect;
    getBounds(): Rect;
}
export declare namespace LogGrid2D {
    /**
     * LogGrid2D options
     */
    export type Options = SetOptions & {
        /**
         * Trajectory data
         */
        data: {
            /**
             * x trajectory coordinates
             */
            x: number[];
            /**
             * y trajeectory coordinates
             */
            y: number[];
            /**
             * z trajectory coordinates
             */
            z: number[];
        };
    };
    /**
     * LogGrid2D options
     */
    export type SetOptions = Object3D.Options & {
        /**
         * Custom LogGrid2D options
         */
        grid?: GridOptions;
    };
    type GridOptions = {
        /**
         * Depth of tick + custom options (text, custom line/text style)
         */
        depths?: Record<number, ElevationOptions>;
        /**
         * Default ticks line style
         */
        commonlinestyle?: LineStyle.Type;
        /**
         * Default text text style
         */
        commontextstyle?: TextStyle.Type;
        /**
         * Radius of LogGrid2D
         */
        radius?: number;
        /**
         * Color of background
         */
        backgroundcolor?: ColorRepresentation | RgbaColor;
        /**
         * Alignment of LogGrid2D
         */
        alignment?: GridAlignment;
        /**
         * Line style of LogGrid2D edge
         */
        edgelinestyle?: LineStyle.Type;
        /**
         * Tick generator to generate grid ticks
         */
        tickgenerator?: TickGenerator;
    };
    /**
     * LogGrid2D options
     */
    export type GetOptions = Required<Object3D.Options> & {
        /**
         * Custom grid options
         */
        grid: Required<Omit<GridOptions, 'tickgenerator'>> & {
            /**
             * Default ticks line style
             */
            commonlinestyle: LineStyle;
            /**
             * Default text text style
             */
            commontextstyle: TextStyle;
            /**
             * Line style of edge of LogGrid2D
             */
            edgelinestyle: LineStyle;
        };
    };
    /**
     * Custom depth options
     */
    type ElevationOptions = {
        /**
         * Custom tick line style
         */
        linestyle?: LineStyle.Type;
        /**
         * Additional text to tick
         */
        text?: string;
        /**
         * Custom text text style
         */
        textstyle?: TextStyle.Type;
    };
    export {};
}
