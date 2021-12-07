import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length = 0;
  password = '';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;


onInputLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
}

  onButtonClick() {
    console.log(`
    About to generate a password with the next parameters:
    Use Letters param: ${this.useLetters}
    Use Numbers param: ${this.useNumbers}
    Use Symbols param: ${this.useSymbols}
    `)
    this.password = 'some Password';

    const numbers = '1234567890'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!§$%&/()=?*+#-.,;:_'

    let validChars = '';

    if (this.useLetters) {
      validChars += letters; 
    }
    
    if (this.useNumbers) {
      validChars += numbers; 
    }

    if (this.useSymbols) {
      validChars += symbols; 
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index]
    }
    this.password = generatedPassword;
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }
  
  onChangeUseNumbers() { 
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }
}
