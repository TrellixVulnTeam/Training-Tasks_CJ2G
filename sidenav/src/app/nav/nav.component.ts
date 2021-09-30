import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { CommanserviceService } from 'src/app/Service/commanservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @ViewChild('drawer', { static: false }) drawer: MatDrawer | undefined;
  constructor(private commonService: CommanserviceService) {}

  ngOnInit(): void {
    this.commonService.sidnav.subscribe((toggle) => {
      this.drawer?.toggle();
    });
  }
  showFiller = false;
}
