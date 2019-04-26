import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  // @Input() types;
  @Output() updated = new EventEmitter();

  public offensive = false;
  public defensive = false;
  public utility = false;

  constructor() {
  }

  ngOnInit() {
    this.update();
  }

  public update(): void {
    // construct array
    const list = [];
    if (this.offensive) {
      list.push('Offensive');
    }
    if (this.defensive) {
      list.push('Defensive');
    }
    if (this.utility) {
      list.push('Utility');
    }
    this.updated.emit(list);
  }

}
