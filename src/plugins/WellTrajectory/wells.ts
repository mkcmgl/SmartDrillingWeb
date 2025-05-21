import {MathUtil} from '@int/geotoolkit/util/MathUtil';
import {Util} from '@int/geotoolkit/renderer/util';
import {Matrix4, Shape, Vector3} from 'three';
import WellData from './data.json';
import {authorize, headers} from './IvaapAutorize';
import {RemoteWellLogDataSource} from '@int/geotoolkit/ivaapbackend/well/RemoteWellLogDataSource';
import {Well} from '@int/geotoolkit3d/util/well/Well';
import {UnitFactory} from '@int/geotoolkit/util/UnitFactory';
import {log} from '@int/geotoolkit/base';

const unitFactory = UnitFactory.getInstance();
unitFactory.addUnit('0.1 in', ['length'], '0.1inch', 'm', 0, 0.00254, 1, 0);
const ERROR_LOAD_WELLS = 'Cannot load wells from ivaap server';

type CommonWellDataType = {
    x: number[];
    y: number[];
    xRef: number;
    yRef: number;
    xDeviation: number[];
    yDeviation: number[];
    elevation: number[];
};

type ComplexLogArrayType = CommonWellDataType & {
    logData: number[][];
};

export type HorizonsLogArrayType = CommonWellDataType & {
    logData: number[][];
    horizons: {
        top: number;
        bot: number;
    }[];
};

type LogElevation = {
    e: number;
    x: number;
    y: number;
    xd: number;
    yd: number;
};

export type RemoteLogArrayType = CommonWellDataType & {
    zRef: number;
    logData: number[][];
    minValue: number;
    maxValue: number;
};

type WellPathType = {
    x: number[];
    y: number[];
    z: number[];
};

export type Well3410A44Type = CommonWellDataType & {
    dls: number[];
    incl: number[];
    azim: number[];
    mds: number[];
};

type WellPipe = {
    positions: Vector3[];
    normals: Vector3[];
    binormals: Vector3[];
    tangents: Vector3[];
    values: number[];
    radii: number[];
};

type Mgx02 = {
    x: number[];
    y: number[];
    elevation: number[];
    logs: {
        GR: {
            values: number[];
        };
        CALI: {
            values: number[];
        };
    };
    xRef: number;
    yRef: number;
    xDeviation: number[];
    yDeviation: number[];
};

const DEBUG = false;
const __wellSimplelogarray = {
    elevation: [-0, -5, -10, -15, -20, -25],
    x: [0, 0, 0, 0, 0, 0],
    y: [0, 0, 0, 0, 0, 0],
    xRef: null as number,
    yRef: null as number,
    xDeviation: null as number[],
    yDeviation: null as number[],
    logData: null as number[][]
};

let __wellComplexlogarray = {} as ComplexLogArrayType;
let __wellHorizonslogarray = {} as HorizonsLogArrayType;
let __wellRemotelogarray = {} as RemoteLogArrayType;
let __wellPipe: WellPipe = null;

export class Wells {
    private static computeDeviation (values: number[]): number[] {
        const dev = [];
        for (let i = 0; i < values.length; i++) {
            dev.push(values[i] - values[0]);
        }
        return dev;
    }

    private static extractValues (wellpath: WellPathType, size: number, tubeprecision: number) {
        const vertices = [];
        const normals = [];

        let j;
        const pts2d = this.createBezierEllipsis(tubeprecision);
        const ptscount = pts2d.length;
        const scalexy = new Vector3(1, 1, 1);
        const mat4 = new Matrix4();
        const angle = 0;
        const up = new Vector3(0, 0, -1);
        const zero = new Vector3();
        const vector3 = zero.clone();
        const orientedUp = zero.clone();
        const pathLength = wellpath.x.length;

        for (let i = 0; i < pathLength; i++) {
            scalexy.x = size * 2;
            scalexy.y = size * 2;
            let normalize;
            const current = new Vector3(wellpath.x[i], wellpath.y[i], wellpath.z[i]);
            let refAngle;
            if (i > 0) {
                normalize = vector3.set(wellpath.x[i], wellpath.y[i], wellpath.z[i])
                    .sub(new Vector3(wellpath.x[i - 1], wellpath.y[i - 1], wellpath.z[i - 1])).normalize();
                refAngle = Math.atan2(normalize.x * normalize.x + normalize.y * normalize.y, normalize.z * normalize.z);
                mat4.lookAt(zero, normalize, refAngle > 0.1745 ? orientedUp.set(0, 0, 1) : orientedUp.set(0, 1, 0));
            } else {
                normalize = vector3.set(wellpath.x[i + 1], wellpath.y[i + 1], wellpath.z[i + 1]).sub(current).normalize();
                refAngle = Math.atan2(normalize.x * normalize.x + normalize.y * normalize.y, normalize.z * normalize.z);
                mat4.lookAt(zero, normalize, refAngle > 0.17 ? orientedUp.set(0, 0, 1) : orientedUp.set(0, 1, 0));
            }

            for (j = 1; j < ptscount - 1; j++) {
                vector3.set(pts2d[j].x, pts2d[j].y, 0);
                vector3.multiply(scalexy); // Scale the ellipsis point in xy
                vector3.applyAxisAngle(up, angle); // Roll, using 'up' as the ellipsis is not oriented yet
                vector3.applyMatrix4(mat4); // Rotation 3D, rotates the point around the ellipsis center so that the ellipsis is orthogonal
                // to the path
                vector3.add(current); // Translation, translates the ellipsis point to be 'around' the wellpath
                vertices.push(vector3.x, vector3.y, vector3.z);
                vector3.sub(current).normalize();
                normals.push(vector3.x, vector3.y, vector3.z);
            }
        }

        return vertices;
    }

    private static computeSimpleLogArrayLogData (count: number) {
        const oneMdLogData = [];
        for (let sector = 0; sector < 8; sector++) {
            oneMdLogData.push(Math.cos(sector));
        }
        const logData = [];
        let md = 0;
        const mapFunc = (e: number) => Math.sin(md) * e;
        for (; md < count; md++) {
            logData.push(oneMdLogData.map(mapFunc));
        }
        return logData;
    }

    private static lerp (t0: LogElevation, t1: LogElevation, t: number) {
        const ret = {} as LogElevation;
        ret.e = t0.e + t * (t1.e - t0.e);
        ret.x = t0.x + t * (t1.x - t0.x);
        ret.y = t0.y + t * (t1.y - t0.y);
        ret.xd = t0.xd + t * (t1.xd - t0.xd);
        ret.yd = t0.yd + t * (t1.yd - t0.yd);
        return ret;
    }

    private static generateLogArrayHor (complexlogarray: HorizonsLogArrayType, factor: number) {
        const well3410A44 = this.getWell_34_10_A_44();
        const length = well3410A44.elevation.length;
        for (let i = 0; i < ((length - 1) * factor); i++) {
            const index = Math.floor(i / factor);

            const e0 = index === 0 ? -200 : well3410A44.elevation[index];
            const e1 = well3410A44.elevation[index + 1];
            const l = this.lerp({
                e: e0,
                x: well3410A44.x[index],
                y: well3410A44.y[index],
                xd: well3410A44.xDeviation[index],
                yd: well3410A44.yDeviation[index]
            }, {
                e: e1,
                x: well3410A44.x[index + 1],
                y: well3410A44.y[index + 1],
                xd: well3410A44.xDeviation[index + 1],
                yd: well3410A44.yDeviation[index + 1]
            }, (i % factor) / factor);

            complexlogarray.elevation[i] = l.e;
            complexlogarray.x[i] = l.x;
            complexlogarray.y[i] = l.y;
            complexlogarray.xDeviation[i] = l.xd;
            complexlogarray.yDeviation[i] = l.yd;
            complexlogarray.logData[i] = [];

            for (let j = 0; j < 64; j++) {
                let le = 14;
                le += le % 2;
                complexlogarray.logData[i][j] = MathUtil.getSeededRandom(0, 1, 7) * 30;
            }
        }

        complexlogarray.horizons = [];
        const array = this.extractValues({
            x: complexlogarray.xDeviation,
            y: complexlogarray.yDeviation,
            z: complexlogarray.elevation
        }, 30, 64 / 4);
        let top = -1;
        let bot = -1;
        for (let ii = 0; ii < array.length / 3 - 2; ii++) {
            const slice = Math.floor(ii / 64);
            const sector = (ii - 16) % 64;

            if (sector === 32 && top === -1) {
                // const rand = Math.cos(array[ii * 3 + 2]) * 30;
                top = array[ii * 3 + 2];
                bot = array[ii * 3 + 2] - 30;
                complexlogarray.horizons.push({
                    top: top,
                    bot: bot
                });
            }
            if (top === -1) continue;
            if (array[ii * 3 + 2] <= top && array[ii * 3 + 2] >= bot) {
                complexlogarray.logData[slice][sector] = Math.sin(top) * 300;
            }

            if (array[ii * 3 + 2] < bot - 80) {
                top = -1;
                bot = -1;
            }
        }
    }

    private static createBezierEllipsis (tubeprecision: number) {
        const shape = new Shape();
        shape.moveTo(0, 0);
        const segments = Util.getEllipseBezierReferencePoints(0, 0, 1, 1);
        let segment = segments[0];
        shape.moveTo(segment.getX1(), segment.getY1());
        for (let i = 0; i < segments.length; ++i) {
            segment = segments[i];
            shape.bezierCurveTo(segment.getX2(), segment.getY2(), segment.getX3(), segment.getY3(), segment.getX4(), segment.getY4());
        }
        shape.closePath();
        return shape.extractPoints(tubeprecision).shape;
    }

    private static generateLogArrayCyl (complexlogarray: ComplexLogArrayType, factor: number) {
        const well3410A44 = this.getWell_34_10_A_44();
        const length = well3410A44.elevation.length;
        for (let i = 0; i < ((length - 1) * factor); i++) {
            const index = Math.floor(i / factor);
            const l = this.lerp({
                e: index === 0 ? -200 : well3410A44.elevation[index],
                x: well3410A44.x[index],
                y: well3410A44.y[index],
                xd: DEBUG ? (i > 200 ? complexlogarray.xDeviation[i - 1] + (i < 500 ? 5 : 0) : 0) : well3410A44.xDeviation[index],
                yd: DEBUG ? (i > 400 ? complexlogarray.yDeviation[i - 1] + 5 : 0) : well3410A44.yDeviation[index]
            }, {
                e: well3410A44.elevation[index + 1],
                x: well3410A44.x[index + 1],
                y: well3410A44.y[index + 1],
                xd: DEBUG ? (i > 200 ? complexlogarray.xDeviation[i - 1] + (i < 500 ? 5 : 0) : 0) : well3410A44.xDeviation[index + 1],
                yd: DEBUG ? (i > 400 ? complexlogarray.yDeviation[i - 1] + 5 : 0) : well3410A44.yDeviation[index + 1]
            }, (i % factor) / factor);

            complexlogarray.elevation[i] = l.e;
            complexlogarray.x[i] = l.x;
            complexlogarray.y[i] = l.y;
            complexlogarray.xDeviation[i] = l.xd;
            complexlogarray.yDeviation[i] = l.yd;
            complexlogarray.logData[i] = [];
            for (let j = 0; j < 64; j++) {
                let le = 14;
                le += le % 2;
                let def = Math.abs(Math.cos(i % (MathUtil.getSeededRandom(0, 1, 7) * 10)) / 3) +
                    (i % 50 === 0 ? Math.abs(Math.sin(i / 50)) : 0);
                if (i % 37 < 3) {
                    def += Math.abs(Math.sin(i / 37));
                } else if (i % 40 < 10) {
                    def *= 1.5;
                }

                if (j % 17 < 3) {
                    def /= 1.3;
                }

                complexlogarray.logData[i][j] = def * 75;
            }
        }
    }

    public static getWell_34_10_A_44 (): Well3410A44Type {
        const well3410A44 = WellData.well_34_10_A_44 as Well3410A44Type;
        if (well3410A44['xRef'] == null) {
            well3410A44.xRef = well3410A44.x[0];
            well3410A44.yRef = well3410A44.y[0];

            well3410A44.xDeviation = this.computeDeviation(well3410A44.x);
            well3410A44.yDeviation = this.computeDeviation(well3410A44.y);
        }
        return well3410A44;
    }

    public static getWell_mgx_02 () {
        const wellMgx02 = WellData.well_mgx_02 as Mgx02;
        if (wellMgx02.x == null) {
            const well3410A44 = this.getWell_34_10_A_44();
            wellMgx02.x = [];
            for (let i = 0; i < 250; i++) {
                for (let j = 0; j < 6; j++) {
                    wellMgx02.x[i * 6 + j] = well3410A44.x[i] + j * (well3410A44.x[i + 1] - well3410A44.x[i]) / 6;
                    wellMgx02.y[i * 6 + j] = well3410A44.y[i] + j * (well3410A44.y[i + 1] - well3410A44.y[i]) / 6;
                    wellMgx02.elevation[i * 6 + j] = well3410A44.elevation[i] +
                        j * (well3410A44.elevation[i + 1] - well3410A44.elevation[i]) / 6;
                }
            }

            wellMgx02.xRef = wellMgx02.x[0];
            wellMgx02.yRef = wellMgx02.y[0];
            wellMgx02.xDeviation = this.computeDeviation(wellMgx02.x);
            wellMgx02.yDeviation = this.computeDeviation(wellMgx02.y);
        }
        return wellMgx02;
    }

    public static getWell_simplelogarray () {
        let wellSimpleLogArray = __wellSimplelogarray;
        if (wellSimpleLogArray.xRef == null) {
            wellSimpleLogArray = __wellSimplelogarray;
            wellSimpleLogArray.xRef = wellSimpleLogArray.x[0];
            wellSimpleLogArray.yRef = wellSimpleLogArray.y[0];
            wellSimpleLogArray.xDeviation = this.computeDeviation(wellSimpleLogArray.x);
            wellSimpleLogArray.yDeviation = this.computeDeviation(wellSimpleLogArray.y);
            wellSimpleLogArray.logData = this.computeSimpleLogArrayLogData(wellSimpleLogArray.y.length);
        }
        return wellSimpleLogArray;
    }

    public static getWell_complexlogarray (): ComplexLogArrayType {
        if (__wellComplexlogarray.xRef == null) {
            const well3410A44 = this.getWell_34_10_A_44();
            __wellComplexlogarray = {
                elevation: [],
                x: [],
                y: [],
                xRef: well3410A44.xRef,
                yRef: well3410A44.yRef,
                xDeviation: [],
                yDeviation: [],
                logData: []
            };
            this.generateLogArrayCyl(__wellComplexlogarray, 100);
        }
        return __wellComplexlogarray;
    }

    public static getWell_horizonslogarray (): HorizonsLogArrayType {
        if (__wellHorizonslogarray.xRef == null) {
            const well3410A44 = this.getWell_34_10_A_44();
            __wellHorizonslogarray = {
                elevation: [],
                x: [],
                y: [],
                xRef: well3410A44.xRef,
                yRef: well3410A44.yRef,
                xDeviation: [],
                yDeviation: [],
                logData: [],
                horizons: []
            };
            this.generateLogArrayHor(__wellHorizonslogarray, 3);
        }
        return __wellHorizonslogarray;
    }

    public static getWell_remotelogarray (): Promise<RemoteLogArrayType> {
        if (__wellRemotelogarray.xRef == null) {
            return this.getRemoteWellData().then((result) => {
                const {trajectoryData, logArrayData} = result;
                const {depths, values, indexUnit: logArrayIndexUnit} = logArrayData;
                const {x, y, md, tvd, indexUnit: trajIndexUnit} = trajectoryData;
                const logArrayUnit = unitFactory.getUnit(logArrayIndexUnit);
                const depthsConverted = depths.map((depth) => logArrayUnit.convert(depth, trajIndexUnit));
                const resampled = Well.resampleLinear(depthsConverted, values, x, y, md, tvd);
                let {x: xs, y: ys, tvds: zs} = resampled;
                const xRef = xs[0], yRef = ys[0], zRef = -zs[0];
                xs = xs.map((value) => value - xRef);
                ys = ys.map((value) => value - yRef);
                zs = zs.map((value) => -value - zRef);
                __wellRemotelogarray = {
                    elevation: zs,
                    x,
                    y,
                    xRef,
                    yRef,
                    zRef,
                    xDeviation: xs,
                    yDeviation: ys,
                    logData: resampled.values as number[][],
                    minValue: logArrayData.minValue,
                    maxValue: logArrayData.maxValue
                };
                return __wellRemotelogarray;
            });
        }
        return Promise.resolve(__wellRemotelogarray);
    }

    private static getRemoteWellData () {
        const wellsServiceUrl = 'https://pub.ivaap.int.com/ivaap/api/ds/mongo/v1/sources/e7b82fa5-6186-404f-994a-d50c18bb23ec/wells';
        const wellsServiceDataSource = new RemoteWellLogDataSource();
        let logData: RemoteWellLogDataSource.LogDataset = null;
        let deviationData: RemoteWellLogDataSource.DeviationDataset = null;
        return authorize().then(() =>
            wellsServiceDataSource
                .setProperties({'requestheaders': headers})
                .loadWellsMeta(wellsServiceUrl).then((wellCollection) => {
                    const wellMeta = wellCollection['items'].find((wellMeta) => wellMeta['content']['name'] === '15/9-F-5');
                    return wellsServiceDataSource.loadWellData(wellMeta);
                }).then((wellData) =>
                    Promise.all([
                        wellsServiceDataSource.loadLogsMeta(wellData),
                        wellsServiceDataSource.loadDeviationsMeta(wellData)
                    ])
                ).then((result) => {
                    const logMeta = result[0].items.find(
                        (meta) => meta['content']['name'] === 'QC Data/15/9-F-5/&0&B34604_2'
                    );
                    const deviationMeta = result[1]['items'][0];
                    return Promise.all([
                        wellsServiceDataSource.loadLogData(logMeta),
                        wellsServiceDataSource.loadDeviationData(deviationMeta)
                    ]);
                }).then((result) => {
                    logData = result[0];
                    const curveInfoList = logData['content']['curveInfoList'];
                    const curveInfo = curveInfoList.find((info) => info['name'] === 'SPT4');
                    const curveIds = [curveInfo['dataUID']];
                    const minIndex = curveInfo['minIndex'];
                    const maxIndex = curveInfo['maxIndex'];
                    const indexType = logData['content']['indexInfo']['indexType'];
                    deviationData = result[1];
                    return Promise.all([
                        wellsServiceDataSource.loadLogCurveValues(logData, curveIds, minIndex, maxIndex, indexType),
                        wellsServiceDataSource.loadDeviationCurveValues(deviationData)
                    ]);
                }).then((result) => {
                    const logArrayCurves = result[0];
                    const deviationCurves = result[1];
                    const getDataByName = (curvesArray: RemoteWellLogDataSource.CurveInfo[], name: string): number[] => {
                        const curve = curvesArray.find((data: RemoteWellLogDataSource.CurveInfo) => data['name'].toLowerCase() === name);
                        return curve != null ? curve['data'] as number[] : null;
                    };
                    const depthsCurve = logArrayCurves.find((curve) => !Array.isArray(curve['data'][0]));
                    let depths = depthsCurve['data'] as number[];

                    const arrayCurve = logArrayCurves.find((curve) => Array.isArray(curve['data'][0]));
                    let values = arrayCurve['data'] as number[][];

                    const logArrayIndexUnit = logData['content']['indexInfo']['unitName'];
                    if (depths.length > 1 && depths[0] > depths[1]) {
                        depths = depths.reverse();
                        values = values.reverse();
                    }
                    const logArrayCurveInfo = logData['content']['curveInfoList'].find((info) => info['name'] === 'SPT4');
                    const deviationCurveInfoList = deviationData['content']['curveInfoList'];
                    const deviationIndexInfo = deviationCurveInfoList.find((info) => info['name'].toLowerCase() === 'md');
                    return {
                        'trajectoryData': {
                            'x': getDataByName(deviationCurves, 'x'),
                            'y': getDataByName(deviationCurves, 'y'),
                            'md': getDataByName(deviationCurves, 'md'),
                            'tvd': getDataByName(deviationCurves, 'tvdss'),
                            'indexUnit': deviationIndexInfo['unitName']
                        },
                        'logArrayData': {
                            'name': arrayCurve['name'],
                            'depths': depths,
                            'values': values,
                            'minValue': logArrayCurveInfo['dataStats']['dataMin'],
                            'maxValue': logArrayCurveInfo['dataStats']['dataMax'],
                            'emptyValue': logArrayCurveInfo['emptyValue'],
                            'nullValue': logArrayCurveInfo['nullValue'],
                            'indexUnit': logArrayIndexUnit
                        }
                    };
                })
        ).catch((error) => {
            log(error);
            throw new Error(ERROR_LOAD_WELLS);
        });
    }

    public static getWell_pipe () {
        if (__wellPipe == null) {
            const well3410A44 = this.getWell_34_10_A_44();
            let i;
            const length = well3410A44.x.length;
            const positions = [], normals = [], binormals = [], tangents = [], values = [], radii = [];
            for (i = 0; i < length; i++) {
                positions.push(new Vector3(well3410A44.xDeviation[i], well3410A44.yDeviation[i], well3410A44.elevation[i]));
                values.push(well3410A44.dls[i]);
            }
            tangents.push(new Vector3().copy(positions[1]).sub(positions[0]).normalize());
            radii.push(Math.abs(well3410A44.azim[0]) + Math.abs(well3410A44.incl[0]));
            for (i = 1; i < length - 1; i++) {
                tangents.push(new Vector3().copy(positions[i + 1]).sub(positions[i - 1]).normalize());
                radii.push(radii[i - 1] + Math.abs(well3410A44.azim[i]) + Math.abs(well3410A44.incl[i]));
            }
            tangents.push(new Vector3().copy(positions[length - 1]).sub(positions[length - 2]).normalize());
            tangents.push(new Vector3(0, 0, 0));
            radii.push(radii[length - 2] + Math.abs(well3410A44.azim[length - 1]) + Math.abs(well3410A44.incl[length - 1]));
            const tmp = new Vector3();
            let min = Number.MAX_VALUE;
            const tx = Math.abs(tangents[0].x);
            const ty = Math.abs(tangents[0].y);
            const tz = Math.abs(tangents[0].z);
            if (tx <= min) {
                min = tx;
                tmp.set(1, 0, 0);
            }
            if (ty <= min) {
                min = ty;
                tmp.set(0, 1, 0);
            }
            if (tz <= min) {
                tmp.set(0, 0, 1);
            }
            const offset = 10 - radii[0];
            const scale = (100 - 10) / (radii[0] + radii[radii.length - 1]);
            normals.push(new Vector3().crossVectors(tangents[0], tmp.crossVectors(tangents[0], tmp)));
            binormals.push(new Vector3().crossVectors(tangents[0], normals[0]));
            for (i = 1; i <= length; i++) {
                normals.push(new Vector3().copy(normals[i - 1]).applyMatrix4(
                    new Matrix4().makeRotationAxis(tmp.crossVectors(tangents[i - 1], tangents[i]).normalize(),
                        Math.acos(MathUtil.clamp(tangents[i - 1].dot(tangents[i]), -1, 1)))
                ));
                binormals.push(new Vector3().crossVectors(tangents[i], normals[i]));
                radii[i - 1] = radii[i - 1] * scale + offset;
            }
            __wellPipe = {
                'positions': positions,
                'normals': normals,
                'binormals': binormals,
                'tangents': tangents,
                'values': values,
                'radii': radii
            };
        }
        return __wellPipe;
    }
}
