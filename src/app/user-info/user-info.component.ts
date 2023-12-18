import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
})
export class UserInfoComponent {
  formSubmitted = false;
  @ViewChild('myForm') myForm: NgForm;
  userForm:FormGroup;
  suggestUserName() {
    const suggestedName = 'SuperUser';
    // this.myForm.setValue({
    //     username:suggestedName,
    //     email: '',
    //     secret:'pet'
    // })
    this.myForm.form.patchValue({userData:{username: suggestedName}});
  }
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  constructor(private fb: FormBuilder){
   this.userForm = this.fb.group({
    username:['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    secret:['', Validators.required],
    gender:['male', Validators.required,]
   })
  }
  onSubmit(){
    this.formSubmitted= true;
    this.userForm.markAllAsTouched();
    const userName=this.userForm.get('username').value;
    const secret = this.userForm.get('secret').value;
    const gender = this.userForm.get('gender').value;
    console.log(this.userForm, userName, secret, gender);
  }
}
