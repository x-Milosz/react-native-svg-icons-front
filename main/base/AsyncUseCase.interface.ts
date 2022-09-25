import { UseCase } from "./UseCase.interface";
import { UseCaseResponseWrapper } from "./UseCaseResponseWrapper.interface";

export abstract class AsyncUseCase<T> implements Omit<UseCase<T>, "execute">{
    abstract execute(...args: any[]): Promise<UseCaseResponseWrapper<T>>;
}
