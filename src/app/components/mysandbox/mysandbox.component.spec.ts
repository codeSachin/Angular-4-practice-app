import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysandboxComponent } from './mysandbox.component';

describe('MysandboxComponent', () => {
  let component: MysandboxComponent;
  let fixture: ComponentFixture<MysandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
