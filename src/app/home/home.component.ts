import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {GlobalComponent} from '../global-component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      if(this.form.controls['username'].value === 'morador') {
        GlobalComponent.urlPerfilLogado = '/morador';
        this.router.navigate(['/morador']);
      } else {
        GlobalComponent.urlPerfilLogado = '/sindico';
        this.router.navigate(['/sindico']);
      }
    }
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  ngOnInit(): void {
  }

}
