import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { first } from 'rxjs';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let searchTermDe: DebugElement;
  let searchTermEl: HTMLElement;
  let buttonTermDe: DebugElement;



  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchBarComponent]
    });
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    buttonTermDe = fixture.debugElement.query(By.css('.search-bar__button'));
    searchTermDe = fixture.debugElement.query(By.css('.search-bar__input'));
    searchTermEl = searchTermDe.nativeElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onInputChange should udpate the search term on change', () => {
    let expectedResult = "this is a movie";
    searchTermDe.nativeElement.value = "this is a movie";
    searchTermDe.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    component.searchEntered
    .pipe(first())
    .subscribe((val) => {
      expect(val).toEqual(expectedResult);
    });

    expect(searchTermDe.nativeElement.value).toEqual(expectedResult);
    expect(component.searchTerm).toEqual(expectedResult);
  });

  it('#onSearch should output the value searched', () => {
    let expectedResult = "test";
    component.searchTerm = expectedResult;

    component.searchEntered
    .pipe(first())
    .subscribe((val) => {
      expect(val).toEqual(expectedResult);
    });
    component.onSearchPressed();
  });

  it('#onSearch should trigger on keydown enter', () => {
    let expectedResult = "this is a movie";
    component.searchTerm = expectedResult;
   
    component.searchEntered
    .pipe(first())
    .subscribe((val) => {
      expect(val).toEqual(expectedResult);
    });

    searchTermDe.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: "enter"}));
    fixture.detectChanges();


  });

  it('#onSearch should trigger on enter on search clicked', () => {
    let expectedResult = "this is a movie";
    component.searchTerm = expectedResult;
   
    component.searchEntered
    .pipe(first())
    .subscribe((val) => {
      expect(val).toEqual(expectedResult);
    });

    buttonTermDe.triggerEventHandler('click');
    fixture.detectChanges();


  });
});
