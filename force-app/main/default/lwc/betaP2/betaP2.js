import { api, track, LightningElement } from 'lwc';
export default class BetaP2 extends LightningElement {

    @track 
    message; 

    @api
    getRealDate(param1){
        console.log('it is p2' + param1);
        this.message = param1; 
        
    }
}