import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssingmentTabComponent } from './assingment-tab.component';

describe('AssingmentTabComponent', () => {
  let component: AssingmentTabComponent;
  let fixture: ComponentFixture<AssingmentTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssingmentTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssingmentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
