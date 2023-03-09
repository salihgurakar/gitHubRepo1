import { LightningElement } from 'lwc';
export default class BetaP1 extends LightningElement {
    name; 

    handleChangeEvent(event){
        this.name = event.target.value; 
        console.log(this.name);
    }
    handleClick(event){
        console.log(this.name);
        // Event Communication from parent javascript we can pass the value to child compoent. 
      
        this.template.querySelector('c-beta-p2').getRealDate(this.name);
        console.log();
    }
}