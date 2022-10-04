import { AppThunk } from "./../store";
import { setConvertedSvg, setSvgList } from "./svg.slice";
import { ConvertedSvgT, SvgListT } from "./svg.types";

export namespace SvgThunks {
    export const setSvgListThunk = (svgList: SvgListT): AppThunk => dispatch => {
        dispatch(setSvgList(svgList));
    };

    export const setConvertedSvgThunk = (convertedSvg: ConvertedSvgT): AppThunk => dispatch => {
        dispatch(setConvertedSvg(convertedSvg));
    };
}
