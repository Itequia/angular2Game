export class GameboyItem {
    leftPosition:number;
    topPosition:number;
    src:string;

    constructor(leftPosition:number, topPosition:number, src:string) {
        this.leftPosition = leftPosition;
        this.topPosition = topPosition;
        this.src = src;
    }
}