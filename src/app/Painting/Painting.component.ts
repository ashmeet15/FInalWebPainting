import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-painting',
  templateUrl: './Painting.component.html',
  styleUrls: ['./Painting.component.css']
})
export class PaintingComponent implements OnInit {
  painting: any;
  imageUrl: string = 'mona_lisa.png';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPaintingData().subscribe(data => {
      this.painting = data;
      this.imageUrl = 'assets/images/mona_lisa.png' ;
    });
  }
}
