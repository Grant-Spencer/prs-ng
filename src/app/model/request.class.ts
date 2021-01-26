export class Request {
    id: number;
    userId: number;
    description: string;
    justification: string;
    dateNeeded: number;
    deliveryMode: string;
    status: string;
    total: number;
    submittedDate: number;
    reasonForRejection: string;

    constructor(id: number = 0, userId: number = 0, description: string = "", justification: string = "", dateNeeded: number = 0, deliveryMode: string = "", status: string = "", total: number = 0, submittedDate: number = 0, reasonForRejection: string = "" ) {
        this.id = id;
        this.userId = userId;
        this.description = description;
        this.justification = justification;
        this.dateNeeded = dateNeeded;
        this.deliveryMode = deliveryMode;
        this.status = status;
        this.total = total;
        this.submittedDate = submittedDate;
        this.reasonForRejection = reasonForRejection;
    }

}