import { Component, OnInit } from '@angular/core';
import { GearService } from '../../../../services/gear.service';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.css']
})
export class TalentsComponent implements OnInit {

  public slots = ['Backpack', 'Chest', 'Gloves', 'Holster', 'Kneepads', 'Mask'];
  public types = ['Offensive', 'Defensive', 'Utility'];
  public typeSlots = ['Common', 'Active'];

  public talent: {
    name: string,
    description: string,
    type: string,
    type_slot: string,
    stat_name: string,
    value: number,
    available: string[],
    requirements: string,
  } = {
    name: '',
    description: '',
    type: this.types[0],
    type_slot: this.typeSlots[0],
    stat_name: '',
    value: 0,
    available: [],
    requirements: '',
  };

  public talents: any[] = [];

  public filter: { type: string[], typeSlot: string, slot: string } = {
    type: [],
    typeSlot: this.typeSlots[0],
    slot: this.slots[0]
  };

  public create = false;

  constructor(private service: GearService) {
  }

  ngOnInit() {
    this.getTalents();
  }

  public reset(): void {
    this.talent = {
      ...this.talent,
      name: '',
      description: '',
      stat_name: '',
      value: 0,
      available: [],
      requirements: '',
    };
  }


  public save(): void {
    this.service.creatGearTalent(this.talent)
      .subscribe(res => {
        console.log(res);
        this.reset();
      });
  }

  public getTalents(): void {
    this.service.getGearTalents()
      .subscribe(res => {
        console.log(res);
        this.talents = res;
      });
  }

}
