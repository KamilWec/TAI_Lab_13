import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ContactComponent } from "./components/contact/contact.component";
import { BlogComponent } from "./components/blog/blog.component";
import { BlogItemDetailsComponent } from "./components/blog-item-details/blog-item-details.component";
import { BlogHomeComponent } from "./components/blog-home/blog-home.component";

const routes: Routes = [
  {
	    path: '',
	    component: HomeComponent,
	    canActivate: [AdminGuard]
  },
  {
	    path: 'contact',
	    component: ContactComponent,
	    canActivate: [AdminGuard]
  },
  {
      path: 'blog',
	    component: BlogHomeComponent,
	    canActivate: [AdminGuard]
  },
  {
      path: 'blog/detail/:id',
      component: BlogItemDetailsComponent,
      canActivate: [AdminGuard]
  },
  {
      path: 'add-post',
      component: AddPostComponent,
      canActivate: [AdminGuard]
  },
  {
      path: 'login',
      component: LoginComponent,
      canActivate: [AdminGuard]
  },
  {
      path: 'signup',
      component: SignUpcomponent,
      canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
