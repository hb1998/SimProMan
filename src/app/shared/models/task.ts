import { Task } from './task';
import { User } from 'src/app/shared/models/user';

export interface Task {
    name:string,
    priority:string,
    subtasks?:Array<subTask>
    assignees?:Array<User>,
    assigner?:User,
}

export interface subTask extends Task {
    done:boolean
}
