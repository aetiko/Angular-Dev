import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AneNuclearFamilyComponent } from './ane-nuclear-family.component';

describe('AneNuclearFamilyComponent', () => {
  let component: AneNuclearFamilyComponent;
  let fixture: ComponentFixture<AneNuclearFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AneNuclearFamilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AneNuclearFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
