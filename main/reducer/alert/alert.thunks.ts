import { AppThunk } from "./../store";
import { addAlert, removeAlert, removeAllAlerts } from "./alert.slice";
import { AlertT } from "./alert.types";

export namespace AlertThunks {
    export const addAlertThunk = (alert: AlertT): AppThunk => dispatch => {
        dispatch(addAlert(alert));
    };
    export const removeAlertThunk = (alertUuid: AlertT["uuid"]): AppThunk => dispatch => {
        dispatch(removeAlert(alertUuid));
    };
    export const removeAllAlertsThunk = (): AppThunk => dispatch => {
        dispatch(removeAllAlerts());
    };
}
