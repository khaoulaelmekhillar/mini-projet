import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProfilComponent } from './pageprofesseur/profil/profil.component';
import { ThesardComponent } from './pageprofesseur/thesard/thesard.component';
import { HeaderprofesseurComponent } from './pageprofesseur/headerprofesseur/headerprofesseur.component';
import { ContainerComponent } from './pageprofesseur/container/container.component';
import { AjouterthesardComponent } from './pageprofesseur/ajouterthesard/ajouterthesard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProfilComponent,
    ThesardComponent,
    HeaderprofesseurComponent,
    ContainerComponent,
    AjouterthesardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
