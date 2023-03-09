import { LightningElement, api,  wire} from 'lwc';
import {subscribe,unsubscribe,MessageContext} from 'lightning/messageService';
import optionSelected  from '@salesforce/messageChannel/OptionSelected__c'
export default class UnrelatedSubscriberComponent extends LightningElement {
    @api selectedOption = '';

    @wire(MessageContext)
    messageContext;

    subscription;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    subscribeToMessageChannel() {
        this.subscription = subscribe(
            this.messageContext,
            optionSelected,
            (message) => {
                this.selectedOption = message.selectedOption;
            }
        );
    }

    disconnectedCallback() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

}