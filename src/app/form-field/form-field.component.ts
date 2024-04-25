import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from "@reactivex/rxjs";
import { map, startWith } from 'rxjs/operators';
import { NameTask } from '../model/notes.model';


@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent implements OnInit {

  @Output() nameCompletion = new
  EventEmitter<string>();
  nameNewCompletion: {name: string};
  myControl = new FormControl<string | NameTask>('');
  options: NameTask[] = [{name: 'Цели на жизнь'}, {name: 'Покупки'}, {name: 'Одежда'}];
  filteredOptions: Observable<NameTask[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
       map((value: any) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  sendNote(name: NameTask){
    if (name) {
      this.nameCompletion.emit(name.name);
    }
  }

  displayFn(user: NameTask): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): NameTask[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}

