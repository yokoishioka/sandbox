import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmulatedComponent } from './emulated/emulated.component';
import { EmulatedNoClassComponent } from './emulated/emulated-no-class/emulated-no-class.component';
import { EmulatedClassComponent } from './emulated/emulated-class/emulated-class.component';
import { NoneComponent } from './none/none.component';
import { NoneClassComponent } from './none/none-class/none-class.component';
import { NoneNoClassComponent } from './none/none-no-class/none-no-class.component';
import { ShadowComponent } from './shadow/shadow.component';
import { ShadowClassComponent } from './shadow/shadow-class/shadow-class.component';
import { ShadowNoClassComponent } from './shadow/shadow-no-class/shadow-no-class.component';


@NgModule({
  declarations: [
    AppComponent,
    EmulatedComponent,
    EmulatedNoClassComponent,
    EmulatedClassComponent,
    NoneComponent,
    NoneClassComponent,
    NoneNoClassComponent,
    ShadowComponent,
    ShadowClassComponent,
    ShadowNoClassComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
