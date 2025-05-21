import { AbstractSeismicIntersection } from '@int/geotoolkit3d/util/intersection/AbstractSeismicIntersection';
import type { Surface } from '@int/geotoolkit3d/scene/surface/Surface';
import type { ReservoirGrid } from '@int/geotoolkit3d/scene/reservoir/hexahedral/ReservoirGrid';
import type { Slice } from '@int/geotoolkit3d/scene/seismic/Slice';
import type { AbstractIntersection } from '@int/geotoolkit3d/util/intersection/AbstractIntersection';
/**
 * Utility class related to setting intersections, user can set seismic slice intersections with different objects,
 * such as Surface, Horizon, and ReservoirGrid.<br>
 * @deprecated since 4.0, please use geotoolkit3d/util/intersection/PlaneMeshIntersection instead.
 */
export declare class SeismicIntersection extends AbstractSeismicIntersection {
    constructor();
    protected drawReservoirIntersection(slice: Slice, reservoir: ReservoirGrid, options?: AbstractIntersection.IntersectionOptions): AbstractIntersection.IntersectionShape[];
    protected drawSurfaceIntersection(slice: Slice, surface: Surface, options?: AbstractIntersection.IntersectionOptions): AbstractIntersection.IntersectionShape[];
}
