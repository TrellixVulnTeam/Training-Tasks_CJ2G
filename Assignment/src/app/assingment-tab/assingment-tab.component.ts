import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-assingment-tab',
  templateUrl: './assingment-tab.component.html',
  styleUrls: ['./assingment-tab.component.scss'],
})
export class AssingmentTabComponent implements OnInit {
  categoryName: string = 'Pending';
  assing: string = 'Homework';

  constructor() {}

  ngOnInit(): void {}

  changeSelected(event: any): void {
    // console.log(event.target.innerText);
    this.categoryName = event.target.innerText;
    // this.assing = event.target.innerText;
    console.log(this.categoryName);
  }

  assingments = [{ name: 'Homework' }, { name: 'Classwork' }];
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
    this.assing = event.tab.textLabel;
  }
}
