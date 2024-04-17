import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

interface Painting {
  id: string;
  name: string;
  artist: string;
  dimensions: {
    width: number;
    height: number;
  };
  medium: string;
  picture: string;
  famous: boolean;
}
@Component({
  selector: 'app-painting',
  templateUrl: './Painting.component.html',
  styleUrls: ['./Painting.component.css']
})
export class PaintingComponent implements OnInit {
  painting: Painting | null = null;
  imageUrl: string = 'mona_lisa.png';
  isFamous: boolean = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getPaintingData().subscribe((data: any) => {
      this.painting = data;
      this.imageUrl = 'assets/images/mona_lisa.png';
    });
  }


      toggleFamous(value: boolean) {
      this.isFamous = value; // Update the value of isFamous
    }

  }

