export type AlertsT = AlertsI[];

interface AlertsI {
    id: number;
    message: string;
    type: "error" | "info";
}
