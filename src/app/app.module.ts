import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { JsonPipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RemindersComponent } from './reminders/reminders.component';
import { TagsComponent } from './tags/tags.component';
import { EditNotesDialog } from './edit-notes/edit-notes.dialog';
import { FormFieldComponent } from './form-field/form-field.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    HeaderComponent,
    RemindersComponent,
    TagsComponent,
    EditNotesDialog,
    FormFieldComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatCommonModule,
    MatTableModule,
    AsyncPipe,
    MatMenuModule,
    MatButtonModule,
    AppRoutingModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    JsonPipe,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [
    provideClientHydration(),
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
