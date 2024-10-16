import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSearchComponent } from './set-search.component';

describe('SetSearchComponent', () => {
  let component: SetSearchComponent;
  let fixture: ComponentFixture<SetSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
