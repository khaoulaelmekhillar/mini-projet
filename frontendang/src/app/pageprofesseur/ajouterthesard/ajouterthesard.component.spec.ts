import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterthesardComponent } from './ajouterthesard.component';

describe('AjouterthesardComponent', () => {
  let component: AjouterthesardComponent;
  let fixture: ComponentFixture<AjouterthesardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterthesardComponent]
    });
    fixture = TestBed.createComponent(AjouterthesardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
