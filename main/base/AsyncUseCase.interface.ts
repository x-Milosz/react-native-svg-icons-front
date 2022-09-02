import { UseCase } from "./UseCase.interface";

export abstract class AsyncUseCase<T> implements Omit<UseCase<T>, "execute">{
    abstract execute(...args: any[]): Promise<T>;
}
