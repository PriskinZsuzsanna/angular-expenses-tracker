import { Component } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Router } from '@angular/router';
import { Expense } from '../expense';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(public service: ExpenseService, private router: Router){
    this.service.load()
    this.service.copyForFilter()
    this.service.getCategories()
    this.service.getBalance()
  }

  filter(y:string){
    this.service.filter(y)
  }

  delete(exp:Expense){
    this.service.delete(exp.id)
    this.service.getBalance()
  }

  edit(exp: Expense){
    this.router.navigate(['edit', exp.id])
  }
}
