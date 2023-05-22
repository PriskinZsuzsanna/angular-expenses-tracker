import { Component } from '@angular/core';
import { Expense } from '../expense';
import { ExpenseService } from '../expense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  actual: Expense = new Expense()
  constructor(public service: ExpenseService, private router: Router){
    this.service.getCategories()
  }

  create(){
    this.service.add(this.actual)
    this.actual = new Expense ()
    this.router.navigate(['list'])
  }
}
