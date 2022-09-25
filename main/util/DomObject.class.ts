import { DomAttributeValue } from "./DomAttributeValue.class";
export class DomObject {
    private _tagName: string;
    private _attributes: Record<string, DomAttributeValue<unknown>>;

    constructor(tagName: string, attributes: Record<string, DomAttributeValue<unknown>>) {
        this._tagName = tagName;
        this._attributes = attributes;
    }

    public get tagName(): string {
        return this._tagName;
    }
    public set tagName(value: string) {
        this._tagName = value;
    }

    public get attributes(): Record<string, DomAttributeValue<unknown>> {
        return this._attributes;
    }
    public set attributes(value: Record<string, DomAttributeValue<unknown>>) {
        this._attributes = value;
    }
}
