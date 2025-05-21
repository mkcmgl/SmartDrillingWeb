/**
 * @module geotoolkit/welllog/multiwell/IBaseWellTrack
 */
import { ITrack } from '@int/geotoolkit/welllog/ITrack';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
/**
 * Define a base interface for well track
 * @interface
 * @deprecated since 4.0. Use AbstractWellTrack directly instead
 */
export declare abstract class IBaseWellTrack extends ITrack {
    /**
     * Return track manipulator layer
     */
    abstract getManipulatorLayer(): CompositeNode;
}
