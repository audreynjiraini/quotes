export class Quote {
    public showAuthor: boolean;
    constructor(public id: number, public name: string, public author: string, public submitDate: Date, public submitter: string, public numberOfLikes: number, public numberOfDislikes: number) {
        this.showAuthor=false;
    }
}