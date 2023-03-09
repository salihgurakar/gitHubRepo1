import { LightningElement } from 'lwc';

export default class LwcDers4 extends LightningElement {
    isim;
soyisim;
yas;
memleket;

isim1;
soyisim1;
yas1;
memleket1;

handlemethod1(event){
this.isim = event.target.value;
}
handlemethod2(event){
    this.soyisim = event.target.value;  
}
handlemethod3(event){
    this.yas = event.target.value;    
}
handlemethod4(event){
    this.memleket = event.target.value;   
}

handleClick(){
this.isim1 = this.isim;
this.soyisim1 = this.soyisim;
this.yas1 = this.yas;
this.memleket1 = this.memleket;
}
}