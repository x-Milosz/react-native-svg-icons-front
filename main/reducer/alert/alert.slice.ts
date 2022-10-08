import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AlertsT } from "./alert.types";

interface AlertStateI {
    alerts: AlertsT;
}

const initialState: AlertStateI = {
    alerts: [],
}

const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        addAlert: (state, action: PayloadAction<AlertsT[0]>) => {
            state.alerts.push(action.payload);
        },
        removeAlert: (state, action: PayloadAction<AlertsT[0]["id"]>) => {
            state.alerts = state.alerts.filter(it => it.id !== action.payload);
        },
        removeAllAlerts: (state) => {
            state.alerts = [];
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.svg,
            };
        },
    }
});

export const {addAlert, removeAlert, removeAllAlerts} = alertSlice.actions;
export default alertSlice.reducer;
