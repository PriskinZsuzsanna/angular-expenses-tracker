import { Injectable } from '@angular/core';
import { Expense } from './expense';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  expenses: Array<Expense> = new Array<Expense>()
  filteredExpenses: Array<Expense> = new Array<Expense>()
  categories: Array<String> = new Array<String>
  expenceAmounts: Array<number> = new Array<number>()
  balance:number = 0

  constructor(private router: Router) { }

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
  }

  delete(id:string){
    this.expenses = this.expenses.filter(exp => {
      return exp.id !== id
    })
    this.filteredExpenses = this.expenses
    this.getCategories()
    this.save()
  }

  update(exp: Expense){
    let old = this.find(exp.id);
    old.title = exp.title;
    old.amount = exp.amount;
    old.category = exp.category;
    console.log(this.expenses)
    console.log(this.filteredExpenses)
    this.getCategories();
    this.save();
  }

  find(id: string) : Expense {
    return this.expenses.filter(t => t.id == id)[0];
  }

  //categories
  getCategories(){
    this.categories = []
    this.expenses.map(exp=> {
      this.categories.push(exp.category)
    })
    this.categories = [...new Set(this.categories)]
  }

  //total
  getBalance(){
    this.expenceAmounts = []
    this.expenses.map(exp=> {
      this.expenceAmounts.push(exp.amount)
    })
    console.log(this.expenceAmounts)
    this.balance = this.expenceAmounts.reduce((acc, curr) => acc + curr, 0)
    console.log(this.balance)
  }



}
