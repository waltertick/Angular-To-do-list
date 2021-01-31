import { Todos } from './models/todos';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(todo:Todos[],searchValue:string ): Todos[] {
     if(!todo || !searchValue){
      return todo;
    }
    return todo.filter( todosearch => {
        return todosearch.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
         todosearch.description.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())  
  });
  }

}
