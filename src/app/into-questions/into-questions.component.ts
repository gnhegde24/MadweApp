import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';



@Component({
  selector: 'app-into-questions',
  templateUrl: './into-questions.component.html',
  styleUrls: ['./into-questions.component.css']
})
export class IntoQuestionsComponent {
  @ViewChild('userInput') userInputQuestion;
  visible = true;
  selectable = true;
  removable = true;
  readonly separatorKeysCodes = [ENTER] as const;
  questionsCtrl = new FormControl();
  filteredquestionss: Observable<string[]>;
  questionss: string[] = [
    'What are your goals in the relationship?',
    'Given the choice of anyone in the world, whom would you want as a dinner guest?',
    'Your happiest memory?', 'How do you want to be remembered?',
    'Biggest lesson you’ve learned from previous relationships?',
    'How many past partners have you had?', 'Your role model in life?',
    'What goals do you have for us?',
    'What are your goals in the relationship?',
    'Given the choice of anyone in the world, whom would you want as a dinner guest?',
    'Your happiest memory?', 'How do you want to be remembered?',
    'Biggest lesson you’ve learned from previous relationships?',
    'What goals do you have for us?',
    'What are your goals in the relationship?',
    'Given the choice of anyone in the world, whom would you want as a dinner guest?',
    'Your happiest memory?', 'How do you want to be remembered?',
    'Biggest lesson you’ve learned from previous relationships?'
  ];
  userInputQuestions: string[] =[];
  userInputQ: string;
  suggestions: string[] = ['What are your thoughts on having a family?',
    'Do you have any habits you want to change?'];

  @ViewChild('questionsInput') questionsInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private router: Router) {
    this.filteredquestionss = this.questionsCtrl.valueChanges.pipe(
      startWith(null),
      map((questions: string | null) => questions ? this._filter(questions) : this.suggestions.slice()));
  }

  add(event: MatChipInputEvent): void {
    console.log(event);
    const input = event.input;
    const value = event.value;

    // Add our questions
    if ((value || '').trim()) {
      this.userInputQuestions.push(value.trim());
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


  addToQuestions(userSelectedQuestion) {
    this.userInputQuestions.unshift(userSelectedQuestion);
    const index: number = this.questionss.indexOf(userSelectedQuestion);
    this.questionss.splice(index, 1);
  }

  
  back() {
    this.router.navigate(['introi']);
  }

  submit() {
    this.router.navigate(['matches']);
  }

  addUserQuestion(userInput: string){
    console.log("user innput is : "+userInput)
    this.userInputQuestions.unshift(userInput.trim());
    this.userInputQuestion.nativeElement.value='';
  }
}
