import {LogCurve} from '@int/geotoolkit/welllog/LogCurve';
import {MathUtil} from '@int/geotoolkit/util/MathUtil';
import {LogData} from '@int/geotoolkit/welllog/data/LogData';
import curveData from './curves.json';

const getCurveData = function (mnemonic: string): number[] {
    return (curveData as Record<string, number[]>)[mnemonic];
};

const createCurve = function (from: number, step: number, curveMnemonic: string, color: string): LogCurve {
    const values = (curveData as Record<string, number[]>)[curveMnemonic];
    const depths = values.map((v, i) => (from + i * step));
    const data = new LogData().setValues(depths, values, null, true);
    const limits = MathUtil.calculateNeatLimits(data.getMinValue(), data.getMaxValue(), false, false);
    return new LogCurve(data)
        .setName(curveMnemonic)
        .setNormalizationLimits(limits)
        .setLineStyle(color);
};
export {createCurve, curveData, getCurveData};
