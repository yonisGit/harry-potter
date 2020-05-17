import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardDialogContentComponent } from './wizard-dialog-content.component';

describe('WizardDialogContentComponent', () => {
  let component: WizardDialogContentComponent;
  let fixture: ComponentFixture<WizardDialogContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardDialogContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
