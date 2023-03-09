import { LightningElement, wire } from 'lwc';
import getOpp from '@salesforce/apex/controllerGetRecords.getOpps';
const columns = [
    { label: 'Opportunity Name', fieldName: 'Name' },
    { label: 'Stage Name', fieldName: 'StageName'},
    { label: 'Close Date', fieldName: 'CloseDate', type: 'date' },
    { label: 'Amount', fieldName: 'Amount', type: 'currency' },
    { label: 'Account Name', fieldName: 'Account.Name', type:'Lookup'},
    { label: 'Type', fieldName: 'Type' },
    { label: 'Probability', fieldName: 'Probability', type: 'percent' },
    { label: 'Owner Name', fieldName: 'Owner.Name', type:'Lookup'},
    { label: 'Created Date', fieldName: 'CreatedDate', type:'date'},
    { label: 'Lead Source', fieldName: 'LeadSource'},
];
export default class OppRecords extends LightningElement {
    stn = columns;
    oppList;
    errorList;
    
    @wire (getOpp) getOppRecords({data,error}){
    if(data){
        this.oppList=data;
    }
    else if(error){
        this.errorList=error;
    }
    
    };
    
    }