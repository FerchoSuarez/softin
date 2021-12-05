import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from '@Pages/layout/components/menu/menu.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { HeaderComponent } from './Pages/layout/components/header/header.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { MaterialModule } from '@material/material.module';
import { FooterComponent } from '@Pages/layout/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
