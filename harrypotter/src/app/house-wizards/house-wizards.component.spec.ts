import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseWizardsComponent } from './house-wizards.component';

describe('HouseWizardsComponent', () => {
  let component: HouseWizardsComponent;
  let fixture: ComponentFixture<HouseWizardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseWizardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseWizardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
