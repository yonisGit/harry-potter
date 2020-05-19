import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellAutocompleteComponent } from './spell-autocomplete.component';

describe('SpellAutocompleteComponent', () => {
  let component: SpellAutocompleteComponent;
  let fixture: ComponentFixture<SpellAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
