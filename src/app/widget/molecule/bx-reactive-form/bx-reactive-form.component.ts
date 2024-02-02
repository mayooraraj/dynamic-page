import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedataService } from 'src/app/service/sharedata.service';


@Component({
  selector: 'app-bx-reactive-form',
  templateUrl: './bx-reactive-form.component.html',
  styleUrls: ['./bx-reactive-form.component.scss']
})
export class BxReactiveFormComponent implements OnInit{
  reactiveForm!: FormGroup;

  countryOptions = [
    {label : 'India' , value : 'India'},
    {label : 'USA' , value : 'USA'},
    {label : 'UAE' , value : 'UAE'},
    {label : 'UK' , value : 'UK'},

  ]
  countryCodes = [
    {label : '+91' , value : '+91'},
    {label : '+1' , value : '+1'},
    {label : '+971' , value : '+971'},
    {label : '+44' , value : '+44'},

  ]
  inputfieldStyle = {
    width: '302px',
    height: '35px',
  }
  phoneStyle = {
    width :'232px',
    height :'35px',
  }
  countryStyle = {
    width: '302px',
    height: '35px',
  
  };
  countryCodeStyle = {
    width : '70px',
    height: '35px',
  }

  constructor(private fb:FormBuilder,private router: Router, private displayService:SharedataService){}

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      name:['', Validators.required],
      company:['', Validators.required],
      email:['',[ Validators.required, Validators.email]],
      role:['', Validators.required],
      phno:['', [Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]],
      country:['', Validators.required],
      codes:['', Validators.required],
      textarea:['', Validators.required],
      message:['', Validators.required],
      file:['', Validators.required],
      badge: [''],
    });
  }
  
  onSubmit(){
    if(this.reactiveForm.valid)
    {
      console.log(this.reactiveForm.value); 
      this.displayService.updateFormData(this.reactiveForm.value);
      this.router.navigate(['/display']);
      alert("form submited");
    }
    else{
      alert('Please fill in all the required fields.');
    }
    
  }
 
}
