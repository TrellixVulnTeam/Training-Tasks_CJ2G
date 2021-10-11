import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overdue',
  templateUrl: './overdue.component.html',
  styleUrls: ['./overdue.component.scss'],
})
export class OverdueComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  number: any = [
    {
      name: 'Maths',
      subtitle: 'subjectsubtitle',
      button: 'Preread',
      image: '../../../assets/image/Chem.svg',
    },
    {
      name: 'Science',
      subtitle: 'subjectsubtitle',
      button: 'Quiz',
      image: '../../../assets/image/Chem.svg',
    },
    {
      name: 'Science',
      subtitle: 'subjectsubtitle',
      button: 'Porject',
      image: '../../../assets/image/Chem.svg',
    },
    {
      name: 'Science',
      subtitle: 'subjectsubtitle',
      button: 'Worksheet',
      image: '../../../assets/image/Chem.svg',
    },
  ];
}
