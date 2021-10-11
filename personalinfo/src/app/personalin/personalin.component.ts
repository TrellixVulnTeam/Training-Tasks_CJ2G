import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalin',
  templateUrl: './personalin.component.html',
  styleUrls: ['./personalin.component.scss'],
})
export class PersonalinComponent implements OnInit {
  categoryName: string = 'Personal Info';
  constructor() {}

  ngOnInit(): void {}
  changeSelected(event: any): void {
    // console.log(event.target.innerText);
    this.categoryName = event.target.innerText;
    console.log(this.categoryName);
  }
  categories = [
    {
      name: 'Personal Info',
    },
    {
      name: 'Contact Info',
    },
    {
      name: 'Compulsory Subjects',
    },
    {
      name: 'Elective Subjects',
    },
    {
      name: 'Goal & Interst',
    },
  ];
}
