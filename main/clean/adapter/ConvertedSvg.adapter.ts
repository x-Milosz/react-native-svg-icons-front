import { ConvertedSvgFactory } from "../../di/ConvertedSvg.factory";
import { AlertThunks } from "../../reducer/alert/alert.thunks";
import { AppThunk } from "../../reducer/store";
import { SvgThunks } from "../../reducer/svg/svg.thunks";
import { v4 as uuid } from "uuid";


class ConvertedSvgAdapter {
    private _convertedSvgFactory: ConvertedSvgFactory;

    constructor(convertedSvgFactory: ConvertedSvgFactory) {
        this._convertedSvgFactory = convertedSvgFactory;
    }

    public convertSvg = (svgId: number): AppThunk<Promise<boolean>> => async dispatch => {
        try {
            const convertSvgUseCase = this._convertedSvgFactory.getConvertedSvgCreateUseCase();
            const convertedSvg = await convertSvgUseCase.execute(svgId);

            if(convertedSvg.isError) {
                dispatch(AlertThunks.addAlertThunk({uuid: uuid(), message: convertedSvg.message, type: "error"}));
            }

            dispatch(SvgThunks.setConvertedSvgThunk(convertedSvg.entity));
            return true;
        } catch(e) {
            console.error("ConvertedSvgAdapter::convertSvg:", e);
            return false;
        }
    };
}

export const convertedSvgAdapter = new ConvertedSvgAdapter(new ConvertedSvgFactory());
