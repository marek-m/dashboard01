import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {

  @Output() public onAdd: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  public handleOnAdd() {
    this.onAdd.emit();
  }

}
