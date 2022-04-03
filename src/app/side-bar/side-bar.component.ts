import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../common-data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  listofSideBarItems = [] as any;
  constructor(private _commonData: CommonDataService) {}

  ngOnInit(): void {
    this._commonData.getSideBarData().subscribe((res) => {
      this.listofSideBarItems = res.listofSideBarItems;
      console.log(this.listofSideBarItems);
    });
  }
}
