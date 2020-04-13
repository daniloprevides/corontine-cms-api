import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonManagerComponent } from './addon-manager.component';

describe('AddonManagerComponent', () => {
  let component: AddonManagerComponent;
  let fixture: ComponentFixture<AddonManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddonManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
