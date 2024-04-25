import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Notes } from '../model/notes.model';

@Component({
  selector: 'dialog-edit-notes',
  templateUrl: './edit-notes.dialog.html',
  styleUrl: './edit-notes.dialog.scss'
})
export class EditNotesDialog {
  constructor(
    public dialogRef: MatDialogRef<EditNotesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Notes,
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
