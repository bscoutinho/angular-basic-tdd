import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core'
import { By } from '@angular/platform-browser'

import { AlertButtonComponent } from './alert-button.component';

describe('AlertButton', () => {
  let component: AlertButtonComponent
  let fixture: ComponentFixture<AlertButtonComponent>
  let de: DebugElement

  beforeEach((() => {

    TestBed.configureTestingModule({
      declarations: [ AlertButtonComponent ],
    })
    .compileComponents()

  }))

  beforeEach((() => {
    fixture = TestBed.createComponent(AlertButtonComponent)
    component = fixture.componentInstance
    de = fixture.debugElement

    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have a message with warn', () => {
    expect(component.content).toContain('warn')
  })

  it('should be have a severity greater than 2', () => {
    expect(component.severity).toBeGreaterThan(2)
  })

  it('should have an H1 tag of ALert Button', () => {
    expect(de.query(By.css('H1')).nativeElement.innerText)
  })

  it('should toggle the message button', () => {
    expect(component.hideContent).toBeTruthy()
  })

  it('should toggle the message boolean async', fakeAsync(() => {
    expect(component.hideContent).toBeTruthy()
    component.toggleAsync()
    tick(500)
    expect(component.hideContent).toBeFalsy
  })
  )


})

