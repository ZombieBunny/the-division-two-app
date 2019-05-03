import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gear-model-card',
  templateUrl: './gear-model-card.component.html',
  styleUrls: ['./gear-model-card.component.css']
})
export class GearModelCardComponent implements OnInit {

  @Input() gearModel;
  @Output() selected = new EventEmitter();
  public types = ['Offensive', 'Defensive', 'Utility'];

  constructor() {
  }

  ngOnInit() {
  }

  public select(): void {
    this.selected.emit(this.gearModel);
  }

}
