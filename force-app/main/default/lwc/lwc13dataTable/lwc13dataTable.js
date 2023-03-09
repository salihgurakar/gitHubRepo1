import { LightningElement, api, wire } from 'lwc';
import getAcc from '@salesforce/apex/controllerGetRecords.getAccounts';
import Id from '@salesforce/user/Id';
const columns = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Website', fieldName: 'Website', type: 'url' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency' },
    { label: 'Site', fieldName: 'Site', type: 'text' },
];

export default class Lwc12wireDecorator extends LightningElement {
stn = columns;
accList;
errorList;
usrId = Id;
@wire (getAcc,{ownId:'$usrId'}) getAccRecords({data,error}){
if(data){
    this.accList=data;
}
else if(error){
    this.errorList=error;
}

};

}