import { UseCaseResponseWrapper } from "./UseCaseResponseWrapper.interface";

export class DefaultUseCaseResponse<T> implements UseCaseResponseWrapper<T> {
    private _entity: T;
    private _isError: boolean;
    private _message: string;

    constructor(entity: T, isError: boolean, message: string) {
        this._entity = entity;
        this._isError = isError;
        this._message = message;
    }

    get entity(): T {
        return this._entity;
    }
    set entity(entity: T) {
        this._entity = entity;
    }
    get isError(): boolean {
        return this._isError;
    }
    set isError(isError: boolean) {
        this._isError = isError;
    }
    get message(): string {
        return this._message;
    }
    set message(message: string) {
        this._message = message;
    }

}
