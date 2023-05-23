import { Component } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../expense';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  actual: Expense = new Expense ()
  constructor(public service: ExpenseService, private router: Router, route: ActivatedRoute){
    route.params.subscribe(t => { //t = tipus
      this.actual = service.find(t['id']);
    })
  }

  update(){
    this.service.update(this.actual)
    //this.service.listCategories()
    this.router.navigate(['list'])
  }
}
