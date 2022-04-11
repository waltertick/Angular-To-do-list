import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoComponent } from './components/todo/todo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewUrlComponent } from './components/view-url/view-url.component';


const routes: Routes = [
  { path: '' ,component:TodoComponent },
  { path: 'add-todo' , component:AddTodoComponent },
  { path: 'todo' ,component:TodoComponent },
  { path: 'todo/:id' ,component:ViewUrlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
