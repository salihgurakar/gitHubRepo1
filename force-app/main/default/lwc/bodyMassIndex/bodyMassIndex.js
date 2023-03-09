import { LightningElement } from 'lwc';

export default class BodyMassIndex extends LightningElement {
   weight;
   height;
   result;

   onChangeWeight(event){
    this.weight=parseFloat(event.target.value)
   }
   onHeightChange(event){
    this.height=parseFloat(event.target.value)
   }
   handlerClick(){
    this.result = this.weight/(this.height*this.height);
   }
}