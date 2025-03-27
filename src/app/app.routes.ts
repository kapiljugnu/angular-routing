import { Routes } from "@angular/router";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { routes as userRoutes }from './users/users.routers';
 
export const routes: Routes = [
    {
        path: '',
        component: NoTaskComponent
    },
    // {
    //     path: 'tasks',
    //     component: TasksComponent
    // }
    {
        path: 'users/:userId', // userId dynamic path segment
        component: UserTasksComponent,
        children: userRoutes       
    },
    {
        path: '**',
        component:  NotFoundComponent
    }
    
]
