import { AppThunk } from "./../store";
import { setSvgList } from "./svg.slice";
import { SvgListT } from "./svg.types";

export namespace SvgThunks {
    export const setSvgListThunk = (svgList: SvgListT): AppThunk => dispatch => {
        dispatch(setSvgList(svgList));
    };
}
