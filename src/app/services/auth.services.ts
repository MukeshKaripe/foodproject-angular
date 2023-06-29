import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
login(uname:string,pwords:string){
if(uname == 'anil' && pwords == '12345'){
  return 200;
}
else if(uname=='ajay' && pwords == '1'){
return 200;
}
else{
  return 403;

}

}
logout(){
this.router.navigate(['login']);

}
}
