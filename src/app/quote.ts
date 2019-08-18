export class Quote {
    public showAuthor: boolean;
    constructor(public name: string, public author: string, public submitDate: Date, public submitter: string) {
        this.showAuthor=false;
    }
}