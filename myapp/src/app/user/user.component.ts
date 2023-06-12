import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

fname:any;
lname:any;
msg:any;


onshow(a:any,b:any){
this.fname = a.value;
this.lname = b.value;
this.msg = "Wlcome user"+this.fname+' '+this.lname
}


}
