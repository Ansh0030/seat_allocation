import { Component, OnInit } from '@angular/core';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Table {
  id: number;
  rowNo: number;
  colNo: number;
  isBooked: boolean;
  bookedBy?: User;
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  users: User[] = [
    { id: "1", name: 'Alice', email: 'alice@company.com' },
    { id: "2", name: 'Bob', email: 'bob@company.com' },
    { id: "3", name: 'Charlie', email: 'charlie@company.com' }
  ];

  tableData: Table[] = [];
  tableGrid: Table[][] = [];

  ngOnInit() {
    this.generateTableData();
    this.chunkTableData();
  }

  generateTableData() {
    let idCounter = 1;
    this.tableData = []; // Reset before generating

    for (let row = 1; row <= 6; row++) {
      for (let col = 1; col <= 12; col++) {
        const isBooked = Math.random() < 0.4;
        this.tableData.push({
          id: idCounter++,
          rowNo: row,
          colNo: col,
          isBooked,
          bookedBy: isBooked
            ? this.users[Math.floor(Math.random() * this.users.length)]
            : undefined
        });
      }
    }
  }

  chunkTableData() {
    const chunkSize = 12;
    this.tableGrid = Array.from({ length: 6 }, (_, i) =>
      this.tableData.slice(i * chunkSize, i * chunkSize + chunkSize)
    );
  }


  onTableClicked(table: Table) {
    if (!table.isBooked) {
      table.isBooked = true;
      table.bookedBy = this.users[0];
    }
  }
}