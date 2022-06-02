import { Component, OnInit } from '@angular/core';
import {Todo} from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  
  inputTodo:string ="";
 
  constructor() { }

  ngOnInit(): void {
    //Todo items in an array
    this.todos =[
      {
      content:'First todo',
      completed:false
    },
   {
     content:'Second todo',
     completed: false
   }
  ]
  }
//Toggle to cross out task when completed
  toggleDone(id: any) {
    this.todos.map((v, i) => {
      if (i ==id) v.completed =!v.completed;

      return v;
    })
  }
//Delete Task
  deleteTodo (id:number) {
    this.todos = this.todos.filter((v,i) => i !==id);
  }
//Submit form
  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed:false
    });

    this.inputTodo = "";
  }
}
function v(v: any, i: any) {
  throw new Error('Function not implemented.');
}

function i(v: any, i: any) {
  throw new Error('Function not implemented.');
}

