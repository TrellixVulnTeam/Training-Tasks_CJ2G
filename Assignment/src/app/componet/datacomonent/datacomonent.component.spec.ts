import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacomonentComponent } from './datacomonent.component';

describe('DatacomonentComponent', () => {
  let component: DatacomonentComponent;
  let fixture: ComponentFixture<DatacomonentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatacomonentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacomonentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
