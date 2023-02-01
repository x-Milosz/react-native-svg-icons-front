import { KeyValueSliceObjectT } from "./../common/sliceObjects.types";
import { ConvertedSvg } from "./../../clean/core/entity/ConvertedSvg.entity";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { SvgList } from "../../clean/core/entity/SvgList.entity";
import { ConvertedSvgT, IsSvgListLoadingT, SvgListParamsT, SvgListT } from "./svg.types";

export interface SvgStateI {
    svgList: SvgListT;
    svgListParams: SvgListParamsT;
    convertedSvg: ConvertedSvgT;
    isSvgListLoading: IsSvgListLoadingT;
}

const initialState: SvgStateI = {
    svgList: {
        page: 0,
        pages: 0,
        total: 0,
        contentList: [],
    },
    svgListParams: {
        page: 1,
        pageSize: 49,
        search: "",
    },
    convertedSvg: {
        id: 0,
        name: "",
        svg: "",
    },
    isSvgListLoading: false,
};

const svgSlice = createSlice({
    name: "svg",
    initialState,
    reducers: {
        setSvgList: (state, action: PayloadAction<SvgListT>) => {
            state.svgList = action.payload;
        },
        setSvgListParams: (state, action: PayloadAction<SvgListParamsT>) => {
            state.svgListParams = action.payload;
        },
        setSvgListParam: <T extends keyof SvgListParamsT>
        (state: SvgStateI, action: PayloadAction<KeyValueSliceObjectT<SvgListParamsT, T>>) => {
            state.svgListParams[action.payload.key] = action.payload.value;
        },
        setConvertedSvg: (state, action: PayloadAction<ConvertedSvgT>) => {
            state.convertedSvg = action.payload;
        },
        setIsSvgListLoading: (state, action: PayloadAction<IsSvgListLoadingT>) => {
            state.isSvgListLoading = action.payload;
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

export const {setSvgList, setSvgListParams, setConvertedSvg, setSvgListParam, setIsSvgListLoading} = svgSlice.actions;
export default svgSlice.reducer;
