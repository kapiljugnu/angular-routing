import { Component,   inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink]
})
export class UserTasksComponent {
  userName = input.required<string>();
  message = input.required<string>();
}


export const resolveUserName: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) =>  {
  const userService = inject(UsersService);
  const userName = userService.users.find(u => u.id=== activatedRoute.paramMap.get('userId'))?.name || '';
  return userName;
}
