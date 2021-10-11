import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit, OnChanges {
  @Input() category: string = '';
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.category.currentValue) {
      console.log(changes.category);
      this.category = changes.category.currentValue;
    }
  }
  renderTemplate(category: any) {
    console.log(category);
    const tempale = 'personal';
    return tempale;
  }
  Numberofsubjects = [
    { name: 'Biology', value: false },
    { name: 'Hindi', value: false },
    { name: 'ICT', value: true },
    { name: 'History', value: false },
    { name: 'Chemistry', value: false },
    { name: 'Civics', value: false },
    { name: 'Geography', value: false },
    { name: 'Math', value: false },
    { name: 'Physics', value: false },
  ];
}
