import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {

  arr=['Dell','Acer','HP',"mac"];

  personDetails=[{
    id:302,
    name:"kavita",
    contact:4567899
  },
{
  id:302,
    name:"prachi",
    contact:4567678899
},
{
  id:302,
    name:"Rohit",
    contact:4567899
}
]
colors=true;



condition=true;
myage=19;


}
