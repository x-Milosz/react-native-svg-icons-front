import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AlertsT, AlertT } from "./alert.types";

interface AlertStateI {
    alerts: AlertsT;
}

const initialState: AlertStateI = {
    alerts: [],
};

const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        addAlert: (state, action: PayloadAction<AlertT>) => {
            state.alerts.push(action.payload);
        },
        removeAlert: (state, action: PayloadAction<AlertT["uuid"]>) => {
            state.alerts = state.alerts.filter(it => it.uuid !== action.payload);
        },
        removeAllAlerts: (state) => {
            state.alerts = [];
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload
            };
        },
    }
});

export const {addAlert, removeAlert, removeAllAlerts} = alertSlice.actions;
export default alertSlice.reducer;
