import { Component, h, Prop } from '@stencil/core';
import { MDCRipple } from '@material/ripple';

@Component({
  tag: 'icon-button',
  styleUrl: 'icon-button.scss',
  shadow: true
})
export class Button {

  @Prop() ariaLabel: string;

  rippleButtonElement!: HTMLButtonElement;

  componentDidLoad() {
    new MDCRipple(this.rippleButtonElement);
  }

  render() {
    return (
      <button class="mdc-fab mdc-fab--mini" aria-label={this.ariaLabel} ref={el => this.rippleButtonElement = el as HTMLButtonElement}>
        <div class="mdc-fab__ripple"></div>
        <span class="mdc-fab__icon material-icons"><slot /></span>
      </button>
    );
  }

}
