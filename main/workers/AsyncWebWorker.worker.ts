import { WebWorkerAsyncOperationT } from "./../util/WebWorkerAsyncOperation.type";

const isMessageEventConsistingOfAsyncUseCase = 
        <T>(obj: any): obj is MessageEvent<WebWorkerAsyncOperationT<T>> => {
            return (<MessageEvent<WebWorkerAsyncOperationT<T>>>obj) !== undefined;
        };

onmessage = (messageEvent) => {
    if(!isMessageEventConsistingOfAsyncUseCase(messageEvent)) {
        throw Error("AsyncWebWorker: Async web worker data has to " + 
            "be WebWorkerAsyncOperationT type");
    }

    const webWorkerAsyncOperation = messageEvent.data;

    const executeAsyncUseCase = async () => {
        const asyncUseCaseResult = await webWorkerAsyncOperation();
        postMessage(asyncUseCaseResult);
    };
    executeAsyncUseCase();
};
