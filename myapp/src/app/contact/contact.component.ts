import { Component } from "@angular/core";

@Component({
    selector:"app-contact",
    templateUrl:'./contact.component.html',
    styleUrls:['./contact.component.scss']
})

export class ContactComponent{

fname="netra"
msg:any;
onwel(nm:any){
    this.fname = nm.value;
   alert(`Welcome to livetechIndia ${this.fname}`) 
}

onadd(){
    this.msg="you performed addition"
}



}