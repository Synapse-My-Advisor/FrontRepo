import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('container') container!: ElementRef;

  constructor(private renderer: Renderer2) {}

  activateRegister() {
    this.renderer.addClass(this.container.nativeElement, 'active');
  }

  activateLogin() {
    this.renderer.removeClass(this.container.nativeElement, 'active');
  }
}
