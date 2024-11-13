import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeadmComponent } from './homeadm.component';

describe('HomeadmComponent', () => {
  let component: HomeadmComponent;
  let fixture: ComponentFixture<HomeadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeadmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
