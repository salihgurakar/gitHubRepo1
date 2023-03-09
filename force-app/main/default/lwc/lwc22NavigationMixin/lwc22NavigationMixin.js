import { LightningElement, api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class Lwc22NavigationMixin extends NavigationMixin (LightningElement) {
    @api objectApiName;
    @api recordId;
        HandleClick1(){
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Contact',
                    actionName: 'list',
                },
                state:{
                    filterName: 'BirthdaysThisMonth'
                }
            })
        }
    
        objName;
        handleInput(event){
    this.objName = event.target.value;
        }
    
        HandleClick2(){
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: this.objName,
                    actionName: 'new',
                },
               
            })
        }
    
    
        handleClick3(){
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    objectApiName: this.objectApiName,
                    recordId: this.recordId,
                    actionName: 'edit',
                },
               
            })
        }
    
        handleClick4(){
            this[NavigationMixin.Navigate]({
                type: 'standard__namedPage',
                attributes: {
                    pageName: 'chatter'
                },
               
            })
        }
    
        handleClick5(){
            this[NavigationMixin.Navigate]({
                type: 'standard__webPage',
                attributes: {
                    url: 'https://developer.salesforce.com/docs/component-library/overview/components'
                },
               
            })
        }
    
        handleClick6(){
            this[NavigationMixin.Navigate]({
                type: 'standard__navItemPage',
                attributes: {
                    apiName: 'BetaTR'
                },
               
            })
        }
    
}