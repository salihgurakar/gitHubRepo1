import { LightningElement } from 'lwc';

export default class Lwc21DOM extends LightningElement {


    cardname;
    isim;
    handleClick(){
      //  this.cardname = this.template.querySelector('lightning-card').title; 
      this.template.querySelector('lightning-card').title = 'Card2';
      this.template.querySelector('.buton').label='Tikla';
      this.isim = this.template.querySelector('lightning-input').value
      this.template.querySelector('p').style.color = 'green';
    }
    handleSubmit(){
        this.template.querySelector('.salih').style.backgroundColor = "red";
        //this.template.querySelector('.salih').style.backgroundColor = "blue";
    }
}