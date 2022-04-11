import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { ViewUrlComponent } from './components/view-url/view-url.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoComponent,
    TodoItemComponent,
    SearchfilterPipe,
    LoadingSpinnerComponent,
    ViewUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
        HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
