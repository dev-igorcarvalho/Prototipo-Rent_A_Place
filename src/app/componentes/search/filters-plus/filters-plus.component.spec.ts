import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersPlusComponent } from './filters-plus.component';

describe('FiltersPlusComponent', () => {
  let component: FiltersPlusComponent;
  let fixture: ComponentFixture<FiltersPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
