import Task from './task';
export default class Project {
  private _tasks : Task [] = new Array();

  constructor(tasks : Task[] = new Array()){
    this._tasks = tasks;
  }

  get task():Task[]{
    return this._tasks;
  }
  set task(value: Task[]){
    this._tasks = value;
  }


  public addTask(value : Task){
    this._tasks.push(value);
  }
  public getTask(pos: number):Task{
    return this._tasks[pos];
  }
  public deleteTask(pos:number){
    this._tasks.splice(pos)
  }
  public all(){
    let task : any;
    for(task in this._tasks){
      console.log(this._tasks[task].toString());
    }
  }
  public complete(){
    let task : any;
    for(task in this._tasks){
      if(this._tasks[task].checked() == true){
        console.log(this._tasks[task].toString());
      }
    }
  }
  public uncomplete(){
    let task : any;
    for(task in this._tasks){
      if(this._tasks[task].checked() == false){
        console.log(this._tasks[task].toString());
      }
    }
  }
}
