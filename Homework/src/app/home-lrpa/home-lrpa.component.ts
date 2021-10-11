import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-lrpa',
  templateUrl: './home-lrpa.component.html',
  styleUrls: ['./home-lrpa.component.css'],
})
export class HomeLrpaComponent implements OnInit {
  learn: any = [
    {
      key: 'l1',
      img: '../../assets/img/bio-food.png',
      title: 'Components Of Food',
      subtitle: 'Interactive Video',
      no_lect: '50',
    },
    {
      key: 'l1',
      img: '../../assets/img/bio-food1.png',
      title: 'Components Of Pulses',
      subtitle: 'Interactive Video',
      no_lect: '20',
    },
    {
      key: 'l1',
      img: '../../assets/img/bio-food2.png',
      title: 'Sources of Protien',
      subtitle: 'Interactive Video',
      no_lect: '30',
    },
    {
      key: 'l1',
      img: '../../assets/img/bio-food.png',
      title: 'Components Of Food',
      subtitle: 'Interactive Video',
      no_lect: '50',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
