import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelCellRendererComponent } from './label-cell-renderer.component';

describe('LabelCellRendererComponent', () => {
  let component: LabelCellRendererComponent;
  let fixture: ComponentFixture<LabelCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
