import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { PageComponent } from './pages/page/page.component';
import { HomeComponent } from './pages/home/home.component';
import { UserManagerComponent } from './pages/user-manager/user-manager.component';
import { GroupManagerComponent } from './pages/group-manager/group-manager.component';
import { PagesManagerComponent } from './pages/pages-manager/pages-manager.component';
import { PageAddComponent } from './pages/pages-manager/page-add/page-add.component';
import { MenuManagerComponent } from './pages/menu-manager/menu-manager.component';
import { AddonManagerComponent } from './pages/addon-manager/addon-manager.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'page/:name', component: PageComponent },
  { path: 'page/:name/:id', component: PageComponent },
  { path: 'manager/user', component: UserManagerComponent },
  { path: 'manager/group', component: GroupManagerComponent },
  { path: 'manager/pages', component: PagesManagerComponent },
  { path: 'manager/menu', component: MenuManagerComponent },
  { path: 'manager/addon', component: AddonManagerComponent },
  { path: 'pages/add/:id', component: PageAddComponent },
  { path: 'pages/add', component: PageAddComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
