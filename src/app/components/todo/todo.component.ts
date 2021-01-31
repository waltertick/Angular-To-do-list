import { Todos } from './../../models/todos';
import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

 todo: Todos[] = [];
 title: any;
 searchValue:string;
 showSpinner:boolean= true;


  constructor( public tdservice: TodoServiceService) { }

  ngOnInit() {
    this.tdservice.getTodo().subscribe((response) => {
      this.todo = response;
    })
    this.tdservice.getTodo().subscribe(()  => this.showSpinner = false)

   }


    Search() {

    if (this.title === '') {
      this.ngOnInit();
    } else if(this.title != '') {

      this.todo = this.todo.filter((res) => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase()) ||
         res.description.toLocaleLowerCase().match(this.title.toLocaleLowerCase()) ||
         res.duedate.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      });

    }

  }


  addTodo(todo:Todos) {
    this.tdservice.addTodo(todo).subscribe( todo =>{
      this.todo.push(todo);
    })
  }




}
