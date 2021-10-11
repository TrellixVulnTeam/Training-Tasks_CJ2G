import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalinComponent } from './personalin.component';

describe('PersonalinComponent', () => {
  let component: PersonalinComponent;
  let fixture: ComponentFixture<PersonalinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
