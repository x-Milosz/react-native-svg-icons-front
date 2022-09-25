import { WebWorkerAsyncOperationT } from "../../util/WebWorkerAsyncOperation.type";

export abstract class AsyncWebWorkerService {
    public abstract startWebWorker<T>
        (webWorkerAsyncOperation: WebWorkerAsyncOperationT<T>): Promise<T>;
}
