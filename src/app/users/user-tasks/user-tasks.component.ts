import { Component, DestroyRef, OnInit, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet]
})
export class UserTasksComponent implements OnInit {
  // userId = input.required<string>(); // name same as route dynamic parameter
  private userService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  userName = '';

  ngOnInit(): void {
          // console.log(this.activatedRoute);
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: paramMap => {
        this.userName = this.userService.users.find(u => u.id === paramMap.get('userId'))?.name || '';
      }
    });

    this.destroyRef.onDestroy(()=>{
      subscription.unsubscribe();
    })
  }

  // userName = computed(() => this.userService.users.find(u => u.id === this.userId())?.name);
}
