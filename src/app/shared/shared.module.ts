import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [LoaderComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, LoaderComponent, HeaderComponent, FooterComponent]
})
export class SharedModule { }
