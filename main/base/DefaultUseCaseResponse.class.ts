import { UseCaseResponseWrapper } from "./UseCaseResponseWrapper.interface";

export class DefualtUseCaseResponse<T> implements UseCaseResponseWrapper<T> {
    private _entity: T;
    private _isError: boolean;
    private _errorMessage: string;

    constructor(entity: T, isError: boolean, errorMessage: string) {
        this._entity = entity;
        this._isError = isError;
        this._errorMessage = errorMessage;
    }

    get entiy(): T {
        return this._entity;
    }
    set entiy(entity: T) {
        this._entity = entity;
    }
    get isError(): boolean {
        return this._isError;
    }
    set isError(isError: boolean) {
        this._isError = isError;
    }
    get errorMessage(): string {
        return this._errorMessage;
    }
    set errorMessage(errorMessage: string) {
        this._errorMessage = errorMessage;
    }

}