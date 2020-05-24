import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseTabsComponent } from './house-tabs.component';

describe('ExpansionComponent', () => {
  let component: HouseTabsComponent;
  let fixture: ComponentFixture<HouseTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
