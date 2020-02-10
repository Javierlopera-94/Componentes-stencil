import { Component, h, EventEmitter, Event } from '@stencil/core';
import { MDCRipple } from '@material/ripple';

@Component({
  tag: 'button-zeplin',
  styleUrl: 'primary-button.scss',
  shadow: true
})
export class Zeplin {

  rippleButtonElement!: HTMLButtonElement;

  @Event() eventChange: EventEmitter;

  componentDidLoad() {
    new MDCRipple(this.rippleButtonElement);
  }

  handleClick(event: UIEvent) {
    console.log(event)
    this.eventChange.emit();
  }

  render() {
    return (
      <div class="mdc-touch-target-wrapper">
        <button class="mdc-button" onClick={ (event: UIEvent) => this.handleClick(event)} ref={el => this.rippleButtonElement = el as HTMLButtonElement}>
          <div class="mdc-button__ripple"></div>
          <i class="material-icons mdc-button__icon" aria-hidden="true"></i>
          <span class="mdc-button__label">Text Button</span>
        </button>
      </div>
    );
  }

}
