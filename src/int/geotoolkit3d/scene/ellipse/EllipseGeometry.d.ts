/**
 * @module geotoolkit3d/scene/ellipse/EllipseGeometry
 */
import { BufferGeometry } from 'three';
/**
 * A ellipse geometry to be used with THREE.Line.<br>
 * Use mesh's scale&position&rotation to change the ellipse location&shape.<br>
 */
export declare class EllipseGeometry extends BufferGeometry {
    constructor();
    /**
     * Extract segmented points from this geometry
     * @returns points
     */
    extractSegmentPoints(): number[];
}
