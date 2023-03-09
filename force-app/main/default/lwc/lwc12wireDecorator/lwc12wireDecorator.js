import { LightningElement, api, wire } from 'lwc';
import getAcc from '@salesforce/apex/controllerGetRecords.getAccounts';

export default class Lwc12wireDecorator extends LightningElement {

accList;
errorList;

@wire (getAcc) getAccRecords({data,error}){
if(data){
    this.accList=data;
}
else if(error){
    this.errorList=error;
}

};

}