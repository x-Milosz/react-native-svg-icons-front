import { AsyncWebWorkerService } from "../../../main/services/abstract/AsyncWebWorker.service";
import { WebWorkerAsyncOperationT } from "../../../main/util/WebWorkerAsyncOperation.type";

export class DummyAsyncWebWorkerServiceImpl implements AsyncWebWorkerService {
    public async startWebWorker<T>(webWorkerAsyncOperation: WebWorkerAsyncOperationT<T>): Promise<T> {
        return await webWorkerAsyncOperation();
    }

}
