import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BxFirstpageComponent } from './layout/bx-firstpage/bx-firstpage.component';
import { BxFrstpageDisplayComponent } from './layout/bx-frstpage-display/bx-frstpage-display.component';


const routes: Routes = [
 {path:'',component:BxFirstpageComponent},
 {path:'display',component:BxFrstpageDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
