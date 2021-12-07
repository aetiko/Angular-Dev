import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AneProficiencyListComponent } from './ane-proficiency-list.component';

describe('AneProficiencyListComponent', () => {
  let component: AneProficiencyListComponent;
  let fixture: ComponentFixture<AneProficiencyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AneProficiencyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AneProficiencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
