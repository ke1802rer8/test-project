import { Component } from '@angular/core';
import { ReminderElement } from '../model/reminder.model';

const ELEMENT_DATA: ReminderElement[] = [
  {position: 1, name: 'Купить телевизор', symbol: "25.12.2000"},
  {position: 2, name: 'Прибраться по дому', symbol: "25.12.2003"},
  {position: 3, name: 'Автоматизация', symbol: "25.10.2006"},
  {position: 4, name: 'Пройти курс', symbol: "25.12.2000"},
];

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrl: './reminders.component.scss'
})
export class RemindersComponent {

  closeCreateNotes = true;
  openCreateNotes = false;
  nameNewCompletion: string;
  dateOfCompletion = new Date();

  displayedColumns: string[] = ['position', 'name', 'symbol'];
  dataSource = ELEMENT_DATA;

  addNewReminder(): void {
    let day = this.dateOfCompletion.getDate();
    let month = this.dateOfCompletion.getMonth();
    let year = this.dateOfCompletion.getFullYear();

    let date = day + "." + month + "." + year;

    this.dataSource.push({position: this.dataSource.length + 1, name: this.nameNewCompletion, symbol: date});
    this.closeCreateNotes = true;
    this.openCreateNotes = false;
  }

  getNote(task: string){
    this.nameNewCompletion = task;
  }

  open(): void {
    this.openCreateNotes = true;
    this.closeCreateNotes = false;
  }

  close(): void {
    this.closeCreateNotes = true;
    this.openCreateNotes = false;
  }
}
