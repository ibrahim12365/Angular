import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-component.',
  templateUrl: './template-driven-form-component..component.html',
  styleUrls: ['./template-driven-form-component..component.css']
})
export class TemplateDrivenFormComponentComponent {

  formData = {
    name: '',
    email: '',
    typeOfCard: '',
    cardNumber: '',
    expiration: '',
    cvv: ''
  };
  
  onSubmit() {
    console.log('Formulaire soumis :', this.formData);
  }

}
