import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import { SampleDataFormatType } from '@int/geotoolkit/seismic/data/SampleDataFormatType';
/**
 * IndexType enumerator, describes the index type of the underlying seismic
 * @enum
 * @readonly
 */
export declare enum IndexType {
    /**
     * Non indexed seismic
     */
    NonIndexed = "nonindexed",
    /**
     * Seismic 2D line
     */
    TwoD = "2d",
    /**
     * A Seismic Volume, has at least 3 keys see getIndexKeyNames()
     */
    Volume = "volume",
    /**
     * Seismic Gather, has at least 4 keys see getIndexKeyNames()
     */
    Gather = "gather",
    /**
     * Custom index type
     */
    Custom = "custom"
}
/**
 * Seismic meta data is a map of general properties of the seismic data source like: number of traces, sample rate, ...
 * The seismic toolkit creates instances of SeismicMetaData inside the toolkit.
 * Toolkit users do not need to create instances of this class.
 */
export declare class SeismicMetaData {
    /**
     * Creates meta data
     * @param [samplePower] An integer power of 10 that is multiplied by the sample rate from the seismic dataset header before
     * the sample rate is used. Defaults to -6 if not specified. This default value implies that the sample rate in the dataset is
     * stored in micro-seconds.
     */
    constructor(samplePower?: number);
    /**
     * Sets options
     * @param options options
     * @returns this
     */
    setOptions(options: SeismicMetaData.Options): this;
    /**
     * Returns the index type of the under
     */
    getIndexType(): IndexType;
    /**
     * Returns the volume key names IF available, null otherwise.
     * Those keys are the grid coordinates key names that can eventually be used to map IJ to XY
     * @returns Json containing key names
     */
    getVolumeKeyNames(): SeismicMetaData.VolumeKeyNames;
    /**
     * Returns the volume default key names If available, null otherwise.
     * Those keys are the grid coordinates key names that may eventually be used to map IJ to XY
     * @returns Json containing default key names
     */
    getVolumeDefaultKeyNames(): SeismicMetaData.VolumeKeyNames;
    /**
     * Returns the XY key information IF available, null otherwise.
     * Those keys can be used to retrieve the X,Y coordinate of a given trace by looking up the values in the header.
     * @returns Json containing default key names
     */
    getXYKeyInformation(): SeismicMetaData.XYKeyInformation;
    /**
     * Returns the sample unit
     */
    getZUnit(): AbstractUnit;
    /**
     * Returns start value of first sample.
     */
    getStartValue(): number;
    /**
     * Gets the sample rate for the seismic data. The sample rate is
     * specified in the units returned by <c>getZUnit()<c>.
     */
    getSampleRate(): number;
    /**
     * Returns sample data format
     */
    getSampleDataFormat(): SampleDataFormatType;
    /**
     * Gets the samples per trace
     */
    getSamplesPerTrace(): number;
    /**
     * Gets the number of traces
     */
    getNumberOfTraces(): number;
    /**
     * Gets trace size in bytes
     */
    getTraceSize(): number;
    /**
     * Gets the sections.<br>
     * <br>
     * Sections describes any optional seismic subdivisions.<br>
     * This is typically used to identify seismic panels in an arbitrary line.<br>
     * @returns The sections
     */
    getSections(): number[];
    /**
     * Gets EBCDIC header information or text.
     *
     * @returns EBCDIC text, can be null.
     * @example
     * // to get EBCDIC information if it's available and assume you have pipeline instance.
     * pipeline.getReader().getMetaData().getEBCDICHeader();
     */
    getEBCDICHeader(): string | string[] | null;
    /**
     * Gets Binary header information or text.
     *
     * @returns Binary header text, which can also be null.
     * @example
     * // to get binary header information if it's available and assume you have pipeline instance.
     * pipeline.getReader().getMetaData().getBinaryHeader();
     */
    getBinaryHeader(): string;
    /**
     * Return sample size in bytes
     */
    getSampleSize(): number;
    /**
     * Return sample null value
     */
    getNullSampleValue(): number;
    /**
     * Return trace header size in bytes
     */
    getTraceHeaderSize(): number;
    /**
     * Return header line size in bytes
     */
    getLineHeadersSize(): number;
    /**
     * Create a copy of seismic meat data
     * @returns a new instance of meta data
     */
    clone(): SeismicMetaData;
    getClassName(): string;
    static getClassName(): string;
}
export declare namespace SeismicMetaData {
    /**
     * options
     */
    type Options = {
        /**
         * binary header information
         */
        binaryinfo?: string;
        /**
         * Ebcdic info
         */
        ebcdicinfo?: string | string[];
        /**
         * Sections describes optional seismic panels in the resulting traces
         */
        sections?: number[];
        /**
         * number of traces
         */
        numberoftraces?: number;
        /**
         * samples per trace
         */
        samplespertrace?: number;
        /**
         * sample rate
         */
        samplerate?: number;
        /**
         * Z unit;
         */
        zunit?: AbstractUnit;
        /**
         * start sample value
         */
        startvalue?: number;
        /**
         * the XY key information IF available, null otherwise
         */
        xykeyinformation?: XYKeyInformation;
        /**
         * the volume default key names If available, null otherwise
         */
        volumedefaultkeynames?: VolumeKeyNames;
        /**
         * the volume key names IF available, null otherwise
         */
        volumekeynames?: VolumeKeyNames;
        /**
         * the index type of the under
         */
        indextype?: IndexType;
        /**
         * sample size in bytes
         */
        samplesize?: number;
        /**
         * header line size
         */
        lineheaderssize?: number;
        /**
         * trace header size
         */
        traceheadersize?: number;
        /**
         * trace size in bytes
         */
        tracesize?: number;
        /**
         * trace data size
         */
        tracedatasize?: number;
        /**
         * sample null Value
         */
        nullsamplevalue?: number;
        /**
         * sample data format
         */
        sampledataformat?: SampleDataFormatType;
        /**
         * header data
         */
        headerdata?: any;
    };
    /**
     * Json containing key names
     */
    type VolumeKeyNames = {
        /**
         * key names
         */
        i?: string;
        /**
         * key names
         */
        j?: string;
    };
    /**
     * Json containing default key names
     */
    type XYKeyInformation = {
        /**
         * key information
         */
        x?: string;
        /**
         * key information
         */
        y?: string;
        /**
         * x key name
         */
        xKeyName?: string;
        /**
         * y key name
         */
        yKeyName?: string;
        /**
         * multiplier type
         */
        multiplierType?: string;
        /**
         * multiplier field name
         */
        multiplierFieldName?: string;
        /**
         * fixed multiplier
         */
        fixedMultiplier?: string;
    };
}
