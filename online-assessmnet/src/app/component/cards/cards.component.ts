import { Component, Input, OnInit } from '@angular/core';
// import { url } from 'inspector';
import { subjectinfo } from 'src/app/subjectmodel';
// import { subjectinfo } from 'src/app/subjectmodel';
// export interface Number{

// }

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() category: string = '';

  constructor() {}

  ngOnInit(): void {}
  number: subjectinfo[] = [
    {
      code: 'ITC - IA1',
      name: 'Science',
      time: '20min',
      subtitle: 'subjectsubtitle',
      button: 'PA',
      bgcolor: 'linear-gradient(143.62deg, #F4C30D 2.79%, #03596C 91.63%)',
      image: {
        name: 'Icon',
        url: '../../../assets/image/icon.svg',
      },
    },
    {
      code: 'PHYSICS-I -SA-1',
      name: 'Science',
      time: '20min',
      subtitle: 'subjectsubtitle',
      button: 'SA',
      bgcolor: 'linear-gradient(143.62deg, #F4C30D 2.79%, #03596C 91.63%)',
      image: {
        name: 'Icon',
        url: '../../../assets/image/icon.svg',
      },
    },
    {
      code: 'ITC - IA1',
      name: 'Science',
      time: '20min',
      subtitle: 'subjectsubtitle',
      button: 'PA',
      bgcolor: 'linear-gradient(143.62deg, #7BFFA0 2.79%, #03596C 91.63%)',
      image: {
        name: 'Icon',
        url: '../../../assets/image/icon.svg',
      },
    },
    {
      code: 'PHYSICAL-CHEMISTRY-I -SA-1',
      name: 'Science',
      time: '20min',
      subtitle: 'subjectsubtitle',
      button: 'SA',
      bgcolor: 'linear-gradient(143.62deg, #7BA8FF 2.79%, #03596C 91.63%)',

      image: {
        name: 'Icon',
        url: '../../../assets/image/icon.svg',
      },
    },
    {
      code: 'PHYSICAL-CHEMISTRY-I -PA-2',
      name: 'Science',
      time: '20min',
      subtitle: 'subjectsubtitle',
      button: 'PA',
      bgcolor: 'linear-gradient(143.62deg, #7BA8FF 2.79%, #03596C 91.63%)',
      image: {
        name: 'Icon',
        url: '../../../assets/image/icon.svg',
      },
    },
    {
      code: 'CBSE-Vll-MATH PA-1',
      name: 'Science',
      time: '20min',
      subtitle: 'subjectsubtitle',
      button: 'SA',
      bgcolor: 'linear-gradient(143.62deg, #7BFFA0 2.79%, #03596C 91.63%)',
      image: {
        name: 'Icon',
        url: '../../../assets/image/icon.svg',
      },
    },
  ];
}
