import { LightningElement , wire} from 'lwc';
import {publish, MessageContext} from 'lightning/messageService';
import optionSelected  from '@salesforce/messageChannel/OptionSelected__c';
export default class UnrelatedPublisherComponent extends LightningElement {

    get options() {
        return [
        { label: 'Black', value: 'Black' },
        { label: 'White', value: 'White' },
        { label: 'Red', value: 'Red' },
    ];
}
    selectedValue = '';

    @wire(MessageContext)
    messageContext;

    handleChange(event) {
        this.selectedValue = event.detail.value;
        const payload = { selectedOption: this.selectedValue };
        publish(this.messageContext, optionSelected, payload);
    }

}