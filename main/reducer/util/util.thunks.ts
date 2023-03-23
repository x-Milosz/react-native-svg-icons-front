import { AppThunk } from "./../store";
import { setIsMobileDrawerOpen } from "./util.slice";

export namespace UtilThunks {
    export const setIsMobileDrawerOpenThunk = (isMobileDrawerOpen: boolean): AppThunk => dispatch => {
        dispatch(setIsMobileDrawerOpen(isMobileDrawerOpen));
    };
}
