import { Component } from '@angular/core';
import { NameTask, TagsTask } from '../model/notes.model';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent {
  closeCreateTags= true;
  openCreateTags = false;
  nameNewCompletion: string;

  cardList: TagsTask[] = [];
  tags: NameTask[] = [];

  checkbox: Task[] = [
    { name: '#Домохозяйство', completed: false},
    { name: '#Работа', completed: false },
    { name: '#Хобби', completed: false }
  ];

  open(): void {
    this.openCreateTags = true;
    this.closeCreateTags = false;
  }

  getNote(task: string){
    this.nameNewCompletion = task;
  }

  close(): void {
    this.closeCreateTags = true;
    this.openCreateTags = false;
  }

  allComplete: boolean = false;

  addTags() {
    this.tags = this.checkbox.filter(item => item.completed);
    console.warn("tags", this.tags);
    this.cardList.push({id: this.cardList.length, name: this.nameNewCompletion, tag: this.tags});
    console.warn("tags", this.cardList);
    this.openCreateTags = true;
    this.closeCreateTags = false;

  }
  updateAllComplete() {
    this.allComplete = this.checkbox != null && this.checkbox.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.checkbox == null) {
      return false;
    }
    return this.checkbox.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.checkbox == null) {
      return;
    }
    this.checkbox.forEach(t => (t.completed = completed));
  }

  deleteTags(id: number): void {
    this.cardList.length != 1 ? this.cardList.splice(id, 1): this.cardList = [];
  }
}
