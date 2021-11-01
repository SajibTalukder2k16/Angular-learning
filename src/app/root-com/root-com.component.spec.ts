import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootComComponent } from './root-com.component';

describe('RootComComponent', () => {
  let component: RootComComponent;
  let fixture: ComponentFixture<RootComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
