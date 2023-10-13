import { Component } from '@angular/core';
import { PasswordStrengthService } from './password-strength.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private passwordStrengthService: PasswordStrengthService) { }
  password: string = '';
  strength: string = 'empty';

  checkPasswordStrength() {
    this.strength = this.passwordStrengthService.passwordStrength(this.password);
    }
}
