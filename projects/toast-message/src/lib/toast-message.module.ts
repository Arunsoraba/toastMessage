import { NgModule } from '@angular/core';
import { ToastMessageComponent } from './toast-message.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ToastMessageComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [ToastMessageComponent]
})
export class ToastMessageModule { }
