import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginform:any= FormGroup;
  submitted = false;
 
 
  constructor() { 
    
  }

  ngOnInit() {
    this.loginform = new FormGroup({
    email: new FormControl('',[Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    pass: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(6)]),
    check: new FormControl('',Validators.required)
  })
}
  myLogin()
  {
     this.submitted = true;
    if(this.loginform.valid)
    {
      alert("LoggedIn Successfully");
      this.loginform.reset();
      this.submitted = false;
    }
  
  }
    
}
