import Date1 from './date';
import {Priority} from './priority';

export default class Task {
  private _content : string;
  private _date : Date1;
  private _priority : Priority;
  private _checked :boolean;
  constructor(content:string, date:Date1, priority : Priority, checked:boolean){
    this._content = content;
    this._date = date;
    this._priority = priority;
    this._checked = checked = false;
  }

  get content():string{
    return this._content;
  }
  get date():Date1{
    return this._date;
  }
  get priority() : Priority{
    return this._priority;
  }
  public get checked():boolean{
    return this._checked;
  }
  set content(value : string){
    this._content = value;
  }
  set date(value:Date1){
    this._date = value;
  }
  set priority(value : Priority){
    this._priority = value;
  }
  set checked(value : boolean){
    this._checked = value;
  }

  add(content:string, date : Date1,priority:Priority,checked:boolean) : string{
    return content//[0:3];
  }
  update(content: string,date:Date1, priority:Priority,checked?:boolean){
    content?this._content = content:'';
    this._date = date;
    this._priority = priority;
    this._checked = checked;

  }
  close(){
    this._checked = true;
  }
  toString(){
    return "CONTENU :"+this._content+"\nDATE :"+this._date.toString()+"\nPRIORITE :"+ this._priority+"\n"+(this._checked?"EFFECTUE":"NON EFFECTUE");
  }
}
