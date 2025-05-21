import type { Mesh, Object3D } from 'three';
import type { Trajectory3d } from '@int/geotoolkit3d/geodata/Trajectory3d';
import type { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
/**
 * Simple factory
 */
export declare class SimpleFactory {
    constructor();
    /**
     * Set componentName-to-nodeFactory link.
     * @param componentName component name associated with node factory
     * @param creationFunc method returning a ComponentNode implementation instance.
     */
    setFactory(componentName: string, creationFunc: SimpleFactory.CreateCallback): void;
    /**
     * Get componentName-to-nodeFactory link
     * @param componentName component name associated with node factory
     * @returns method returning a ComponentNode implementation instance.
     */
    getFactory(componentName: string): SimpleFactory.CreateCallback | null;
    /**
     * Set componentName-to-nodeFactory link.
     * @param componentName component name associated with node factory
     * @param updateFunc method returning a ComponentNode implementation instance.
     */
    setUpdateFactory(componentName: string, updateFunc: SimpleFactory.UpdateCallback): void;
    /**
     * Get componentName-to-nodeFactory link.
     * @param componentName component name associated with node factory
     * @returns method returning a ComponentNode implementation instance.
     */
    getUpdateFactory(componentName: string): SimpleFactory.UpdateCallback | null;
    /**
     * Get instance of simple factory
     */
    static getInstance(): SimpleFactory;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace SimpleFactory {
    type CreateCallback = (trajectoryData: Trajectory3d, componentData: WellBoreData.Elements) => Object3D | Mesh;
    type UpdateCallback = (trajectoryData: Trajectory3d, componentData: WellBoreData.Elements, component: Object3D) => Object3D | Mesh;
}
