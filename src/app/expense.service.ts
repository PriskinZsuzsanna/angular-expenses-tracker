import { Injectable } from '@angular/core';
import { Expense } from './expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  expenses: Array<Expense> = new Array<Expense>()
  filteredExpenses: Array<Expense> = new Array<Expense>()
  categories: Array<String> = new Array<String>

  constructor() { }

  //expenses
  load(){
    this.expenses = JSON.parse(localStorage.getItem('expenses') ?? "[]")
  }

  copyForFilter(){
    this.filteredExpenses = this.expenses
  }

  save(){
    localStorage.setItem('expenses', JSON.stringify(this.expenses))
  }

  add(exp:Expense){
    this.expenses.push(exp)
    this.save()
  }

  filter(option:string){
    //this.load()
    this.filteredExpenses = this.expenses.filter(items => {
      if(option == "all"){
        return this.filteredExpenses
      } else {
        return items.category == option
      }
      
    })
    console.log(this.expenses)
    console.log(this.filteredExpenses)
  }



  //categories
  getCategories(){
    this.categories = []
    this.expenses.map(exp=> {
      this.categories.push(exp.category)
    })
    this.categories = [...new Set(this.categories)]
  }



}
