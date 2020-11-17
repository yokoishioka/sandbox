import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmulatedComponent } from './emulated/emulated.component';
import { NoneComponent } from './none/none.component';
import { ShadowComponent } from './shadow/shadow.component';



const routes: Routes = [
  {
    path: 'emulated',
    component: EmulatedComponent
  },
  {
    path: 'none',
    component: NoneComponent
  },
  {
    path: 'shadow',
    component: ShadowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
