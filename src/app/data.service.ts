import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = {
    "id": "p1200",
    "name": "Mona Lisa",
    "artist": "Leonardo da Vinci",
    "dimensions": {
      "width": 21,
      "height": 30
    },
    "medium": "oil on poplar panel",
    "picture": "mona_liza.jpg",
    "isFamous": true,
    "isNotFamous": false
  };

  getPaintingData(): Observable<any> {
    return of(this.data);
  }

  setFamous(value: boolean) {
    this.data.isFamous = value;
  }
}
