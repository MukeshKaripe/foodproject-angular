// import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RatingModule } from 'primeng/rating';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    FoodpageComponent,
    NotfoundComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    RadioButtonModule,
    FormsModule,
    HttpClientModule ,
    ReactiveFormsModule,
    ButtonModule,
    
    

    
    
    
 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { 
 
}
