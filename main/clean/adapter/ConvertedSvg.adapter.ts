import { ConvertedSvgFactory } from "../../di/ConvertedSvg.factory";
import { AppThunk } from "../../reducer/store";
import { SvgThunks } from "../../reducer/svg/svg.thunks";

export class ConvertedSvgAdapter {
    private _convertedSvgFactory: ConvertedSvgFactory;

    constructor(convertedSvgFactory: ConvertedSvgFactory) {
        this._convertedSvgFactory = convertedSvgFactory;
    }

    public convertSvg = (svgId: number): AppThunk<Promise<boolean>> => async dispatch => {
        try {
            const convertSvgUseCase = this._convertedSvgFactory.getConvertedSvgCreateUseCase();
            const convetedSvg = await convertSvgUseCase.execute(svgId);
            dispatch(SvgThunks.setConvertedSvgThunk(convetedSvg.entity));
            return true;
        } catch(e) {
            console.error(e);
            return false;
        }
    }
}
