import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoCoperadoComponent } from './novo-coperado.component';

describe('NovoCoperadoComponent', () => {
  let component: NovoCoperadoComponent;
  let fixture: ComponentFixture<NovoCoperadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoCoperadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoCoperadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
