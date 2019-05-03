import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Services
import { BaseService } from '../core/http/base.service'

//components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, HeaderComponent, FooterComponent],
  providers:[BaseService]
})
export class CoreModule { }
