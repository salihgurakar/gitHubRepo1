import { LightningElement,wire } from 'lwc';
import getCon from '@salesforce/apex/ControllerGetRecords.getContact';
const columns = [
    { label: 'Last Name', fieldName: 'LastName'  },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Birthdate', fieldName: 'Birthdate', type: 'date' },
    { label: 'Title', fieldName: 'Title', type: 'text' },
];
export default class lwc14WireParams extends LightningElement {
stn=columns;
conlist;
errorlist; 

limit =2;
offset =0;
params;

handleChange1(event){
    this.limit = event.target.value;
} 
handleChange2(event){
    this.offset = event.target.value;
} 
handleChange3(event){
    this.params = event.target.value;
} 
handleclick(){
    this.limit +=2;
}
@wire (getCon,{str:'$params',lmt:'$limit', off:'$offset' } ) getContact({data,error}){
    if(data){
        this.conlist = data;  
    }
    else if(error){
        this.errorlist = error;
    }
}

}


