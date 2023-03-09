import { LightningElement } from 'lwc';
import LightningModal from 'lightning/modal';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Lwc24ModalPopup extends LightningModal  {

    fields=['Name', 'Rating', 'Phone', 'AnnualRevenue'];
    handleSuccess(event){
        this.close('okay');
        const tost = new ShowToastEvent({
            title: "Contact created",
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        }); 
        this.dispatchEvent(tost);
    }


}