import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { SvgList } from "../../clean/core/entity/SvgList.entity";
import { SvgListT } from "./svg.types";

interface SvgStateI {
    svgList: SvgListT
}

const initialState: SvgStateI = {
    svgList: new SvgList(0, 0, 0, [])
};

const svgSlice = createSlice({
    name: "svg",
    initialState,
    reducers: {
        setSvgList: (state, action: PayloadAction<SvgListT>) => {
            state.svgList = action.payload;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.svg,
            };
        },
    },
});

export const {setSvgList} = svgSlice.actions;
export default svgSlice.reducer;
