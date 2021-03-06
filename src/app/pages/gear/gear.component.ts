import { Component, OnInit } from '@angular/core';
import { GearService } from '../../../services/gear.service';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.css']
})
export class GearComponent implements OnInit {

  public sets: any[];
  public slots = ['Backpack', 'Chest', 'Gloves', 'Holster', 'Kneepads', 'Mask'];
  public types = ['Offensive', 'Defensive', 'Utility'];

  public showCreate = false;
  public attributes = [];

  public slot;

  public gear: any[] = [];
  public talents: any[] = [];

  public selectedGear: {
    name: string,
    brand: string,
    slot: string,
    attributes: any[],
    talents: any[],
    modSlots: any[],
    setBonus: any[],
    template: any,
    armour: number
  } = {
    name: '',
    brand: '',
    slot: '',
    attributes: [],
    talents: [],
    modSlots: [],
    setBonus: [],
    template: {},
    armour: 28000
  };

  public selected: any[] = [];
  public selectedGearSets: string[] = [];


  public name: string;
  public brandSetName: string;
  public slotName: string;
  public at1: any[];
  public at2: any[];
  public at3: any[];
  public at4: any[];

  public t1c: any[];
  public t1a: any[];
  public t2c: any[];
  public t2a: any[];

  public mss: any[];
  public msp: any[];


  constructor(public service: GearService) {
  }

  ngOnInit() {
    this.getSets();
    this.getAllGear();
    this.getAttributes();
    this.getTalents();
  }

  public getSets(): void {
    this.service.getSets()
      .subscribe(res => {
        this.sets = res;
      });
  }

  public getAllGear(): void {
    this.service.getGearSets()
      .subscribe(res => {
        this.gear = res;
      });
  }

  public getAttributes(): void {
    this.service.getAttributes()
      .subscribe(res => {
        this.attributes = res;
      });
  }

  public save(): void {
    // construct object

    const gear = {
      name: this.name,
      brand_set_name: this.brandSetName,
      slot_name: this.slotName,
      attributes: this.constructAttributes(),
      talents: this.constructTalents(),
      mod_slots: this.constructMods(),
    };

    this.service.creatGear(gear)
      .subscribe(res => {
        console.log(res);
        this.gear.push({ ...res });
      });
  }

  public constructAttributes(): any {
    const arr = {};
    const keys = ['1', '2', '3', '4'];
    [this.at1, this.at2, this.at3, this.at4].filter((v, index) => {
      if (v.length) {
        arr[keys[index]] = v;
      }
    });
    return arr;
  }

  public constructTalents(): any {
    const seq = 'sequence';
    const arr = {};
    const arrr = {};
    const list = [];
    const keys = ['common', 'active'];
    [this.t1c, this.t1a].filter((v, index) => {
      if (v && v.length) {
        arr[seq] = 1;
        arr[keys[index]] = v;
      }
    });
    list.push(arr);
    [this.t2c, this.t2a].filter((v, index) => {
      if (v && v.length) {
        arrr[seq] = 2;
        arrr[keys[index]] = v;
      }
    });
    list.push(arrr);
    return list.filter(v => {
      if (seq in v) {
        return v;
      }
    });
  }


  public constructMods(): any {
    const arr = {};
    const keys = ['system', 'protocol'];
    [this.mss, this.msp].filter((v, index) => {
      if (v && v.length) {
        arr[keys[index]] = v;
      }
    });
    return arr;
  }


  public selectGear(gear): void {
    console.log(gear);
    this.selectedGear.template = gear;
    this.selectedGear.name = gear.name;
    this.selectedGear.brand = gear.brand;
    this.selectedGear.slot = gear.slot;
    this.selectedGear.setBonus = gear.setBonus;
    this.selectedGear.talents = [];
  }

  public done(): void {
    console.log(this.selectedGear);
    this.selected.push({ ...this.selectedGear });
    this.selectedGearSets.push(this.selectedGear.brand);
    this.selectedGear = {
      name: '',
      brand: '',
      slot: '',
      attributes: [],
      talents: [],
      modSlots: [],
      setBonus: [],
      template: {},
      armour: 28000
    };
  }

  public getGearSetBonusCount(gearSet): number {
    return this.selectedGearSets.filter(s => s === gearSet).length;
  }

  public getTalents(): void {
    this.service.getGearTalents()
      .subscribe(res => {
        this.talents = res;
      });
  }
}
