import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderprofesseurComponent } from './headerprofesseur.component';

describe('HeaderprofesseurComponent', () => {
  let component: HeaderprofesseurComponent;
  let fixture: ComponentFixture<HeaderprofesseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderprofesseurComponent]
    });
    fixture = TestBed.createComponent(HeaderprofesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
