import { CanMatchFn, RedirectCommand, Router, Routes } from "@angular/router";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent, resolveUserName } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { routes as userRoutes }from './users/users.routers';
import { inject } from "@angular/core";

const dummyCanMatch: CanMatchFn = (route, segments) => {
    const router = inject(Router);
    const shouldGetAccess = Math.random();
    if (shouldGetAccess < 0.5) {
        return true;
    }
    return new RedirectCommand(router.parseUrl('/unauthorized'));
} 
 
export const routes: Routes = [
    {
        path: '',
        component: NoTaskComponent,
        title: 'No task selected'
    },
    // {
    //     path: 'tasks',
    //     component: TasksComponent
    // }
    {
        path: 'users/:userId', // userId dynamic path segment
        component: UserTasksComponent,
        children: userRoutes,
        canMatch: [dummyCanMatch],
        data: {
            message: "Hello"
        },
        resolve: {
            userName: resolveUserName
        }
    },
    {
        path: '**',
        component:  NotFoundComponent
    }
    
]
