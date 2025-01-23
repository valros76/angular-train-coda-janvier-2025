import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPipeComponent } from './number-pipe.component';

describe('NumberPipeComponent', () => {
  let component: NumberPipeComponent;
  let fixture: ComponentFixture<NumberPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberPipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
