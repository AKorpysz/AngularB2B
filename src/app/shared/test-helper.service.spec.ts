import { ComponentFixture } from '@angular/core/testing';

export class TestHelperService<T> {
  fixture: ComponentFixture<T>;
  constructor(fix: ComponentFixture<T>) {
    this.fixture = fix;
  }

   getElement(name: string) {
    const compiled = this.fixture.debugElement.nativeElement;
    const uiElement = compiled.querySelector(name);
    return uiElement;
  }

  checkAttributeValue(elementName: string, attributeName: string, testedValue: string) {
    this.fixture.detectChanges();
    const uiElement = this.getElement(elementName);
    expect(uiElement.getAttribute(attributeName)).toEqual(testedValue);
  }

  checkAttributeExist(elementName: string, attributeName: string) {
    this.fixture.detectChanges();
    const uiElement = this.getElement(elementName);
    expect(uiElement.hasAttribute(attributeName)).toEqual(true);
  }

  checkElementTextValue(elementName: string, testedValue: string) {
    this.fixture.detectChanges();
    const uiElement = this.getElement(elementName);
    expect(uiElement.textContent).toContain(testedValue);
  }

  checkElementExist(elementName: string) {
    const uiElement = this.getElement(elementName);
    expect(uiElement).toBeDefined();
    expect(uiElement === '' || uiElement === null).toEqual(false);
  }

  checkElementNotExist(elementName: string) {
    const uiElement = this.getElement(elementName);
    expect(uiElement === '' || uiElement === null || uiElement.toBeUndefined()).toEqual(true);
  }
}
