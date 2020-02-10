import { Component, Event, Prop, EventEmitter, h } from '@stencil/core';
import { MDCTextField } from '@material/textfield';
import { MDCRipple } from '@material/ripple';

@Component({
    tag: 'pp-textfield',
    styleUrl: 'textfield.scss',
    shadow: true,
})

export class TextField {

    /** Ejemplo de prop */
    @Prop() value: string;

    /** Para levantar los eventos hacia arriba */
    @Event() eventChange: EventEmitter;


    // textInput: MDCTextField;
    textInputElementUser!: HTMLInputElement;
    textInputElementPassword!: HTMLInputElement;
    rippleButtonElementCancel!: HTMLButtonElement;
    rippleButtonElementNext!: HTMLButtonElement;

    componentDidLoad() {
        const username = new MDCTextField(this.textInputElementUser);
        const password = new MDCTextField(this.textInputElementPassword);
        new MDCRipple(this.rippleButtonElementCancel);
        new MDCRipple(this.rippleButtonElementNext);
    }

    render() {
        return (
            <div>
                <div class="mdc-text-field username" ref={el => this.textInputElementUser = el as HTMLInputElement}>
                    <input type="text" class="mdc-text-field__input" id="username-input" name="username"></input>
                    <label class="mdc-floating-label" htmlFor="username-input" >Username</label>
                    <div class="mdc-line-ripple"></div>
                </div>
                <div class="mdc-text-field password" ref={el => this.textInputElementPassword = el as HTMLInputElement}>
                    <input type="password" class="mdc-text-field__input" id="password-input" name="password" required minlength="8"></input>
                    <label class="mdc-floating-label" htmlFor="password-input">Password</label>
                    <div class="mdc-line-ripple"></div>
                </div>
                <div class="button-container">
                    <button type="button" class="mdc-button cancel" ref={el => this.rippleButtonElementCancel = el as HTMLButtonElement}>
                        <div class="mdc-button__ripple"></div>
                        <span class="mdc-button__label"> Cancel </span>
                    </button>
                    <button class="mdc-button mdc-button--raised next" ref={el => this.rippleButtonElementNext = el as HTMLButtonElement}>
                        <div class="mdc-button__ripple"></div>
                        <span class="mdc-button__label"> Next </span>
                    </button>
                </div>
            </div>
        );
    }
}
