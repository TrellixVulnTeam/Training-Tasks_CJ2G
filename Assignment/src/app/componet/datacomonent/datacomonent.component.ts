import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-datacomonent',
  templateUrl: './datacomonent.component.html',
  styleUrls: ['./datacomonent.component.scss'],
})
export class DatacomonentComponent implements OnInit {
  @Input() category: string = '';
  @Input() assing: string = '';
  constructor() {}

  ngOnInit(): void {
    console.log(this.category);
    console.log(this.assing);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes.category.currentValue) {
  //     console.log(changes.category);
  //     this.category = changes.category.currentValue;
  //     console.log(this.category);
  //   }
  // }
  // renderTemplate(category: any) {
  //   console.log(category);
  //   const tempale = 'Pending';
  //   return tempale;
  // }

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
