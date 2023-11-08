import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quienes',
  templateUrl: './quienes.component.html',
  styleUrls: ['./quienes.component.css']
})
export class QuienesComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    
  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required
        , Validators.minLength(5),
        Validators.maxLength(10),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
      age: [null,[
        Validators.required
        , Validators.min(18)
        , Validators.max(120)]],
      agree: [false, [
        Validators.requiredTrue
      ]]
    })
  }

  get email (){
    return this.myForm.get('email')
  }
  get password(){
    return this.myForm.get('password')
  }
  get age(){
    return this.myForm.get('age')
  }
  get agree(){
    return this.myForm.get('agree')
  }

}
