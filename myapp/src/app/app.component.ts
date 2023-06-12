import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular tutorial application';

  myname="Deepika";
  employename="prachi";

  display()
  {
    alert("hello"+this.myname);
    console.log("welcome to angular!!");

  }

  laptops=['dell','acer','hp'];

  persons=[{
    id:101,
    name:'abc',
    address:'thane',
    contact:23445566
  }
]
  imageurl="https://images.pexels.com/photos/165505/pexels-photo-165505.jpeg?auto=compress&cs=tinysrgb&w=600";

waterurl="./assets/images/water.webp";
}
