import { Guid } from "guid-typescript";

export class Expense {
    title: string = "";
    amount: number = 0;
    category: string = "";
    id:string = Guid.create().toString();
}
