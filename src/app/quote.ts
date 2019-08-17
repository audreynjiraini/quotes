export class Quote {
    showAuthor: boolean;
    constructor(public name: string, public author: string) {
        this.showAuthor=false;
    }
}