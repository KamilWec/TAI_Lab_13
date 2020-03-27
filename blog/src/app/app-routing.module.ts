import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
	    path: '',
	    component: HomeComponent,
  },
  {
	    path: 'contact',
	    component: ContactComponent,
},
{
      path: ‘blog’,
	    component: BlogComponent,

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
