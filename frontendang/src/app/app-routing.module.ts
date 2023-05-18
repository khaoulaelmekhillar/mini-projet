import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  
    },
  {
    path: 'login',
    component: LoginComponent,
  },

  
  {

  path: 'register',
  component: RegisterComponent,
  },
  {
    path: 'Header',
    component : HeaderComponent,
  },
  {
    path: 'footer',
    component : FooterComponent,
  }
  


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
