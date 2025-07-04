import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface User {
  id: number;
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
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() rowNo!: number;
  @Input() colNo!: number;
  @Input() isBooked: boolean = false;
  @Input() bookedBy?: User;

  @Output() tableClicked = new EventEmitter<void>();

  onClick() {
    if (!this.isBooked) {
      this.tableClicked.emit();
    }
  }
  get seatLabel(): string {
    const letters = 'ABCDEFGHIJKL';
    return letters[this.colNo - 1]; // colNo is 1-based
  }

}
