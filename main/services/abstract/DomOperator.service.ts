import { DomTree } from "../../util/DomTree.class";

export abstract class DomOperatorService {
    public abstract parseAndCreateDomTree(toParseString: string): DomTree;
    public abstract serializeDomTree(domTree: DomTree): string;
}