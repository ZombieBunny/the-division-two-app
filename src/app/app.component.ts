import { Component, OnInit } from '@angular/core';
import { GearService } from '../services/gear.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public sets: any[];
  public slots = ['Backpack', 'Chest', 'Gloves', 'Holster', 'Kneepads', 'Mask'];
  public types = ['Offensive', 'Defensive', 'Utility'];


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

  ngOnInit(): void {
    this.getSets();
  }

  public getSets(): void {
    this.service.getSets()
      .subscribe(res => {
        this.sets = res;
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
      mod_slots: this.constructMods()
    };

    console.log(gear);
    this.service.creatGear(gear)
      .subscribe(res => {
        console.log(res);
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
}
