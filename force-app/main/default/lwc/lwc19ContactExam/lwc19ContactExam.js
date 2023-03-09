import { LightningElement,api,wire } from 'lwc';
import getCon from '@salesforce/apex/ControllerGetRecords.GetExamRecords'
export default class lwc19ContactExam extends LightningElement {

@api recordId;
examlist;//exam recordlarının olduğu collection.
errorlist;
@wire (getCon,{conId:'$recordId'})examRecords({data,error}){
    if(data){
this.examlist = data;
    }
    else if(error){
this.errorlist = error;
    }
}

}