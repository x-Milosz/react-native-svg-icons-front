import { UseCaseResponseWrapper } from "./UseCaseResponseWrapper.interface";

export abstract class UseCase<T> {
    abstract execute(...args: any[]): UseCaseResponseWrapper<T>;
}
