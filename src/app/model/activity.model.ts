
export class Activity {
    public title: string;
    public briefDescription: string;
    public place: string;
    public level: string;
    public date: string;
    public beginningDate: string;

    // tslint:disable-next-line: max-line-length
    constructor(title: string, briefDescription: string, place: string, level: string, date: string, beginningDate?: string) {
        this.title = title;
        this.briefDescription = briefDescription;
        this.place = place;
        this.level = level;
        this.date = date;
        this.beginningDate = beginningDate;
    }
}
