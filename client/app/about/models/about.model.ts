export class About {
    message:string;
    reversedMessage:string;

    constructor(message,reversedMessage) {
        this.message = message;
        this.reversedMessage = reversedMessage;
    }
    getMessage():string {
        return this.message;
    }
    getReversedMessage():string {
        return this.reversedMessage;
    }
}