import { Todos } from './../../models/todos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoServiceService } from 'src/app/services/todo-service.service';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  [x: string]: any;
  today=new Date();
  date =  String(this.today.getDate()).padStart(2, '0')+'/'+ String(this.today.getMonth() + 1).padStart(2, '0')+'/'+ this.today.getFullYear()+' '+ this.today.getHours()+':'+ this.today.getMinutes()
  title: string;
  description: string;
  todo: Todos[] = [];


  constructor( private router: Router,
    private tdservice: TodoServiceService ) { }


  ngOnInit() {
  }



  addTodo(todo:Todos) {
    this.tdservice.addTodo(todo).subscribe( todo =>{
      this.todo.push(todo);
    })
    }


 onSubmit() {
    const todo ={
      id:0,
      title :this.title,
      description : this.description,
      duedate:this.date,
      completed:false
    }

    this.addTodo(todo);
    this.router.navigate(['/todo'])



  }

}
