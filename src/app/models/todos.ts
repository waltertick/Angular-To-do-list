export class Todos {

      id:number;
      title:string;
      description: string;
      duedate: string;
      completed:boolean;
  constructor (
     id,
     title,
     description,
     duedate,
     completed
  ){
    this.id=id;
    this.title=title;
    this.description=description;
    this.duedate=duedate;
    this.completed=completed;

  }






}
