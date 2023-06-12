import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { FormsModule } from '@angular/forms';
import { TwowayComponent } from './twoway/twoway.component';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    MobilesComponent,
    ContactComponent,
    UserComponent,
    ClassbindingComponent,
    TwowayComponent,
    DirectivesComponent,
  
  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
