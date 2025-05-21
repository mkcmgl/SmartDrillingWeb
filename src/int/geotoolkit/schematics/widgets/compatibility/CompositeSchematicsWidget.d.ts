import { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
import { Iterator } from '@int/geotoolkit/util/iterator';
import { Group } from '@int/geotoolkit/scene/Group';
import { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
import type { Trajectory2d } from '@int/geotoolkit/deviation/Trajectory2d';
import type { Point } from '@int/geotoolkit/util/Point';
import type { ViewMode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import type { IViewModeBuilder } from '@int/geotoolkit/schematics/builder/IViewModeBuilder';
/**
 * Enum of display modes
 * @enum
 * @readonly
 */
export declare enum DisplayMode {
    /**
     * Vertical display mode
     */
    Vertical = "vertical",
    /**
     * Deviated display mode.
     * Can not be set if trajectory data not provided.
     */
    Deviated = "deviated"
}
/**
 * CompositeSchematicsWidget
 * @deprecated since 4.0, use @int/geotoolkit/schematics/widgets/CompositeSchematicsWidget instead
 */
export declare class CompositeSchematicsWidget extends AnnotatedWidget {
    constructor(options?: CompositeSchematicsWidgetOptionsType);
    /**
     * Gets model coordinates (where y-ordinate is true MD-value) at given device ones.<br>
     * If conversion fails then returned point contains NaN values as its x- and y- ordinates.
     * @param devicePoint source device point
     * @param [modelPoint] destination model point
     */
    getModelPoint(devicePoint: Point, modelPoint?: Point | null): Point;
    /**
     * Gets device coordinates at given model ones
     * @param modelPoint source model point (where y-ordinate is true MD-value)
     * @param [devicePoint] destination device point
     */
    getDevicePoint(modelPoint: Point, devicePoint?: Point | null): Point;
    /**
     * Transforms depth value between linear and MD model space.<br>
     * If not possible returns NaN
     * @param val depth value to transform
     * @param [mdToLinear] direction of transformation
     * @returns transformed value
     */
    transformDepth(val: number, mdToLinear?: boolean | null): number;
    protected getDisplays(): Iterator;
    /**
     * Returns properties
     * @returns properties
     */
    getProperties(): GetPropertiesReturnType;
    /**
     * Sets properties
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: SetPropertiesType | null): this;
    protected initializeTools(): this;
    /**
     * Gets current model node
     */
    getModel(): Group;
    /**
     * Exports current representation to PDF
     * @param [options] option to specify paper parameters and header and footer
     * @see {@link @int/geotoolkit/schematics/widgets/SchematicsWidget~SchematicsWidget.exportToPdf} for details
     * @see {@link @int/geotoolkit/schematics/widgets/DeviatedSchematicsWidget~DeviatedSchematicsWidget~exportToPdf} for details
     */
    exportToPdf(options?: any): Promise<any>;
    /**
     * Scale contents.
     *
     * @param xx x scale factor
     * @param yy y scale factor
     * @param [posX] x position to scale from (in pxl)
     * @param [posY] y position to scale from (in pxl)
     */
    scaleModel(xx: number, yy: number, posX?: number | null, posY?: number | null): this;
    /**
     * fit bounds to model limits
     * @returns this
     */
    fitToBounds(): this;
    /**
     * Gets well bore view mode
     * @returns viewMode
     */
    getViewMode(): ViewMode;
    /**
     * Sets well bore view mode
     * @param viewMode well bore view mode
     * @param [options] the mode options
     * @returns "model limits to bounds" depths mapping
     */
    setViewMode(viewMode: ViewMode, options?: any): IViewModeBuilder.BuildOptions;
    /**
     * Gets data
     */
    getData(): GetDataReturnType;
    /**
     * @param data wellbore data or object encapsulating data
     * @returns this
     */
    setData(data: SetDataType): this;
    /**
     * Gets widget options
     * @see {@link @int/geotoolkit/schematics/widgets/CompositeSchematicsWidget~CompositeSchematicsWidget.setOptions} for details
     * @returns widget options
     */
    getOptions(): object;
    /**
     * Sets widget options
     *
     * @param options widget options<br>
     * The top-most options may include settings common for both display modes.<br>
     * If an option defined in the top-most section is also defined in specific display mode,
     * then the specific value overrides common one.
     * @returns this
     */
    setOptions(options: SetOptionsType): this;
}
/**
 * options
 */
declare type CompositeSchematicsWidgetOptionsType = {
    options?: any;
    /**
     * display mode
     */
    displaymode?: DisplayMode;
    /**
     * vertical display mode options
     * @see {@link @int/geotoolkit/schematics/widgets/SchematicsWidget~SchematicsWidget.setOptions} for details
     */
    vertical?: any;
    /**
     * deviated display mode options
     * @see {@link @int/geotoolkit/schematics/widgets/DeviatedSchematicsWidget~DeviatedSchematicsWidget.setOptions} for details
     */
    deviated?: any;
    /**
     * wellbore data or object encapsulating data
     */
    data?: WellBoreData | {
        /**
         * wellbore data
         */
        elements?: WellBoreData;
        /**
         * trajectory
         */
        trajectory?: Trajectory2d;
    };
};
/**
 * properties
 */
declare type GetPropertiesReturnType = {
    /**
     * display mode
     */
    displaymode?: DisplayMode;
    /**
     * vertical display mode properties
     * @see {@link @int/geotoolkit/schematics/widgets/SchematicsWidget~SchematicsWidget.setOptions} for details
     */
    vertical?: any;
    /**
     * deviated display mode properties
     * @see {@link @int/geotoolkit/schematics/widgets/DeviatedSchematicsWidget~DeviatedSchematicsWidget.setOptions} for details
     */
    deviated?: any;
    /**
     * wellbore data or object encapsulating data
     */
    data?: WellBoreData | {
        /**
         * wellbore data
         */
        elements?: WellBoreData;
        /**
         * trajectory
         */
        trajectory?: Trajectory2d;
    };
} | any;
/**
 * properties
 */
declare type SetPropertiesType = {
    /**
     * display mode
     */
    displaymode?: DisplayMode;
    /**
     * vertical display mode properties
     * @see {@link @int/geotoolkit/schematics/widgets/SchematicsWidget~SchematicsWidget.setOptions} for details
     */
    vertical?: any;
    /**
     * deviated display mode properties
     * @see {@link @int/geotoolkit/schematics/widgets/DeviatedSchematicsWidget~DeviatedSchematicsWidget.setOptions} for details
     */
    deviated?: any;
    /**
     * wellbore data or object encapsulating data
     */
    data?: WellBoreData | {
        /**
         * wellbore data
         */
        elements?: WellBoreData;
        /**
         * trajectory
         */
        trajectory?: Trajectory2d;
    };
} | any;
declare type GetDataReturnType = null | {
    /**
     * wellbore data
     */
    elements: WellBoreData;
    /**
     * trajectory data
     */
    trajectory: Trajectory2d;
};
/**
 * wellbore data or object encapsulating data
 */
declare type SetDataType = WellBoreData | {
    /**
     * wellbore data
     */
    elements?: WellBoreData;
    /**
     * trajectory
     */
    trajectory?: Trajectory2d;
};
/**
 * widget options<br>
 * The top-most options may include settings common for both display modes.<br>
 * If an option defined in the top-most section is also defined in specific display mode,
 * then the specific value overrides common one.
 */
declare type SetOptionsType = {
    /**
     * display mode
     */
    displaymode?: DisplayMode;
    /**
     * vertical display mode options
     * @see {@link @int/geotoolkit/schematics/widgets/SchematicsWidget~SchematicsWidget.setOptions} for details
     */
    vertical?: any;
    /**
     * deviated display mode options
     * @see {@link @int/geotoolkit/schematics/widgets/DeviatedSchematicsWidget~DeviatedSchematicsWidget.setOptions} for details
     */
    deviated?: any;
};
export {};
