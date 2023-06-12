import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.scss']
})
export class TwowayComponent {
name="Abc";
newimg="https://images.pexels.com/photos/6445418/pexels-photo-6445418.jpeg?auto=compress&cs=tinysrgb&w=300";

img="https://images.pexels.com/photos/1663360/pexels-photo-1663360.jpeg?auto=compress&cs=tinysrgb&w=300";
onChange()
{

  this.img=this.newimg;
}
}
