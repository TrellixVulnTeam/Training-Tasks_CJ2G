import { Component, OnInit } from '@angular/core';
import { CommanserviceService } from 'src/app/Service/commanservice.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(private commonService: CommanserviceService) {}
  toggleActive: boolean = false;

  ngOnInit(): void {}
  sidenavcall() {
    this.commonService.sidnav.next('toggle');
  }
}
