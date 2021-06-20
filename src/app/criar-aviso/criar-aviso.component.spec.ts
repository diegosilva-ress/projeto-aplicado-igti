import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAvisoComponent } from './criar-aviso.component';

describe('CriarAvisoComponent', () => {
  let component: CriarAvisoComponent;
  let fixture: ComponentFixture<CriarAvisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarAvisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
