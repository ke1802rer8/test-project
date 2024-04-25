import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { RemindersComponent } from './reminders/reminders.component';
import { TagsComponent } from './tags/tags.component';

const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  { path: 'notes', component: NotesComponent },
  { path: 'reminders', component: RemindersComponent },
  { path: 'tags', component: TagsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
