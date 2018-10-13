import {Component, OnInit} from '@angular/core';
import {DashboardCardModel} from './model/dashboard-card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public cards: DashboardCardModel[];

  public ngOnInit() {
    this.cards = [
      new DashboardCardModel({ value: 222}),
      new DashboardCardModel({ value: 100}),
      new DashboardCardModel({ value: 100}),
      new DashboardCardModel({ value: 100}),
      new DashboardCardModel({ value: 100}),
      new DashboardCardModel({ value: 100}),
      new DashboardCardModel({ value: 100}),
    ];
  }
}
