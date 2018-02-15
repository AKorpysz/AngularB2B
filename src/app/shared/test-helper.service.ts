import { ComponentFixture } from '@angular/core/testing';

export class TestHelperService {
  constructor() {}

   getElement<T>(fixture: ComponentFixture<T>, name: string) {
    const compiled = fixture.debugElement.nativeElement;
    const uiElement = compiled.querySelector(name);
    return uiElement;
  }

  checkAttributeValue<T>(fixture: ComponentFixture<T>, elementName: string, attributeName: string, testedValue: string) {
    fixture.detectChanges();
    const uiElement = this.getElement(fixture, elementName);
    expect(uiElement.getAttribute(attributeName)).toEqual(testedValue);
  }

  checkAttributeExist<T>(fixture: ComponentFixture<T>, elementName: string, attributeName: string) {
    fixture.detectChanges();
    const uiElement = this.getElement(fixture, elementName);
    expect(uiElement.hasAttribute(attributeName)).toEqual(true);
  }

  checkElementTextValue<T>(fixture: ComponentFixture<T>, elementName: string, testedValue: string) {
    fixture.detectChanges();
    const uiElement = this.getElement(fixture, elementName);
    expect(uiElement.textContent).toContain(testedValue);
  }

  checkElementExist<T>(fixture: ComponentFixture<T>, elementName: string) {
    const uiElement = this.getElement(fixture, elementName);
    expect(uiElement).toBeDefined();
    expect(uiElement === '' || uiElement === null).toEqual(false);
  }
}
