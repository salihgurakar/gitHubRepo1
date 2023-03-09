import { LightningElement, wire } from 'lwc';
import {publish, MessageContext} from 'lightning/messageService';
import mesaj from '@salesforce/messageChannel/componentComminication__c';
export default class Lcw23comp1 extends LightningElement {

    @wire(MessageContext) mesCont;
    isim;
    handleChange(event){
    this.isim = event.target.value;
    }
    handleClick(){
        const message = {
            postakusu: this.isim
        };
    publish(this.mesCont,mesaj,message);
    }

}