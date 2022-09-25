import { checkIfObjectIsGivenTypeUtil } from "./../../util/checkIfObjectIsGivenType.util";
import { AsyncWebWorkerService } from "../abstract/AsyncWebWorker.service";
import { WebWorkerAsyncOperationT } from "../../util/WebWorkerAsyncOperation.type";

class AsyncWebWorkerServiceImpl implements AsyncWebWorkerService {
    public async startWebWorker<T>(webWorkerAsyncOperation: 
            WebWorkerAsyncOperationT<T>): Promise<T> {
        const asyncWebWorker = new Worker(new URL("../../workers/AsyncWebWorker.worker.ts", 
            import.meta.url));
        asyncWebWorker.postMessage(webWorkerAsyncOperation);
        const response: T = await new Promise((resolve, reject) => {
            asyncWebWorker.onmessage = (message) => {
                const response = <T>message.data;
                resolve(response);
            };
        });
        return response;
    }
}

export const asyncWebWorkerServiceImpl: AsyncWebWorkerService = new AsyncWebWorkerServiceImpl();
