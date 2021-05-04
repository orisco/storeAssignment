import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class StatsDataService {

  constructor(private _request: WebRequestService) { }



  getTopFiveProducts() {
    return this._request.get('checkout/top-five')
  }

  getTopUniqueProducts() {
    return this._request.get('checkout/top-unique')
  }

  getTopSaleDays() {
    return this._request.get('checkout/top-sales')
  }
}
