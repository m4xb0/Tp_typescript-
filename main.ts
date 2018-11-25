import Date1 from './date';
import Task from './task';
import Project from './Project';
import {Priority} from './priority'

let date = new Date1(2018,11,1);
let priority = Priority.Tiny;
let task = new Task("premier Task",date,priority,false);
let project = new Project(new Array(task));
