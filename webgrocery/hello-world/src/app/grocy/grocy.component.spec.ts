import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocyComponent } from './grocy.component';

describe('GrocyComponent', () => {
  let component: GrocyComponent;
  let fixture: ComponentFixture<GrocyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrocyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrocyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
