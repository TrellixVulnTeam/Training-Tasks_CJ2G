import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabsComponent implements OnInit {
  @Input() parentStyle: any;
  @Input() tabs: any;

  constructor() {}

  ngOnInit(): void {}
  selected = new FormControl(0);
}
