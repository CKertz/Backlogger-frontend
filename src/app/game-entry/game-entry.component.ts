import { Component, OnInit } from '@angular/core';
import { GameEntryService } from '../game-entry.service';

@Component({
  selector: 'app-game-entry',
  templateUrl: './game-entry.component.html',
  styleUrls: ['./game-entry.component.css']
})
export class GameEntryComponent implements OnInit {
  entryData: any;
  constructor(private gameEntryService: GameEntryService){}

  ngOnInit(): void {
  this.gameEntryService.getEntries().subscribe({
    next: (res) => {
      this.entryData = res;
      console.log('Data received:', res);
    },
    error: (err) => {
      console.error('Error fetching data:', err);
    }
  });
}
}
