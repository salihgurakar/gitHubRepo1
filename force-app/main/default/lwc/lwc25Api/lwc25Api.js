import { LightningElement } from 'lwc';

export default class Lwc25Api extends LightningElement {
    
    gender;        
    firstName;
    lastName;
    email;
    picture;
    
    handleClick(){
        fetch('https://randomuser.me/api/', {method:"GET"}).then(
            response => response.json() ).then(data => { 
            console.log(data); 
              
            
            this.gender = data.results[0].gender; 
            this.firstName=data.results[0].name.first; 
            this.lastName=data.results[0].name.last;
            this.email = data.results[0].email; 
            this.picture=data.results[0].picture.medium; 

            

            

        });
    }
}