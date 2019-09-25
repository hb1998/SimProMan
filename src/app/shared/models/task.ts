import { Task } from './task';
import { User } from 'src/app/shared/models/user';

export interface Task {
    name: string;
    priority?: string;
    subtasks?: Array<SubTask>;
    assignees?: Array<User>;
    assigner?: User;
}

export interface SubTask extends Task {
    done: boolean;
}
