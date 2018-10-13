import { Component, OnInit } from '@angular/core';
import {faAdjust, faAlignLeft, faCoffee, faEllipsisV} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  public faAlignLeft = faAlignLeft;
  public faAdjust = faAdjust;
  constructor() { }

  ngOnInit() {
  }

}
