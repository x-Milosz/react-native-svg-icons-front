import { StringsFrontLogic } from "./../../front/forntlogic/Strings.frontlogic";
import { AppThunk } from "./../../reducer/store";
import { ConvertedSvgCopyFactory } from "./../../di/ConvertedSvgCopy.factory";

class ConvertedSvgCopyAdapter {
    private _convertedSvgCopyFactory: ConvertedSvgCopyFactory;

    constructor(convertedSvgCopyFactory: ConvertedSvgCopyFactory) {
        this._convertedSvgCopyFactory = convertedSvgCopyFactory;
    }

    public copyConvertedSvg = (locale?: string): AppThunk<Promise<boolean>> => async (dispatch, getState) => {
        try {
            const convertedSvgCopyUseCase = this._convertedSvgCopyFactory.getConvertedSvgCopyAsyncUseCase();
            const strings = StringsFrontLogic.getProperLanguagePack(locale)["convertedSvgCopy"];
            const convertedSvg = getState().svg.convertedSvg; 
            const response = await  convertedSvgCopyUseCase.execute(convertedSvg, strings);
            return response.isError;
        } catch(e) {
            console.error("ConvertedSvgCopyAdapter::copyConvertedSvg:", e);
            return false;
        }
    };
}

export const convertedSvgCopyAdapter = new ConvertedSvgCopyAdapter(new ConvertedSvgCopyFactory());
