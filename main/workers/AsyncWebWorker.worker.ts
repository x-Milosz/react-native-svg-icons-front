import { AsyncUseCase } from "../base/AsyncUseCase.interface";

const isMessageEventConsistingOfAsyncUseCase = 
        <T>(obj: any): obj is MessageEvent<AsyncUseCase<T>> => {
            return (<MessageEvent<AsyncUseCase<T>>>obj)["data"]["execute"] !== undefined;
        };

onmessage = (messageEvent) => {
    if(!isMessageEventConsistingOfAsyncUseCase(messageEvent)) {
        throw Error("AsyncWebWorker: Async web worker data has to be AsyncUseCase type");
    }

    const asyncUseCase = messageEvent.data;

    const executeAsyncUseCase = async () => {
        const asyncUseCaseResult = await asyncUseCase.execute();
        postMessage(asyncUseCaseResult);
    };
    executeAsyncUseCase();
};
