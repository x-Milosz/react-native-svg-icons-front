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

    get page() {
        return this._page;
    }

    set page(page: number) {
        this._page = page;
    }

    get pages() {
        return this._pages;
    }

    set pages(pages: number) {
        this._pages = pages;
    }

    get total() {
        return this._total;
    }

    set total(total: number) {
        this._total = total;
    }

    get contentList()  {
        return this._contentList;
    }

    set contentList(contentList: {
        id: number;
        name: string;
    }[]) {
        this._contentList = contentList;
    }
}
