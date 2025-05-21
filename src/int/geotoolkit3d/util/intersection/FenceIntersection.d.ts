import { AbstractSeismicIntersection } from '@int/geotoolkit3d/util/intersection/AbstractSeismicIntersection';
import type { ReservoirGrid } from '@int/geotoolkit3d/scene/reservoir/hexahedral/ReservoirGrid';
import type { Surface } from '@int/geotoolkit3d/scene/surface/Surface';
import type { AbstractIntersection } from '@int/geotoolkit3d/util/intersection/AbstractIntersection';
import type { FencePanel } from '@int/geotoolkit3d/scene/seismic/FencePanel';
/**
 * A utilty class for setting intersections between a Seismic Fence and intersecting objects.
 * @deprecated since 4.0, please use geotoolkit3d/util/intersection/PlaneMeshIntersection instead.
 */
export declare class FenceIntersection extends AbstractSeismicIntersection {
    constructor();
    protected drawReservoirIntersection(panel: FencePanel, reservoir: ReservoirGrid, styleOptions?: AbstractIntersection.IntersectionOptions): AbstractIntersection.IntersectionShape[];
    protected drawSurfaceIntersection(panel: FencePanel, surface: Surface, styleOptions?: AbstractIntersection.IntersectionOptions): AbstractIntersection.IntersectionShape[];
}
