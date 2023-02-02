import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Exact equality --> tobe
  it('two plus two is four', () => {
    expect(2+2).toBe(4);
  });

  //test objects --> toEqual
  it('Object Values', () => {
    const data = {name: "Angular"};
    expect(data).toEqual({name: "Angular"});
  });

  //truthiness
  it('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  //matchers for numbers
  it('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    //to be and toEqual are equalnt to numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  //floating point numbers
  it('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
  });

  //strings
  it('There is no D in Angular', () => {
    expect('Angular').not.toMatch(/D/);
  });

  //Arrays and iterables
  it('Check shopping list', () => {
    const shoppingList = [
      'vegetable',
      'milk',
      'fruit',
    ];
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });

});
