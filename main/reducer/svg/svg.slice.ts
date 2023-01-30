import { ConvertedSvg } from "./../../clean/core/entity/ConvertedSvg.entity";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { SvgList } from "../../clean/core/entity/SvgList.entity";
import { ConvertedSvgT, SvgListT } from "./svg.types";

interface SvgStateI {
    svgList: SvgListT;
    convertedSvg: ConvertedSvgT;
}

const initialState: SvgStateI = {
    svgList: {
        page: 0,
        pages: 0,
        total: 0,
        contentList: [],
    },
    convertedSvg: {
        id: 0,
        name: "",
        svg: "",
    },
};

const svgSlice = createSlice({
    name: "svg",
    initialState,
    reducers: {
        setSvgList: (state, action: PayloadAction<SvgListT>) => {
            state.svgList = action.payload;
        },
        setConvertedSvg: (state, action: PayloadAction<ConvertedSvgT>) => {
            state.convertedSvg = action.payload;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload
            };
        },
    },
});

export const {setSvgList, setConvertedSvg} = svgSlice.actions;
export default svgSlice.reducer;
