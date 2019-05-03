import { Component, OnInit } from '@angular/core';
import { GearService } from '../../../../services/gear.service';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {

  public types = ['Offensive', 'Defensive', 'Utility'];
  public attribute: { name: string, type: string, available: any[] } = { name: '', type: this.types[0], available: [] };
  public attributes: { name: string, type: string, available: any[] }[] = [];
  public slots = ['Backpack', 'Chest', 'Gloves', 'Holster', 'Kneepads', 'Mask'];

  public slot;
  public type;

  constructor(public service: GearService) {
  }

  ngOnInit() {
    this.getAttributes();
  }

  public save(): void {
    console.log(this.attribute);
    this.service.creatGearAttribbute(this.attribute)
      .subscribe(res => {
        this.resetAttribute();
      });
  }

  public getAttributes(): void {
    this.service.getAttributes()
      .subscribe(res => {
        this.attributes = res;
      });
  }

  public resetAttribute(): void {
    this.attribute = { name: '', type: this.types[0], available: [] };
  };

}
