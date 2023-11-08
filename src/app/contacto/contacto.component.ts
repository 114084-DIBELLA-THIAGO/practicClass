import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  myForm : FormGroup;

  constructor(private fb: FormBuilder) {
    
  }
  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      message: 'default message',
      career : ''
    })

    this.myForm.valueChanges.subscribe(console.log);
  }
}
