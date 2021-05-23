import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';


@Component({
  selector: 'app-into-questions',
  templateUrl: './into-questions.component.html',
  styleUrls: ['./into-questions.component.css']
})
export class IntoQuestionsComponent {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  questionsCtrl = new FormControl();
  filteredquestionss: Observable<string[]>;
  questionss: string[] =  [
    'What are your goals in the relationship?',
    'What is your happiest memory?',
    'Given the choice of anyone in the world, whom would you want as a dinner guest?',
    'How do you want to be remembered?',
    'Do you have any habits you want to change?',
    'What are your thoughts on having a family?',
    'What is the biggest lesson you’ve learned from previous relationships?',
   ];
  suggestions: string[] = ['suggestion from db1', 'suggestion from db2'];

  @ViewChild('questionsInput') questionsInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private router: Router) {
    this.filteredquestionss = this.questionsCtrl.valueChanges.pipe(
        startWith(null),
        map((questions: string | null) => questions ? this._filter(questions) : this.suggestions.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our questions
    if ((value || '').trim()) {
      this.questionss.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.questionsCtrl.setValue(null);
  }

  remove(questions: string): void {
    const index = this.questionss.indexOf(questions);

    if (index >= 0) {
      this.questionss.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.questionss.push(event.option.viewValue);
    this.questionsInput.nativeElement.value = '';
    this.questionsCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.suggestions.filter(questions => questions.toLowerCase().indexOf(filterValue) === 0);
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.questionss, event.previousIndex, event.currentIndex);
  }

  back(){
    this.router.navigate(['introi']);
  }
}
