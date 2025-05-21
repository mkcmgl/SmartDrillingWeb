/**
 * @module geotoolkit/seismic/data/DataFormatLengthCalculator
 */
import { DataFormatType } from '@int/geotoolkit/seismic/data/DataFormatType';
import { SampleDataFormatType } from '@int/geotoolkit/seismic/data/SampleDataFormatType';
export declare const SeismicHeaderFieldType: {
    Undefined: number;
    LineNumber: number;
    TracesPerEnsemble: number;
    AuxTracesPerEnsemble: number;
    SampleInterval: number;
    SamplesPerTrace: number;
    DataFormatCode: number;
    TracesPerCdpEnsemble: number;
    MeasurmentSystem: number;
    SegyRevisionNumber: number;
    FixedLengthFlag: number;
    MaximumSamplesPerTrace: number;
    NumberOfExtensions: number;
    StartValue: number;
    TraceSequenceNumber: number;
    FieldRecord: number;
    FieldTrace: number;
    ShotpointId: number;
    CdpNumber: number;
    CdpTrace: number;
    TraceId: number;
    VertSum: number;
    HorzSum: number;
    DataUse: number;
    Offset: number;
    RecElevation: number;
    SourceElev: number;
    SourceDepth: number;
    DatumRecElevation: number;
    DatumSrcElevation: number;
    WaterSrcDepth: number;
    WaterGrpDepth: number;
    ElevationScaler: number;
    LocScaler: number;
    SourceXLoc: number;
    SourceYLoc: number;
    ReceiverXLoc: number;
    ReceiverYLoc: number;
    CoordinateUnits: number;
    WeatheringVelocity: number;
    SubweatheringVelocity: number;
    SourceUpholeTime: number;
    ReceiverUpholeTime: number;
    SrcStaticCorrection: number;
    RcvStaticCorrection: number;
    TotalStaticCorrection: number;
    LagA: number;
    LagB: number;
    StartTime: number;
    MuteStart: number;
    MuteEnd: number;
    SamplesInTrace: number;
    SampleRate: number;
    CdpXLoc: number;
    CdpYLoc: number;
    InlineNumber: number;
    XlineNumber: number;
    ShotpointNumber: number;
    SurfTimeScale: number;
    UserDefined: number;
};
export declare const SeismicHeaderFieldKeyType: {
    NotKey: number;
    PrimaryKey: number;
    SecondaryKey: number;
    AnyKey: number;
};
/**
 * Define utility methods to return data format and sample format
 */
export declare class DataFormatLengthCalculator {
    /**
     * Return amount of bytes in this format
     * @param dataFormat data format
     * @throws {Error} if format is not supported
     */
    static getDataFormatLength(dataFormat: DataFormatType): number;
    /**
     * Return amount of bytes fro current sample format
     * @param sampleDataFormat sample format
     * @throws {Error} if format is not supported
     */
    static getSampleDataFormatLength(sampleDataFormat: SampleDataFormatType): number;
}
