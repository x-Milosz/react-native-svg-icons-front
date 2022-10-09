export type AlertsT = AlertT[];
export type AlertT = AlertsI;

interface AlertsI {
    uuid: string;
    message: string;
    type: "error" | "info";
}
