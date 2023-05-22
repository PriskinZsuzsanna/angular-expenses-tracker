import { Injectable } from '@angular/core';
import { Expense } from './expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  expenses: Array<Expense> = new Array<Expense>()

  constructor() { }

  load(){
    this.expenses = JSON.parse(localStorage.getItem('expenses') ?? "[]")
  }

  save(){
    localStorage.setItem('expenses', JSON.stringify(this.expenses))
  }

  add(exp:Expense){
    this.expenses.push(exp)
    this.save()
  }



}
