import { KeyValueSliceObjectT } from "../common/sliceObjects.types";
import { AppThunk } from "./../store";
import { setConvertedSvg, setIsSvgListLoading, setSvgList, setSvgListParam, setSvgListParams } from "./svg.slice";
import { ConvertedSvgT, IsSvgListLoadingT, SvgListParamsT, SvgListT } from "./svg.types";

export namespace SvgThunks {
    export const setSvgListThunk = (svgList: SvgListT): AppThunk => dispatch => {
        dispatch(setSvgList(svgList));
    };

    export const setConvertedSvgThunk = (convertedSvg: ConvertedSvgT): AppThunk => dispatch => {
        dispatch(setConvertedSvg(convertedSvg));
    };

    export const setSvgListParamsThunk = (svgListParams: SvgListParamsT): AppThunk => dispatch => {
        dispatch(setSvgListParams(svgListParams));
    };

    export const setSvgListParamThunk = <T extends keyof SvgListParamsT>
        (svgListParam: KeyValueSliceObjectT<SvgListParamsT, T>): AppThunk => dispatch => {
            dispatch(setSvgListParam(svgListParam));
        };
    
    export const setIsSvgListLoadingThunk = (isLoading: IsSvgListLoadingT): AppThunk => dispatch => {
        dispatch(setIsSvgListLoading(isLoading));
    };
}
