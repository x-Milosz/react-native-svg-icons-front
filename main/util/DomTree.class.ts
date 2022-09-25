import { DomObject } from "./DomObject.class";

export class DomTree {
    private _domObjects: Array<DomObject>;

    constructor(domObjects: Array<DomObject>) {
        this._domObjects = domObjects;
    }

    public get domObjects(): Array<DomObject> {
        return this._domObjects;
    }
    public set domObjects(value: Array<DomObject>) {
        this._domObjects = value;
    }
}
