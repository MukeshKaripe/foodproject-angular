import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
constructor(private router:ActivatedRoute){

}

reactiveForm:FormGroup;

ngOnInit(): void {
 this.reactiveForm = new FormGroup({
firstname:new FormControl(null, Validators.required),
email:new FormControl(null ,[ Validators.required,Validators.email]),
country:new FormControl('India'),
gender:new FormControl('male'),

password:new FormControl(null)



 })
}

userArray :any[]=[];
onSubmit(){
  console.log(this.reactiveForm.value);

  this.userArray.push(this.reactiveForm.value);
  localStorage.setItem('userdata',JSON.stringify(this.userArray))
  
}


}
