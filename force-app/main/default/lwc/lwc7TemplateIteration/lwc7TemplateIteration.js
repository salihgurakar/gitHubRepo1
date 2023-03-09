import { LightningElement } from 'lwc';

export default class Lwc7TemplateIteration extends LightningElement {
    customerList = [
        {
        id:1,
        name: "Jim Carrey",
        phone: "+999 888 77 66",
        email: "jim@carrey.com",
        
        },
        {
        id:2,
        name: "Jack Bauer",
        phone: "+888 777 66 55",
        email: "jack@bauer.com",
        
        },
        {
        id:3,
        name: "Chuck Norris",
        phone: "+777 666 55 44",
        email: "chuck@norris.com",
        
        }
        ];
}