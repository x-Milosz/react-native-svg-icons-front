import { ToastDispatcherService } from "../abstract/ToastDispatcher.service";
import {toast, Zoom} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export class ToastDispatcherServiceImpl implements ToastDispatcherService {
    constructor() {
        toast.configure({
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }

    public dispatchSuccessToast(text: string): void {
        toast.success(text, {
            theme: "dark",
            hideProgressBar: true,
            autoClose: 3000,
            draggable: false,
            transition: Zoom,
            style: {
                background: "white",
                color: "black",
                borderRadius: 0,
            },
        });
    }
    public dispatchErrorToast(text: string): void {
        toast.error(text, {
            theme: "dark",
            hideProgressBar: true,
            autoClose: 3000,
            draggable: false,
            transition: Zoom,
            style: {
                background: "white",
                color: "black",
                borderRadius: 0,
            },
        });
    }
}

export const toastDispatcherServiceImpl: ToastDispatcherService = new ToastDispatcherServiceImpl();
