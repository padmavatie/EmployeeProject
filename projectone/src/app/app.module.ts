import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { HeadComponent} from 'src/app/Header/head.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent
 ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
