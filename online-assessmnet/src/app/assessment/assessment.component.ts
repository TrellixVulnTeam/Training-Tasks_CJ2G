import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss'],
})
export class AssessmentComponent implements OnInit {
  // category: string = 'pending';
  categoryName: string = 'Pending';
  constructor() {}

  ngOnInit(): void {}
  categories = [
    {
      name: 'Pending',
    },
    {
      name: 'Overdue',
    },
    {
      name: 'Submitted',
    },
  ];
  onTabChange(event: MatTabChangeEvent) {
    console.log(event.tab.textLabel);
    // this.category = event.tab.textLabel;
  }
  changeSelected(event: any): void {
    // console.log(event.target.innerText);
    this.categoryName = event.target.innerText;
    // this.assing = event.target.innerText;
    console.log(this.categoryName);
  }
}
