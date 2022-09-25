import { DomTree } from "../../util/DomTree.class";
export abstract class RNDomManipulatorService {
    public abstract convertDomTreeToReactNative(domTree: DomTree): DomTree;
}
