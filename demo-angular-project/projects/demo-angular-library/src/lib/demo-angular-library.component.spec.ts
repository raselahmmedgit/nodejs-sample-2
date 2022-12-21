import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAngularLibraryComponent } from './demo-angular-library.component';

describe('DemoAngularLibraryComponent', () => {
  let component: DemoAngularLibraryComponent;
  let fixture: ComponentFixture<DemoAngularLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoAngularLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAngularLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
