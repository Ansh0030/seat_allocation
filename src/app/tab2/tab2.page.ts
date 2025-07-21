import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../tab1/tab1.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

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
        name: [{ value: '', disabled: true }, Validators.required],
        last: [{ value: '', disabled: true }]
      });
    });
    this.myForm.get('empcode')?.valueChanges.subscribe(empcode => {
      const user = this.users.find(u => u.empId === empcode);

      if (user) {
        this.myForm.patchValue({
          name: user.name,
          last: user.lastName
        });
      } else {
        this.myForm.patchValue({
          name: '',
          last: ''
        });
      }
    });
  }

  users: User[] = [
    { empId: "E0240", name: 'Ansh', lastName: "Kumar", email: 'alice@company.com' },
    { empId: "2", name: 'Bob', lastName: "Kumar", email: 'bob@company.com' },
    { empId: "3", name: 'Charlie', lastName: "Kumar", email: 'charlie@company.com' }
  ];

  onSubmit(form: FormGroup) {
    console.log(form.getRawValue());
    this.router.navigate(['/tab1']);
  }
}
