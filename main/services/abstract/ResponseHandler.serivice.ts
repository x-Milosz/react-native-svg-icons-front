import { UseCaseResponseWrapper } from "../../base/UseCaseResponseWrapper.interface";

export abstract class ResponseHandlerService {
    public abstract handleResponse<T>(entity: T, message: string): UseCaseResponseWrapper<T>;
    public abstract handleError<T>(e: unknown, emptyEntity: T, message: string): UseCaseResponseWrapper<T>;
}