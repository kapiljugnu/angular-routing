import { Routes } from '@angular/router';

import { TasksComponent, resolveUserTasks } from '../tasks/tasks.component';
import { NewTaskComponent, canLeaveEditpage } from '../tasks/new-task/new-task.component';
import { resolveTitle } from './user-tasks/user-tasks.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks', // <your-domain>/users/<uid>/tasks
    component: TasksComponent,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    resolve: {
      userTasks: resolveUserTasks,
    },
    title: resolveTitle
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,
    canDeactivate: [canLeaveEditpage]
  },
];
