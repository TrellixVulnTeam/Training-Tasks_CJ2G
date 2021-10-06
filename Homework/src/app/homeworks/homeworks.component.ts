import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeworks',
  templateUrl: './homeworks.component.html',
  styleUrls: ['./homeworks.component.scss'],
})
export class HomeworksComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  type: any[] = [
    {
      numbers: '4',
      name: 'Pending',
      url: '/pending',
      color: '#eaf0ff',
      textcolor: 'rgb(21, 73, 206)',
      bglig: 'linear-gradient(180deg, #1549ce 0%, #002992 100%)',
    },
    {
      numbers: '3',
      name: 'Overdue',
      url: '/overdue',
      color: 'rgba(255, 230, 230, 1)',
      textcolor: 'rgba(223, 21, 21, 1)',
      bglig: 'linear-gradient(180deg, #df1515 0%, #aa0000 100%)',
    },
  ];
}
