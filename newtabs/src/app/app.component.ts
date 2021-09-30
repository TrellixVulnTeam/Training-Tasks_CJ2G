import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'NewTabs';
  tabs: any;
  myStyles = {
    'background-color': 'lime',
    'font-size': '20px',
    'font-weight': 'bold',
  };
}
