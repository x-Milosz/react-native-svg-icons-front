import { DomTree } from "./../../util/DomTree.class";
export abstract class DomCreatorService {
    public abstract parseAndCreateDomTree(toParseString: string): DomTree;
}
