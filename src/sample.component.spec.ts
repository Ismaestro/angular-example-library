import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {SampleComponent} from './sample.component';

describe('SampleComponent', () => {

  let comp: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleComponent],
    });

    fixture = TestBed.createComponent(SampleComponent);
    comp = fixture.componentInstance;
    comp.locale = 'es';

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('span'));
    el = de.nativeElement;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have <span> text', () => {
    fixture.detectChanges();
    const span = de.nativeElement;
    expect(span.innerText).toBeDefined();
  });
});
