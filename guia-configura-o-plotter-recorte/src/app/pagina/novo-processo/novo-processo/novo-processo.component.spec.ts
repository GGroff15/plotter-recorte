import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoProcessoComponent } from './novo-processo.component';

describe('NovoProcessoComponent', () => {
  let component: NovoProcessoComponent;
  let fixture: ComponentFixture<NovoProcessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovoProcessoComponent]
    });
    fixture = TestBed.createComponent(NovoProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});