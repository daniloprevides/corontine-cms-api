import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectCellRendererComponent } from './object-cell-renderer.component';

describe('ObjectCellRendererComponent', () => {
  let component: ObjectCellRendererComponent;
  let fixture: ComponentFixture<ObjectCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
