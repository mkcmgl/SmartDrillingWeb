/**
 * @module geotoolkit3d/util/MeshUtils
 */
import type { Mesh } from 'three';
import { LineSegments } from '@int/geotoolkit3d/scene/LineSegments';
/**
 * Utility class providing utility functions related to meshes (THREE.Mesh)
 */
export declare class MeshUtils {
    /**
     * Compute the pair of points that makes this mesh outline.
     * @param mesh the mesh to compute the outline of.
     * @returns the pair of points of each segment in the format: [a.x, a.y, a.z,  b.x, b.y, b.z ... ]
     */
    static computeMeshOutline(mesh: Mesh): number[];
    /**
     * Generate a highlight polyline for the given meshes.
     * Generated highlight polylines are added as each mesh's children, but also returned in a common array to easily enable/disable the highlights.
     * The resulting object array should NOT be added manually in the scene, as it is not updated with the proper transformations.
     * @param meshes the mesh array to generate highlights of.
     * @returns the reference to the highlights as an array of geotoolkit3d.scene.LineSegments
     */
    static generateMeshHighlight(meshes: Mesh[]): LineSegments[];
    static getClassName(): string;
    getClassName(): string;
}
