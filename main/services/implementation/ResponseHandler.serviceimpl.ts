import { DefualtUseCaseResponse } from "../../base/DefaultUseCaseResponse.class";
import { UseCaseResponseWrapper } from "../../base/UseCaseResponseWrapper.interface";
import { DtoWrapper } from "../../clean/data/dto/DtoWrapper.dto";
import { ResponseHandlerService } from "../abstract/ResponseHandler.serivice";

export class ResponseHandlerServiceImpl implements ResponseHandlerService {
    public handleResponse<T>(entity: T, message: string): UseCaseResponseWrapper<T> {
        return new DefualtUseCaseResponse(entity, false, message)
    }
    public handleError<T>(e: unknown, emptyEntity: T, message: string): UseCaseResponseWrapper<T> {
        if (e.response) {
            if(e.data.message && e.data.data) {
                const data = <DtoWrapper<T>>e.data;
                return new DefualtUseCaseResponse(data.data, true, data.message)
            }
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
    }

}