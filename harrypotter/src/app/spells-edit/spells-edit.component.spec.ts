import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsEditComponent } from './spells-edit.component';

describe('SpellsEditComponent', () => {
  let component: SpellsEditComponent;
  let fixture: ComponentFixture<SpellsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
