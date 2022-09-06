import { checkIfObjectIsGivenTypeUtil } from "./../../util/checkIfObjectIsGivenType.util";
import { AsyncUseCase } from "../../base/AsyncUseCase.interface";
import { AsyncWebWorkerService } from "../abstract/AsyncWebWorker.service";

class AsyncWebWorkerServiceImpl implements AsyncWebWorkerService {
    public async startWebWorker<T>(asyncUseCase: AsyncUseCase<T>): Promise<T> {
        const asyncWebWorker = new Worker(new URL("../../workers/AsyncWebWorker.worker.ts", 
            import.meta.url));
        asyncWebWorker.postMessage(asyncUseCase);
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
