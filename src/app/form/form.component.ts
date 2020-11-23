import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators,ReactiveFormsModule,FormsModule } from '@angular/forms';
// import { RegistrationService } from '../registration.service';
import { passwordValidator } from '../shared/password.validator';
import { forbiddenUsernameValidator } from '../shared/username.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registrationForm:FormGroup;
  constructor(private fb:FormBuilder)
  {}
  get alternateEmails()
  {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }
  addAlternateEmails()
  {
    this.alternateEmails.push(this.fb.control(''));
  }
  
  ngOnInit()
  {
    this.registrationForm=this.fb.group({
      username:['',[Validators.required,Validators.minLength(3),forbiddenUsernameValidator(/admin/)]],
      email:[''],
      subscribe:[false],
      password:[''],
      confirmPassword:[''],
      address:this.fb.group({
        city:[''],
        state:[''],
        postal:['']
      })
     ,alternateEmails:this.fb.array([])
    },{validators:passwordValidator});
   
    this.registrationForm.get('subscribe').valueChanges.subscribe(checkedValue=>{
      const email= this.registrationForm.get('email');
      if(checkedValue)
        {
          email.setValidators(Validators.required);
        }
        else
        {
          email.clearValidators();
        }
        email.updateValueAndValidity(); 
    });

  }
  
  loadApiDataViaSetValue()
{
  this.registrationForm.setValue(
    {
      username:"Hemant Kumar Shrivastava",
      password:"Hemanstsefr2rfg3405",
      confirmPassword:"Hemanstsefr2rfg3405",
      address:{
        city:"ujjain",
        state:"Madhya Pradesh",
        postal:"456010"
      }
    }
  );
}
loadApiDataViaPatchValue()
{
  this.registrationForm.patchValue(
    {
      username:"Hemant Kumar Shrivastava",
      password:"Hemanstsefr2rfg3405",
      confirmPassword:"Hemanstsefr2rfg3405"
    } 
  );
}
onSubmit()
{
  console.log(this.registrationForm.value);
}

}
