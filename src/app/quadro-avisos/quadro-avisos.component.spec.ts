import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroAvisosComponent } from './quadro-avisos.component';

describe('QuadroAvisosComponent', () => {
  let component: QuadroAvisosComponent;
  let fixture: ComponentFixture<QuadroAvisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadroAvisosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadroAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
