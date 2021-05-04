import { Component, Input, OnInit } from '@angular/core';
import Stats from 'src/app/interfaces/stats.interface';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent implements OnInit {

  @Input() product: Stats;
  @Input() sales: Stats;

  constructor() { }

  ngOnInit(): void {
  }

}
