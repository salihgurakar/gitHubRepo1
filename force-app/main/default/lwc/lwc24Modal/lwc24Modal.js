import { LightningElement } from 'lwc';
import ModalPopup from 'c/lwc24ModalPopup';
export default class Lwc24Modal extends LightningElement {


    async handleButon(){
        const modal = await ModalPopup.open({
        size: 'small',
        });
    }

}