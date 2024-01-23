import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm:any= FormGroup;
  submitted = false;

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstname : new FormControl('',Validators.required),
      lastname : new FormControl('',Validators.required),
      // email: new FormControl('',[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)]),
     email: new FormControl('',
     [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password : new FormControl('',
      [Validators.required,Validators.minLength(3),Validators.maxLength(6)]),
    })
  }
  Onsubmit()
  {
    this.submitted =true;
    console.log(this.userForm);
    if(this.userForm.valid)
    {
      alert('Registered Successfully');
      this.userForm.reset();
      this.submitted= false;
     

    }
   
  }
 

}
