export class SvgList {
    private _page: number;
    private _pages: number;
    private _total: number;
    private _contentList: {
        id: number;
        name: string;
    }[];

    constructor(page: number, pages: number, 
        total: number, contentList: {id: number, name: string}[]) {
        this._page = page;
        this._pages = pages;
        this._total = total;
        this._contentList = contentList;
    }

    public get page() {
        return this._page;
    }

    public set page(page: number) {
        this._page = page;
    }

    public get pages() {
        return this._pages;
    }

    public set pages(pages: number) {
        this._pages = pages;
    }

    public get total() {
        return this._total;
    }

    public set total(total: number) {
        this._total = total;
    }

    public get contentList()  {
        return this._contentList;
    }

    public set contentList(contentList: {
        id: number;
        name: string;
    }[]) {
        this._contentList = contentList;
    }
}
