import { Component, OnInit } from '@angular/core';
import Stats from 'src/app/interfaces/stats.interface';
import { StatsDataService } from 'src/app/services/stats-data.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  public topFive: Stats[] = [];
  public topSales: Stats[] = [];
  public topUnique: Stats[] = [];

  constructor(public _stats: StatsDataService) { }

  ngOnInit(): void {

    this._stats.getTopFiveProducts().subscribe((res: Stats[]) => {
      this.topFive = res;
    })
    this._stats.getTopUniqueProducts().subscribe((res: Stats[]) => {
      this.topUnique = res;
    })
  
    this._stats.getTopSaleDays().subscribe((res: Stats[]) => {
      this.topSales = res;
    })
  }
}
