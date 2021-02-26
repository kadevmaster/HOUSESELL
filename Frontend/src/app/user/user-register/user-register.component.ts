import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  registerationForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.registerationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      cPassword: new FormControl(null, Validators.required),
      mobile: new FormControl(null, [Validators.required, Validators.minLength(10)])
    },this.passwordMatchingValidator)
    this.registerationForm.controls['userName'].setValue('Default value')
  }
  passwordMatchingValidator(fg: FormGroup):Validators{
    return fg.get('password').value === fg.get('cPassword').value ? null:
    {notmatched:true};
  }

  /// Getter methods for all from controls
  get userName(){
    return this.registerationForm.get('userName') as FormControl;
  }

  get email(){
    return this.registerationForm.get('email') as FormControl;
  }

  get password(){
    return this.registerationForm.get('password') as FormControl;
  }

  get cPassword(){
    return this.registerationForm.get('cPassword') as FormControl;
  }

  get mobile(){
    return this.registerationForm.get('mobile') as FormControl;
  }

  onSubmit()
  {
    console.log(this.registerationForm)
  }
}
