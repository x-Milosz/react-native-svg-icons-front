import { ConvertedSvg } from "./../../entity/ConvertedSvg.entity";
import { UseCaseResponseWrapper } from "../../../../base/UseCaseResponseWrapper.interface";
import { ResponseHandlerService } from "../../../../services/abstract/ResponseHandler.serivice";
import { ConvertedSvgCopyAsyncUseCase } from "../abstract/ConvertedSvgCopy.asyncusecase";
import { ToastDispatcherService } from "../../../../services/abstract/ToastDispatcher.service";
import en from "../../../../front/languages/en";

export class ConvertedSvgCopyAsyncUseCaseImpl implements ConvertedSvgCopyAsyncUseCase {
    private _responseHandlerService: ResponseHandlerService;
    private _toastDispatcherService: ToastDispatcherService;

    constructor(responseHandlerService: ResponseHandlerService, toastDispatcherService: ToastDispatcherService) {
        this._responseHandlerService = responseHandlerService;
        this._toastDispatcherService = toastDispatcherService;
    }

    public async execute(convertedSvg: ConvertedSvg,  strings: typeof en["convertedSvgCopy"]): Promise<UseCaseResponseWrapper<boolean>> {
        try {
            if(convertedSvg.svgLines.length === 0) {
                this._toastDispatcherService.dispatchErrorToast(strings.noCodeToCopyFirstSelectSvg);
                return this._responseHandlerService.handleResponse(false, "converted_svg_copy.no_code_to_copy");
            }

            const toCopyCode = this.convertConvertedSvgToString(convertedSvg);
            navigator.clipboard.writeText(toCopyCode);
            this._toastDispatcherService.dispatchSuccessToast(strings.success);
            return this._responseHandlerService.handleResponse(true, "converted_svg_copy.success");
        } catch(e) {
            this._toastDispatcherService.dispatchErrorToast(strings.couldNotCopyCode);
            return this._responseHandlerService.handleError(e, false, "ConvertedSvgCopyAsyncUseCaseImpl::execute");
        }
    }

    private convertConvertedSvgToString(convertedSvg: ConvertedSvg): string {
        return convertedSvg.svgLines.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.text + "\n";
        }, "");
    }
}
