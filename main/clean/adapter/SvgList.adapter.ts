import { AppThunk } from "../../reducer/store";
import { SvgThunks } from "../../reducer/svg/svg.thunks";
import { SvgListFactory } from "./../../di/SvgListFactory.factory";

class SvgListAdapter {
    private _svgListFactory: SvgListFactory;

    constructor(svgListFactory: SvgListFactory) {
        this._svgListFactory = svgListFactory;
    }

    public fetchSvgList = (page?: number, pageSize?: number, search?: string): 
        AppThunk<Promise<boolean>> => async dispatch => {
        try {
            const fetchListUseCase = this._svgListFactory.getSvgListFetchPageUseCase();
            const svgList = await fetchListUseCase.execute(page, pageSize, search);
            dispatch(SvgThunks.setSvgListThunk(svgList));
            return true;
        } catch(e) {
            console.error(e);
            return false;
        }
    };
}