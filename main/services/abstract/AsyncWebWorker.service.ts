import { AsyncUseCase } from "../../base/AsyncUseCase.interface";

export abstract class AsyncWebWorkerService {
    public abstract startWebWorker<T>(asyncUseCase: AsyncUseCase<T>): Promise<T>;
}
