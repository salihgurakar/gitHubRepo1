import { LightningElement,wire,api } from 'lwc';
import getQsc from '@salesforce/apex/ControllerGetRecords.GetQuestionRecords'
export default class Ders19ExamQuestion extends LightningElement {
    columns = [{
        label:'Question Name', fieldName:'Name'
    },{
        label:'Qsc Score' , fieldName:'Score__c',type:'number'
    }]
@api examId;
    qsclist;
    errorlist;
    @wire (getQsc,{exId:'$examId'}) questionDetail({data,error}){
        if(data){
this.qsclist = data;
        }else if(error){
this.errorlist=error;
        }
    }


}