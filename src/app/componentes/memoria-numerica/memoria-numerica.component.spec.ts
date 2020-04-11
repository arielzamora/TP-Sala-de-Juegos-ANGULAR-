import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriaComponent } from './memoria-numerica.component';

describe('AnagramaCMemoriaComponentomponent', () => {
  let component: MemoriaComponent;
  let fixture: ComponentFixture<MemoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
