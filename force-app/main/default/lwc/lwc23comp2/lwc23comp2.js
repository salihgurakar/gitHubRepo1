import { LightningElement,wire } from 'lwc';
import {subscribe,unsubscribe,MessageContext} from 'lightning/messageService';
import mesaj from '@salesforce/messageChannel/componentComminication__c'

export default class Lwc23comp2 extends LightningElement {

    ad;
    subscription = null;
    @wire(MessageContext) mesCont;

connectedCallback(){
    this.subscription = subscribe(
        this.mesCont,mesaj,
        (message) => {
this.handleSonuc(message);
        }

    )
}
handleSonuc(message){
this.ad = message.postakusu
}

disconnectedCallback(){
    unsubscribe(this.subscription);
    this.subscription=null;
}
}