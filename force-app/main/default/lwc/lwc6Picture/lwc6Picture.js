import { LightningElement } from 'lwc';
import jstc from '@salesforce/resourceUrl/justice'
export default class BetaAccountComp extends LightningElement {

    myImage=jstc;
   goster=false; 
   handleclick(){
    this.goster=!this.goster;
   }


}