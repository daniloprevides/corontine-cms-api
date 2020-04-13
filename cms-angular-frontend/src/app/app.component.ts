import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { PageService } from './services/page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Corontine CMS';

  constructor(authService: AuthService, router: Router, private pageService:PageService) {
    if (!authService.isLoggedIn()) {
      router.navigate(['login']);
    }
  }
}
