import { AbstractFactory } from '@int/geotoolkit/gauges/AbstractFactory';
import { VerticalBoxFillGauge } from '@int/geotoolkit/gauges/defaults/VerticalBoxFillGauge';
import { AnnotatedFillGauge } from '@int/geotoolkit/gauges/defaults/AnnotatedFillGauge';
import { ArcIndicatorCircular } from '@int/geotoolkit/gauges/defaults/ArcIndicatorCircular';
import { BandCircular } from '@int/geotoolkit/gauges/defaults/BandCircular';
import { ClassicCircular } from '@int/geotoolkit/gauges/defaults/ClassicCircular';
import { CoveredNeedleCircular } from '@int/geotoolkit/gauges/defaults/CoveredNeedleCircular';
import { DoubleAxisCircular } from '@int/geotoolkit/gauges/defaults/DoubleAxisCircular';
import { DoubleFanHalfCircular } from '@int/geotoolkit/gauges/defaults/DoubleFanHalfCircular';
import { EllipseFillGauge } from '@int/geotoolkit/gauges/defaults/EllipseFillGauge';
import { HalfCircularSimple } from '@int/geotoolkit/gauges/defaults/HalfCircularSimple';
import { HorizontalBoxFillGauge } from '@int/geotoolkit/gauges/defaults/HorizontalBoxFillGauge';
import { HorizontalNumeric } from '@int/geotoolkit/gauges/defaults/HorizontalNumeric';
import { HorizontalTraffic } from '@int/geotoolkit/gauges/defaults/HorizontalTraffic';
import { ModernCircular } from '@int/geotoolkit/gauges/defaults/ModernCircular';
import { Pressure } from '@int/geotoolkit/gauges/defaults/Pressure';
import { SegmentedBandCircular } from '@int/geotoolkit/gauges/defaults/SegmentedBandCircular';
import { SimpleNumeric } from '@int/geotoolkit/gauges/defaults/SimpleNumeric';
import { SimpleQuarterCircular } from '@int/geotoolkit/gauges/defaults/SimpleQuarterCircular';
import { ThreeBandCircular } from '@int/geotoolkit/gauges/defaults/ThreeBandCircular';
import { TrendingNumeric } from '@int/geotoolkit/gauges/defaults/TrendingNumeric';
import { UnevenCircular } from '@int/geotoolkit/gauges/defaults/UnevenCircular';
import { VerticalTraffic } from '@int/geotoolkit/gauges/defaults/VerticalTraffic';
import { ZonedHalfCircular } from '@int/geotoolkit/gauges/defaults/ZonedHalfCircular';
/**
 * Implements a registry for gauge implementations (factories)
 */
export declare class GaugeRegistry {
    constructor();
    /**
     * Gets an instance of gauge registry
     * @returns registry
     */
    static getDefaultInstance(): GaugeRegistry;
    /**
     * Registers a factory to the registry, indexing is done by the name
     * @param name Name of factory to register
     * @param factory Factory or its classname to register
     */
    register(name: string | Record<string, AbstractFactory> | AbstractFactory[], factory: AbstractFactory | string): this;
    /**
     * Registers in a default factory to the registry, indexing is done by the name
     * @param name Name of factory to register
     * @param factory Factory or its classname to register
     */
    static register(name: string, factory: AbstractFactory | string): GaugeRegistry;
    /**
     * Removes a factory from the registry
     * @param name Name of the factory which has to be removed
     */
    unregister(name: string): this;
    /**
     * Removes every factory from the registry
     */
    clear(): this;
    /**
     * Returns true if a factory with provided name is registered
     * @param name Name of the gauge factory to look for
     */
    contains(name: string): boolean;
    /**
     * Returns an instance of a gauge created by the factory which
     * has been registered with provided name. Returns null if no such
     * factory has been registered
     * @param name Name of the registered factory
     * @param properties properties that have to be overridden
     */
    createGauge<E extends keyof GaugesMap>(type?: E, properties?: Parameters<GaugesMap[E]['createGauge']>[0]): ReturnType<GaugesMap[E]['createGauge']>;
    /**
     * Gets the type of the gauge returned by one of the factories registered in this registry
     * and referred by the provided name.
     * @param name Name of the default gauge
     */
    getGaugeType(name: string): null | string;
    static getClassName(): string;
    getClassName(): string;
}
declare type GaugesMap = {
    VerticalBoxFillGauge: VerticalBoxFillGauge;
    AnnotatedFillGauge: AnnotatedFillGauge;
    ArcIndicatorCircular: ArcIndicatorCircular;
    BandCircular: BandCircular;
    ClassicCircular: ClassicCircular;
    CoveredNeedleCircular: CoveredNeedleCircular;
    DoubleAxisCircular: DoubleAxisCircular;
    DoubleFanHalfCircular: DoubleFanHalfCircular;
    EllipseFillGauge: EllipseFillGauge;
    HalfCircularSimple: HalfCircularSimple;
    HorizontalBoxFillGauge: HorizontalBoxFillGauge;
    HorizontalNumeric: HorizontalNumeric;
    HorizontalTraffic: HorizontalTraffic;
    ModernCircular: ModernCircular;
    Pressure: Pressure;
    SegmentedBandCircular: SegmentedBandCircular;
    SimpleNumeric: SimpleNumeric;
    SimpleQuarterCircular: SimpleQuarterCircular;
    ThreeBandCircular: ThreeBandCircular;
    TrendingNumeric: TrendingNumeric;
    UnevenCircular: UnevenCircular;
    VerticalTraffic: VerticalTraffic;
    ZonedHalfCircular: ZonedHalfCircular;
} & Record<string, AbstractFactory>;
export {};
