import { LightningElement } from 'lwc';

export default class Ders20ParentComponent extends LightningElement {
    
    deger;
    handleparent(event){

this.deger = event.detail;
    }
    
}