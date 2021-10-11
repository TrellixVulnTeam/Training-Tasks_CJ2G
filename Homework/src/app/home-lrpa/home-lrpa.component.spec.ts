import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLrpaComponent } from './home-lrpa.component';

describe('HomeLrpaComponent', () => {
  let component: HomeLrpaComponent;
  let fixture: ComponentFixture<HomeLrpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLrpaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLrpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
