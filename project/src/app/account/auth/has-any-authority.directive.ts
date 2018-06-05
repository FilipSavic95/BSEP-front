import {Directive, Input, ElementRef} from '@angular/core';
import {PrincipalService} from './principal.service';

@Directive({
  selector: '[appHasAnyAuthority]'
})
export class HasAnyAuthorityDirective {

  authority: string;
  elementRef: ElementRef;

  constructor(private principal: PrincipalService,
              el: ElementRef) {
    this.elementRef = el;
  }

  @Input('appHasAnyAuthority')
  set setAuthority(value: string) {
    this.authority = value;
    this.updateView();
  }

  private updateView() {
    this.principal.hasAuthority(this.authority).then((result) => {
      this.elementRef.nativeElement.style.display = 'none';
      if (result) {
        this.elementRef.nativeElement.style.display = 'block';
      }
    });
  }

}
