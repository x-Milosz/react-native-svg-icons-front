export abstract class UseCaseResponseWrapper<T> {
    abstract get entiy(): T;
    abstract set entiy(entity: T);
    abstract get isError(): boolean;
    abstract set isError(isError: boolean);
    abstract get message(): string;
    abstract set message(message: string);
}