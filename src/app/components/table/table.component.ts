import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
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

  constructor(
    private alertController: AlertController,
    private router: Router
  ) { }

  get seatLabel(): string {
    const letters = 'ABCDEFGHIJKL';
    return letters[this.colNo - 1];
  }

  async onClick() {
    if (!this.isBooked) {
      const alert = await this.alertController.create({
        header: 'Do you want to Allcoate this Table?',
        message: `Row:${this.rowNo}, Seat:${this.seatLabel} (${this.colNo})`,
        mode: 'ios',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'OK',
            handler: () => {
              this.router.navigate(['/tab2'], {
                queryParams: { row: this.rowNo, col: this.colNo }
              });
            }
          }
        ]
      });

      await alert.present();
    }
  }
}
