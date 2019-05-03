import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, HeaderComponent, FooterComponent]
})
export class CoreModule { }
