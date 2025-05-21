/**
 * @module geotoolkit3d/scene/curtain/CurtainVerticalMode
 */
/**
 * Enum of the possible Curtain vertical behavior modes.
 * @enum
 * @readonly
 */
export declare enum CurtainVerticalMode {
    /**
     * The Curtain vertical size and position will strictly match the defined zmin and zmax values defined by the user.<br>
     * The Curtain will NOT update based on intersected objects.
     */
    Fixed = "Fixed",
    /**
     * The Curtain will start at the defined zmin and zmax range, but will expand if necessary when intersecting objects are added.<br>
     * The Curtain size will recede if the intersected object are removed, but will still occupy the zmin and zmax range at minima.
     */
    AdjustToIntersections = "AdjustToIntersection",
    /**
     * The Curtain vertical range fill fit strictly to contain the intersected objects boundaries, ignoring the defined zmin/zmax.<br>
     * When no intersecting objects are defined, the Curtain will occpy the defined zmin/zman range.<br>
     * When removing intersecting objects, the vertical range of the curtain will recede to the remaining objects boundaries until no objects remains.<br>
     * If no objects remains, the curtain will default back to the defined zmin/zmax.
     */
    FitToIntersections = "FitToIntersections"
}
