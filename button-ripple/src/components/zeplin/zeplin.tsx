import { Component, Host, h } from '@stencil/core';
import { MDCRipple } from '@material/ripple';

@Component({
  tag: 'button-zeplin',
  styleUrl: 'zeplin.scss',
  shadow: true
})
export class Zeplin {

  rippleButtonElement!: HTMLButtonElement;
  componentDidLoad() {
    new MDCRipple(this.rippleButtonElement);
  }

  render() {
    return (
      <div class="mdc-touch-target-wrapper">
        <button class="mdc-button" ref={el => this.rippleButtonElement = el as HTMLButtonElement}>
          <div class="mdc-button__ripple"></div>
          <i class="material-icons mdc-button__icon" aria-hidden="true"></i>
          <span class="mdc-button__label">Text Button</span>
        </button>
      </div>
    );
  }

}
