import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/tab1/tab1.page';


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
    return letters[this.colNo - 1];
  }

}
