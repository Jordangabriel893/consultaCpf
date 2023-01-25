import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NovoCoperadoComponent } from './novo-coperado/novo-coperado.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NovoCoperadoComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
