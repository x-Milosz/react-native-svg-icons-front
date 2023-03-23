import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IsMobileDrawerOpenT } from "./util.types";

export interface UtilStateI {
    isMobileDrawerOpen: IsMobileDrawerOpenT
}

const initialState: UtilStateI = {
    isMobileDrawerOpen: false,
};

const utilSlice = createSlice({
    name: "util",
    initialState,
    reducers: {
        setIsMobileDrawerOpen: (state, action: PayloadAction<IsMobileDrawerOpenT>) => {
            state.isMobileDrawerOpen = action.payload;
        }
    }
});

export const {setIsMobileDrawerOpen} = utilSlice.actions;
export default utilSlice.reducer;
