import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.services';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
userGetData:any;
  loginForm:FormGroup;

  username="";
  password="";
errormsg ="";
constructor(private auth: AuthService, private router: Router  ){

  this.loginForm = new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')  
     })
  console.log(localStorage.getItem('userdata'));
this.userGetData=JSON.parse(localStorage.getItem('userdata'));

}

  login(){

    console.log(this.loginForm.value );
const values =this.loginForm.value;
console.log(this.userGetData);
for (let i = 0; i < this.userGetData.length; i++) {
console.log(this.userGetData[i]);
if(this.userGetData[i].email === values.email && this.userGetData[i].password === values.password ){
console.log('success');
this.router.navigate(['/home'])
alert('successfull login');

}

}




    
//    if(this.username.trim().length === 0){
// this.errormsg="usernae is required";

//    } 

//    else if(this.password.trim().length === 0){
//     this.errormsg = "valid password "
//    }
//    else{
//     this.errormsg = "";
// let res= this.auth.login(this.username,this.password);
// if(res === 200){
// this.router.navigate(['home']);


// }
// if(res === 403){
//   this.errormsg='error';
// }
//    }

  }

  reset(){
    this.loginForm.reset();
  //  this.router.navigate(['/login'])
   
     }
 
}
