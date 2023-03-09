import { LightningElement,api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.email';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class Ders11CreateFunctions extends LightningElement { 
    name=NAME_FIELD;
    phone=PHONE_FIELD;
    email=EMAIL_FIELD;
    handleSuccess(event){
        const tost = new ShowToastEvent({
            title: "Contact created",
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        }); 
        this.dispatchEvent(tost);
    }   
handleReset(event) {
   const inputFields = this.template.querySelectorAll(
       'lightning-input-field'
   );
   if (inputFields) {
       inputFields.forEach(field => {
           if(field.name === 'emre'){
            field.reset();
           }
       });
   }
  }
}