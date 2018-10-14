import {Component, Input, OnInit} from '@angular/core';
import {DashboardCardModel} from '../../model/dashboard-card.model';
import {faCircleNotch, faCoffee, faCommentDots, faDotCircle, faEllipsisV} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {
  @Input() public card: DashboardCardModel;
  public faEllipsisV = faEllipsisV;
  public faCoffee = faCoffee;
  public faDotCircle = faDotCircle;
  public styles = 'dashboard-card inserted';
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.styles = 'dashboard-card';
    }, 200);
  }
}
