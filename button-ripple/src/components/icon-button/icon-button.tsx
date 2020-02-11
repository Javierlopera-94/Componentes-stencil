import { Component, h } from '@stencil/core';
import { MDCRipple } from '@material/ripple';

@Component({
  tag: 'icon-button',
  styleUrl: 'icon-button.scss',
  shadow: true
})
export class Button {

  rippleButtonElement!: HTMLButtonElement;

  componentDidLoad() {
    new MDCRipple(this.rippleButtonElement);
  }

  render() {
    return (
      <button class="mdc-fab mdc-fab--mini" aria-label="Favorite" ref={el => this.rippleButtonElement = el as HTMLButtonElement}>
        <div class="mdc-fab__ripple"></div>
        <span class="mdc-fab__icon material-icons">get_app</span>
      </button>
    );
  }

}
