import { LightningElement } from 'lwc';

export default class LwcDers5HesapMakinesi extends LightningElement {
    goster=false;    
    number1;    
    number2;
    sonuc;
    oncekiSonuclar=[];

        handlemethod1(event){ 
        if(event.target.name === 'num1'){
          this.number1 = event.target.value;  
        }    
        if(event.target.name === 'num2'){
            this.number2 = event.target.value;  
          } 
        } 
    
    toplama(){
    this.sonuc = parseInt(this.number1)  + parseInt(this.number2);
    this.oncekiSonuclar.push(this.sonuc);
    }
    cikarma(){
    this.sonuc = parseInt(this.number1)  - parseInt(this.number2);
    this.oncekiSonuclar.push(this.sonuc);
        }
    carpma(){
    this.sonuc = parseInt(this.number1)  * parseInt(this.number2);
    this.oncekiSonuclar.push(this.sonuc);
    }
    bolme(){
    this.sonuc = parseInt(this.number1)  / parseInt(this.number2);
    this.oncekiSonuclar.push(this.sonuc);
}
silme(){
    this.sonuc='';
    this.oncekiSonuclar=[]; 
}
/*
show(){
    this.goster = true;
    }   
hide(){
    this.goster=false;
}   
*/ 
handleclick(){ //diğer çözüm: this.goster=!this.goster;
    if(this.goster == false){
        this.goster = true;
    }
    else if(this.goster == true){
        this.goster = false;
    }

}

}