import {Component, Input, OnInit} from '@angular/core';
import {DashboardCardModel} from '../../model/dashboard-card.model';
import { faCoffee, faEllipsisV} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() public card: DashboardCardModel;
  public faEllipsisV = faEllipsisV;
  constructor() { }

  ngOnInit() {
  }
}
