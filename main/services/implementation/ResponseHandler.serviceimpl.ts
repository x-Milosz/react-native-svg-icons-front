/* eslint-disable @typescript-eslint/ban-ts-comment */
import { DefaultUseCaseResponse } from "../../base/DefaultUseCaseResponse.class";
import { UseCaseResponseWrapper } from "../../base/UseCaseResponseWrapper.interface";
import { DtoWrapper } from "../../clean/data/dto/DtoWrapper.dto";
import { ResponseHandlerService } from "../abstract/ResponseHandler.serivice";

export class ResponseHandlerServiceImpl implements ResponseHandlerService {

    public handleResponse<T>(entity: T, message: string): UseCaseResponseWrapper<T> {
        return new DefaultUseCaseResponse(entity, false, message);
    }

    public handleError<T>(e: unknown, emptyEntity: T, area: string, consoleCommunicate?: string, code?: string): UseCaseResponseWrapper<T> {
        if(consoleCommunicate) {
            console.error(area + ": " + consoleCommunicate, e);
        } else {
            console.error(area + ": ", e);
        }

        if(code) {
            return new DefaultUseCaseResponse(emptyEntity, true, code);
        }
        
        // @ts-ignore
        if (e.response) {
            // @ts-ignore
            if(e.data.message && e.data.data) {
                // @ts-ignore
                const data = <DtoWrapper<T>>e.data;
                return new DefaultUseCaseResponse(data.data, true, data.message);
            }
            // @ts-ignore
        } else if (e.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            return new DefaultUseCaseResponse<T>(emptyEntity, true, "error.server_have_not_responded");
            
        } else {
            // Something happened in setting up the request that triggered an Error
            return new DefaultUseCaseResponse<T>(emptyEntity, true, "error.could_not_set_up_request");
        }

        return new DefaultUseCaseResponse<T>(emptyEntity, true, "error.general_error");
    }
}

export const responseHandlerServiceImpl: ResponseHandlerService = new ResponseHandlerServiceImpl();
