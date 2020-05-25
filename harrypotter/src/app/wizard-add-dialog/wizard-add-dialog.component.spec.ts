import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardAddDialogComponent } from './wizard-add-dialog.component';

describe('WizardAddDialogComponent', () => {
  let component: WizardAddDialogComponent;
  let fixture: ComponentFixture<WizardAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
