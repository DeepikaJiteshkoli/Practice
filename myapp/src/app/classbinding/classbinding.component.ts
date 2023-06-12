import { Component } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.scss']
})
export class ClassbindingComponent {

  myclass="c1";

  p1=false;
  p2=false;
p3=true;
p4=true;

  maincss={

    'col1':this.p1,
    'col2':this.p2,
    'col3':this.p3,
    'col4':this.p4
  
  }

var=false;

  name="Angular for beginners";
  g=document.getElementsByClassName(this.name);

  
}
