import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  ngOnInit(): void {
    this.form.patchValue({ email: 'default@mail.com' });
  }

  onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
      this.form.reset();
    }
  }
}
