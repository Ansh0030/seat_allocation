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
      row: [{ value: '1', disabled: true }, Validators.required],
      col: [{ value: '2', disabled: true }, Validators.required],
      empcode: ['', [Validators.required]],
      name: [{ value: 'Ansh', disabled: true }, Validators.required],
      last: [{ value: '', disabled: true }]
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.getRawValue());

  }

}
