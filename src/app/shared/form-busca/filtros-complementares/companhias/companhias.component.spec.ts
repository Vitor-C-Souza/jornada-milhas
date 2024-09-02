import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanhiasComponent } from './companhias.component';

describe('CompanhiasComponent', () => {
  let component: CompanhiasComponent;
  let fixture: ComponentFixture<CompanhiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanhiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanhiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
