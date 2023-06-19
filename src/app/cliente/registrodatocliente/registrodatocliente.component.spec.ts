import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrodatoclienteComponent } from './registrodatocliente.component';

describe('RegistrodatoclienteComponent', () => {
  let component: RegistrodatoclienteComponent;
  let fixture: ComponentFixture<RegistrodatoclienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrodatoclienteComponent]
    });
    fixture = TestBed.createComponent(RegistrodatoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
