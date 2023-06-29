import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: ' ',redirectTo:'signup', pathMatch:'full'},
  {path:'', component:SignupComponent  },
  {path:'login', component: LoginComponent   },



  {
    path:'home',component:HomeComponent
  },
  {
    path:'search/:searchItem', component:HomeComponent
  },
  {
    path:'tag/:tag', component:HomeComponent
  },
 {
  path:'food/:id', component:FoodpageComponent
 },
 {path:'cart-page', component:CartPageComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
