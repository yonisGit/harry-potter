import {Injectable} from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertErrorService {

  constructor() {
  }

  alertError(errMsg: string) {
    swal.fire(errMsg);
  }
}
