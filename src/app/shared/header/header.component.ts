import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private userService: UserService, private router: Router) {}

  user$ = this.userService.retornarUser();

  Logout() {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }
}
