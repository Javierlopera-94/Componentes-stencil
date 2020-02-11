import { Component, h, Prop } from '@stencil/core';
import { MDCRipple } from '@material/ripple';

@Component({
  tag: 'button-zeplin',
  styleUrl: 'primary-button.scss',
  shadow: true
})
export class Zeplin {
  @Prop() iconBefore: string;
  @Prop() iconAfter: string;
  @Prop() disabled: boolean;

  rippleButtonElement!: HTMLButtonElement;


  componentDidLoad() {
    new MDCRipple(this.rippleButtonElement);
    console.log(this.iconAfter);
    console.log(this.iconBefore);
  }

  render() {
    return (
      <div class="mdc-touch-target-wrapper">
        <button disabled={this.disabled} class="mdc-button" ref={el => this.rippleButtonElement = el as HTMLButtonElement}>
          <div class="mdc-button__ripple"></div>
          {this.iconBefore && <i class="material-icons mdc-button__icon" aria-hidden="true">{this.iconBefore}</i>}
          <span class="mdc-button__label">Text Button</span>
          {this.iconAfter && <i class="material-icons mdc-button__icon" aria-hidden="true">{this.iconAfter}</i>}
        </button>
      </div>
    );
  }

}
