import { AlertifyService } from './../../services/alertify.service';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  registerationForm:FormGroup;
  user: User;
  userSubmited:boolean;
  constructor(private fb : FormBuilder,
              private userService : UserServiceService,
              private alertifyService :AlertifyService) { }

  ngOnInit() {
    // this.registerationForm = new FormGroup({
    //   userName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, Validators.email),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   cPassword: new FormControl(null, Validators.required),
    //   mobile: new FormControl(null, [Validators.required, Validators.minLength(10)])
    // },this.passwordMatchingValidator)
    this.createRegisterationForm();
    this.registerationForm.controls['userName'].setValue('Default value')
  }

  //use FormBuilder
  createRegisterationForm(){
    this.registerationForm = this.fb.group({
      userName:[null, Validators.required],
      email:[null,[Validators.required, Validators.email]],
      password:[null, [Validators.required,Validators.minLength(8)]],
      cPassword:[null, Validators.required],
      mobile:[null, [Validators.required,Validators.maxLength(10)]],
    },{validators : this.passwordMatchingValidator})
  }

  passwordMatchingValidator(fg: FormGroup):Validators{
    return fg.get('password').value === fg.get('cPassword').value ? null:
    {notmatched:true};
  }

  onSubmit()
  {
    console.log(this.registerationForm.value);
    this.userSubmited = true;

    if(this.registerationForm.valid){
    // this.user = Object.assign(this.user, this.registerationForm.value);
    this.userService.addUser(this.userData());
    this.registerationForm.reset();
    this.userSubmited = false;
    this.alertifyService.success('Congrats, you are successfully registered');
  } else
  {
    this.alertifyService.error('Kindly provide the required fields');
  }
}

userData():User {
  return this.user = {
    userName:this.userName.value,
    email:this.email.value,
    password:this.password.value,
    mobile:this.mobile.value,
  }
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
}
