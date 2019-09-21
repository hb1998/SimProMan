import { User } from 'src/app/shared/models/user';

export interface Task {
    name:string,
    priority:string,
    assignees:Array<User>,
    assigner:User,

}
