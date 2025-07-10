import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const row = params['row'];
      const col = params['col'];

      this.myForm = this.fb.group({
        row: [{ value: row || '', disabled: true }, Validators.required],
        col: [{ value: col || '', disabled: true }, Validators.required],
        empcode: ['', [Validators.required]],
        name: [{ value: 'Ansh', disabled: true }, Validators.required],
        last: [{ value: '', disabled: true }]
      });
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.getRawValue());
    this.router.navigate(['/tab1']);
  }
}
