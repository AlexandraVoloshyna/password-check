import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  constructor() { 

  }
  passwordStrength(password: string): string {
    if (!password) {
      return 'empty';
    } else if (password.length < 8) {
      return 'weak';
    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /\d/.test(password);
      const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

      switch (true) {
        case hasLetters && hasDigits && hasSymbols:
          return 'strong';
        case (hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols):
          return 'medium';
        case hasDigits || hasLetters || hasSymbols:
          return 'easy';
        default:
          return 'weak';
      }
    }
  }

}
