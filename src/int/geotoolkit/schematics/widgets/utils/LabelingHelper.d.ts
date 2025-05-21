/**
 * Labeling helper class
 * @deprecated since 4.0. Use {@link @int/geotoolkit/schematics/widgets/CompositeSchematicsWidget~CompositeSchematicsWidget} instead.
 */
export declare class LabelingHelper {
    constructor();
    /**
     * Gets default option set for {@link @int/geotoolkit/schematics/labeling/DefaultLabelShape~DefaultLabelShape} - style
     * labeling (normally, for all modes but "Adjacent")
     */
    getDefaultLabelOptions(): any;
    /**
     * Gets default option set for {@link @int/geotoolkit/schematics/labeling/SymbolLabelShape~SymbolLabelShape }- style
     * labeling (normally, for "Adjacent" labeling mode)
     */
    getSymbolLabelOptions(): any;
    static getClassName(): string;
    getClassName(): string;
}
