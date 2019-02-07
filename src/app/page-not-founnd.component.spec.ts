import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFounndComponent } from './page-not-founnd.component';

describe('PageNotFounndComponent', () => {
  let component: PageNotFounndComponent;
  let fixture: ComponentFixture<PageNotFounndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFounndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFounndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
