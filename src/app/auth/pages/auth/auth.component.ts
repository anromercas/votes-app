import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['nuri2@mail.com', [Validators.required, Validators.email]],
      password: ['1234', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login() {
    if(this.form.invalid) {
      return;
    }

    this.authService.login(this.form.value.email, this.form.value.password).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/dashboard']);
      },
      err => {
        console.log(err)
        let message = '';
        if (err.error.message === 'NOT_FOUND_USER') {
          message = 'El usuario no existe';
        }
        if(err.error.message === 'WRONG_CREDENTIALS') {
          message = 'Usuario o contraseña incorrecta';
        }
        this._snackBar.open(message, 'Ok', {
          duration: 3000
        });
      })
  }


}
