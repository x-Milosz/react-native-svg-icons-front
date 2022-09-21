import { DomTree } from "./../../util/DomTree.class";

export abstract class DomSerializerService {
    public abstract serializeDomTree(domTree: DomTree): string;
}
