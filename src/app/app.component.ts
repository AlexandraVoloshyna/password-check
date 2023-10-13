import { Component, } from '@angular/core';
import { PasswordStrengthService } from './password-strength.service';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private passwordStrengthService: PasswordStrengthService) { }
  strength: string = 'empty';
  FormGroup = new FormGroup({
    password: new FormControl("")
  })
  
  checkPasswordStrength() {
    const passwordControl = this.FormGroup.get('password')?.value;
  if (passwordControl !== null && passwordControl !== undefined) {
      this.strength = this.passwordStrengthService.passwordStrength(passwordControl);
        }
    }
    
}
