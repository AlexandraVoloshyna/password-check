import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  constructor() { 

  }
  passwordStrength(password: string ): string {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
    if (!password) {
      return 'empty';
    } else if (password.length < 8) {
      return 'weak';
    } else if (hasLetters && hasDigits && hasSymbols) {
      return 'strong';
    }else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
      return 'medium';
    }else if (hasDigits || hasLetters || hasSymbols) {
      return 'easy';
    }else {
          return 'weak';
      }
  }

}
