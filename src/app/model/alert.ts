export class Alert {
    type: AlertType;
    message: string;
    timeout: number;
}

export enum AlertType {
    Success = 'success',
    Error = 'danger',
    Info = 'info',
    Warning = 'warning',
}
