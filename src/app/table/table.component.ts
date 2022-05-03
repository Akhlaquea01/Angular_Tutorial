import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  topCol = [{ id: 1, day: "Mon" }, { id: 2, day: "Tue" }, { id: 3, day: "Wed" }]
  leftCol = [{ id: 'a', date: "1" }, { id: 'b', date: "2" }, { id: 'c', date: "3" }]
  data=[{id:'1$a',val:21},{id:'1$b',val:22},{id:'1$c',val:23},{id:'2$a',val:24},{id:'2$b',val:25},{id:'2$c',val:26},{id:'3$a',val:27},{id:'3$b',val:28},{id:'3$c',val:29}]
  header = ['BLANK', ...this.topCol];

  rows: any[] = [];

  constructor() {
    this.constructTable();
  }

  public constructTable() {
    const rows: any[] = [];

    this.leftCol.forEach((el) => {
      const row = [];

      row.push(el);

      this.topCol.forEach((ele, i) => {
        const key = ele.id + '$' + el.id;
        this.data.forEach(data => {
          if (data.id == key) {
            row.push(data);
          }
        })
      });

      rows.push(row);
    });

    this.rows = rows;
  }
ngOnInit(): void {
    
}
}
