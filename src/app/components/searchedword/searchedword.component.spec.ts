import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedwordComponent } from './searchedword.component';

describe('SearchedwordComponent', () => {
  let component: SearchedwordComponent;
  let fixture: ComponentFixture<SearchedwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchedwordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchedwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
