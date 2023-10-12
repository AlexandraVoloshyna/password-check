import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
  strength: string = 'empty';

  checkPasswordStrength() {
    const password = this.password;
  let strength = 'empty';

  if (!password) {
    strength = 'empty';
  } else if (password.length < 8) {
   
    strength = 'weak';
  } else {
    
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) {
      strength = 'strong';
    } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
      strength = 'medium';
    } else if (hasDigits || hasLetters || hasSymbols) {
      strength = 'easy';
    } else {
      strength = 'weak';
    }
  }

  
  this.strength = strength;
  }
}
