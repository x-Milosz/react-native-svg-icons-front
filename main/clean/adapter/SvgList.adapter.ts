import { SvgStateI } from "./../../reducer/svg/svg.slice";
import { KeyValueSliceObjectT } from "./../../reducer/common/sliceObjects.types";
import { AppThunk } from "../../reducer/store";
import { SvgThunks } from "../../reducer/svg/svg.thunks";
import { SvgListFactory } from "../../di/SvgList.factory";
import { AlertThunks } from "../../reducer/alert/alert.thunks";
import { v4 as uuid } from "uuid";


class SvgListAdapter {
    private _svgListFactory: SvgListFactory;

    constructor(svgListFactory: SvgListFactory) {
        this._svgListFactory = svgListFactory;
    }

    public fetchSvgList = (): 
        AppThunk<Promise<boolean>> => async (dispatch, getState) => {
        try {
            if(getState().svg.isSvgListLoading) {
                throw new Error("tried to invoke fetchSvgList while it is loading");
            }

            dispatch(SvgThunks.setIsSvgListLoadingThunk(true));
            const fetchListUseCase = this._svgListFactory.getSvgListFetchPageUseCase();
            const params = getState().svg.svgListParams;
            const svgList = await fetchListUseCase.execute(params.page, params.pageSize, params.search);

            if(svgList.isError) {
                dispatch(AlertThunks.addAlertThunk({uuid: uuid(), message: svgList.message, type: "error"}));
            }

            dispatch(SvgThunks.setSvgListThunk(svgList.entity));
            dispatch(SvgThunks.setIsSvgListLoadingThunk(false));
            return true;
        } catch(e) {
            dispatch(SvgThunks.setIsSvgListLoadingThunk(false));
            console.error("SvgListAdapter::fetchSvgList:", e);
            return false;
        }
    };


    public changeSvgListParamAndFetch = <T extends SvgStateI["svgListParams"], K extends keyof SvgStateI["svgListParams"], L extends T[K]>
    (param: K, value: L): AppThunk<Promise<boolean>> => async (dispatch) => {
        try {
            dispatch(SvgThunks.setSvgListParamThunk({key: param, value: value}));
            return await dispatch(this.fetchSvgList());
        } catch(e) {
            console.error("SvgListAdapter::changeSvgListParamAndFetch:", e);
            return false;
        }
    };

    public searchSvgAndFetch = (svgName: string): AppThunk<Promise<boolean>> => async (dispatch) => {
        try {
            dispatch(SvgThunks.setSvgListParamsThunk({
                page: 1,
                pageSize: 49,
                search: svgName,
            }));
            return await dispatch(this.fetchSvgList());
        } catch(e) {
            console.error("SvgListAdapter::searchSvgAndFetch:", e);
            return false;
        }
    };
}

export const svgListAdapter = new SvgListAdapter(new SvgListFactory());
