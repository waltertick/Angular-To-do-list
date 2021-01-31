import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  /*showSuccess( message,titlenotification){
    this.toastr.success(message,titlenotification)
  }*/
}
