import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesManagerComponent } from './pages-manager.component';

describe('PagesManagerComponent', () => {
  let component: PagesManagerComponent;
  let fixture: ComponentFixture<PagesManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
