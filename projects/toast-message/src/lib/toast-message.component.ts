import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'Ngx-ToastMessage',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastMessageComponent implements OnInit {
@Input() message: string;
@Input() animationType: string;
@Input() addClass: string;
public toastVisible = 'toastShow';
@Output() close =  new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('message...'+ this.message);
  }
closeEvent() {
  this.close.emit();
}

closeToast() {
this.toastVisible = 'toastHide';
}


}
