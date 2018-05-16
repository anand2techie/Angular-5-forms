import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  defaultQuestion="teacher";
  answer="";
  genders=["male","female"];
  @ViewChild("f") ngForm:NgForm;
  hasMyFormSubmitted=false;
  
  isSubmitButtonDisabled=true;
  username='';
  email='';

  user = {
    username:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  }


  constructor() { }

  ngOnInit() {
  }

  suggestAnUsername(){
    this.username='User #1';
  }

  enableSubmitButton(){
    if(this.username!='' && this.email!=''){
    this.isSubmitButtonDisabled=false;
    }else{
      this.isSubmitButtonDisabled=true;
    }
  }

  updateUsername(){
    alert('from username variable: '+this.username);
  }

  updateEmail(){
    
  }

  submitForm(){
    this.user.username=this.ngForm.value.username;
    this.user.email=this.ngForm.value.email;
    this.user.answer=this.ngForm.value.answer;
    this.user.gender=this.ngForm.value.gender;
    this.user.secretQuestion=this.ngForm.value.secretQuestion;
    this.hasMyFormSubmitted=true;
  }
}
