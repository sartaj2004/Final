import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeComponent } from './college/college.component';  // Changed from PaintingComponent

const routes: Routes = [
  { path: 'college', component: CollegeComponent },  // Changed from painting to college
  { path: '', redirectTo: '/college', pathMatch: 'full' } // Redirect to the college component by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
