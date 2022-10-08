import { ConvertedSvgFactory } from "../../di/ConvertedSvg.factory";

export class ConvertedSvgAdapter {
    private _convertedSvgFactory: ConvertedSvgFactory;

    constructor(convertedSvgFactory: ConvertedSvgFactory) {
        this._convertedSvgFactory = convertedSvgFactory;
    }
}
