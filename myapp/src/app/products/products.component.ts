import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
color="red";

myStyles = {
  backgroundColor: "red",
  textAlign:"center",
  textTransform:"uppercase",
  color:'white',
  wordSpacing:'3px'
  }
}
