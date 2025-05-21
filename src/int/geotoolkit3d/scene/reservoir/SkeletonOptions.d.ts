import type { Color } from 'three';
import type { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
/**
 * The skeleton options
 */
export declare type SkeletonOptions = {
    /**
     * The skeleton color
     */
    color?: string | Color;
    /**
     * The skeleton width
     */
    linewidth?: number;
    /**
     * The significant horizons parameters
     */
    horizons?: ResHorizonParams[];
};
/**
 * The significant horizon type
 */
declare type ResHorizonParams = {
    /**
     * The K index of this horizon
     */
    horizonk: number;
    /**
     * The color index of this horizon
     */
    color: string | RgbaColor;
};
export {};
