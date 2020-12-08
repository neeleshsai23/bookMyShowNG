import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminComponent } from './admin/admin.component';
import { BookMovieComponent } from './book-movie/book-movie.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { PaymentComponent } from './payment/payment.component';
import { SignupComponent } from './signup/signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin',
  component:AdminDashComponent},
  {path:'adminLogin',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'userLogin',component:UserLoginComponent},
  {path:'movies',component:MoviesComponent},
  {path:'book',component:BookMovieComponent},
  {path:'payment',component:PaymentComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
