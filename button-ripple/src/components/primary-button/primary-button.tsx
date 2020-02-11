import { Component, h, Prop } from '@stencil/core';
import { MDCRipple } from '@material/ripple';

@Component({
  tag: 'button-zeplin',
  styleUrl: 'primary-button.scss',
  shadow: true
})
export class Zeplin {

  rippleButtonElement!: HTMLButtonElement;

  @Prop() icon: string;
  @Prop() disabled: boolean;

  componentDidLoad() {
    new MDCRipple(this.rippleButtonElement);
  }

  render() {
    return (
      <div class="mdc-touch-target-wrapper">
        <button disabled={this.disabled} class="mdc-button" ref={el => this.rippleButtonElement = el as HTMLButtonElement}>
          <div class="mdc-button__ripple"></div>
          {this.icon && <i class="material-icons mdc-button__icon" aria-hidden="true">{this.icon}</i>}
          <span class="mdc-button__label">Text Button</span>
        </button>
      </div>
    );
  }

}
