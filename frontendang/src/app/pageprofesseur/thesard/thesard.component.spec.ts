import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesardComponent } from './thesard.component';

describe('ThesardComponent', () => {
  let component: ThesardComponent;
  let fixture: ComponentFixture<ThesardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThesardComponent]
    });
    fixture = TestBed.createComponent(ThesardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
