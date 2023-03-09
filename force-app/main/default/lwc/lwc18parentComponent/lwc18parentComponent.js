import { LightningElement } from 'lwc';

export default class Lwc18parentComponent extends LightningElement {
    value;
    handleChange(event){
this.value = event.target.value*10;
    }
}