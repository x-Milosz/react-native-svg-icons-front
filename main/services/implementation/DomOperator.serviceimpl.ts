import { DomSerializerServiceImpl } from "./domoperatorintenalservices/DomSerializer.serviceimpl";
import { DomCreatorServiceImpl } from "./domoperatorintenalservices/DomCreator.serviceimpl";
import { DomTree } from "../../util/DomTree.class";
import { DomOperatorService } from "../abstract/DomOperator.service";
import { DomCreatorService } from "../abstract/domoperatorinternalservices/DomCreator.service";
import { DomSerializerService } from "../abstract/domoperatorinternalservices/DomSerializer.service";

export class DomOperatorServiceImpl implements DomOperatorService {
    private _domCreator: DomCreatorService;
    private _domSerialzier: DomSerializerService;

    constructor(domCreator: DomCreatorService, domSerializer: DomSerializerService) {
        this._domCreator = domCreator;
        this._domSerialzier = domSerializer;
    }

    public parseAndCreateDomTree(toParseString: string): DomTree {
        return this._domCreator.parseAndCreateDomTree(toParseString);
    }
    public serializeDomTree(domTree: DomTree): string {
        return this._domSerialzier.serializeDomTree(domTree);
    }

}

export const domOperatorServiceImpl: DomOperatorService = 
    new DomOperatorServiceImpl(new DomCreatorServiceImpl(), new DomSerializerServiceImpl());
