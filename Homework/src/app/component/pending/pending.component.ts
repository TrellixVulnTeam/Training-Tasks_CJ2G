import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss'],
})
export class PendingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  number: any = [
    {
      name: 'Science',
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
      button: 'Project',
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
