export abstract class ToastDispatcherService {
    public abstract dispatchSuccessToast(text: string): void;
    public abstract dispatchErrorToast(text: string): void; 
}
