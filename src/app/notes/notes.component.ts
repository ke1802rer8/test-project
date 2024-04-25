import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditNotesDialog } from '../edit-notes/edit-notes.dialog';
import { Notes } from '../model/notes.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {

  createNotes = false;
  name: string;
  description: string;
  closeCreateNotes = true;
  cardList: Notes[] = [{id: 0, name: "Цели на жизнь", description: "Определение человеком жизненных целей является одним из главных условий достижения успеха. Причем важно не только ставить цели, но и часто думать о том что вы способны их достигнуть и что вы достигнете их. Не стоит думать о препятствиях на пути к цели и воображать зловещий мрак. Сконцентрируйтесь на том, что достижение каждой поставленной цели может кардинально улучшить вашу жизнь. Чем больше вы будете думать о том, как ваши цели изменят жизнь к лучшему, тем сильнее будет желание их реализовать. В вас проснется естественное желание конкретных действий."}];

  constructor(public dialog: MatDialog) {}

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(EditNotesDialog, {
      data: {id: id, name: this.cardList[id].name, description: this.cardList[id].description},
    });

    dialogRef.afterClosed().subscribe((result: Notes) => {
      this.cardList[id].name = result.name;
      this.cardList[id].description = result.description;
    })
  }

  open(): void {
    this.createNotes = true;
    this.closeCreateNotes = false;
  }

  addNotes(): void {
   this.cardList.push({id: this.cardList.length, name: this.name, description: this.description});
   this.closeCreateNotes = true;
   this.createNotes = false;
   this.name, this.description = '';
  }

  close(): void {
    this.closeCreateNotes = true;
    this.createNotes = false;
    this.name, this.description = '';
  }

  deleteNotes(id: number): void {
    this.cardList.length != 1 ? this.cardList.splice(id, 1): this.cardList = [];
  }
}
