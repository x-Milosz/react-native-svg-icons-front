import { toastDispatcherServiceImpl } from "./../services/implementation/ToastDispatcher.serviceimpl";
import { responseHandlerServiceImpl } from "./../services/implementation/ResponseHandler.serviceimpl";
import { ConvertedSvgCopyAsyncUseCaseImpl } from "./../clean/core/usecase/implementation/ConvertedSvgCopy.asyncusecaseimpl";
import { ConvertedSvgCopyAsyncUseCase } from "../clean/core/usecase/abstract/ConvertedSvgCopy.asyncusecase";

export class ConvertedSvgCopyFactory {
    public getConvertedSvgCopyAsyncUseCase(): ConvertedSvgCopyAsyncUseCase {
        return new ConvertedSvgCopyAsyncUseCaseImpl(responseHandlerServiceImpl, toastDispatcherServiceImpl);
    }
}
