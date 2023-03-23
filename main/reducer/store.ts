import { configureStore, ThunkAction, Action, ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import svg from  "./svg/svg.slice";
import alert from "./alert/alert.slice";
import util from "./util/util.slice";

const makeStore = () => configureStore({
    reducer: {
        svg: svg,
        alert: alert,
        util: util,
    },
    devTools: true,
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export type AppAction<T = any> = AnyAction & { payload?: T };
export type AppDispatch = ThunkDispatch<AppState, any, AppAction>;


export const wrapper = createWrapper<AppStore>(makeStore);
