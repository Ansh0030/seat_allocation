import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  myForm !: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      row: ['', Validators.required],
      col: ['', Validators.required],
      empcode: ['', [Validators.required]],
      name: ['', Validators.required],
      last: [''],
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);

  }

}
