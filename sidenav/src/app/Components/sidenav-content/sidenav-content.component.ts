import { Component, OnInit } from '@angular/core';
export interface Section {
  name: string;
  updated: Date;
  url: string;
  img: string;
}
@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
})
export class SidenavContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  folders: Section[] = [
    {
      name: 'Home',
      updated: new Date('1/1/16'),
      url: '/home',
      img: '../../assets/image/Group 3.png',
    },
    {
      name: 'Academy',
      updated: new Date('1/17/16'),
      url: '/academy',
      img: '',
    },
    {
      name: 'Profile',
      updated: new Date('1/28/16'),
      url: '/profile',
      img: '../../assets/image/Group 2.png',
    },
  ];
  account: Section[] = [
    {
      name: 'Setting',
      updated: new Date('2/20/16'),
      url: '/setting',
      img: '../../assets/image/Group 1.png',
    },
  ];
}
