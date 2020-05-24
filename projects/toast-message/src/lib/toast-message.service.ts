import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {
  private toasts: any[] = [];

  constructor() { }


  add(toast: any) {
      // add toast to array of active toasts
      this.toasts.push(toast);
  }

  remove(id: string) {
      // remove toast from array of active toasts
      this.toasts = this.toasts.filter(x => x.id !== id);
  }

  open(id: string) {
      // open toast specified by id
      let toast: any = this.toasts.filter(x => x.id === id)[0];
      toast.open();
  }

  close(id: string) {
      // close toast specified by id
      let toast: any = this.toasts.filter(x => x.id === id)[0];
      toast.close();
  }

  
}
