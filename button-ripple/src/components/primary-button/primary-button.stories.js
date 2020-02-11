/** Para documentar los eventos: https://storybook.js.org/docs/addons/introduction/ */
import { action } from '@storybook/addon-actions';

/** Test de accesibilidad: https://www.npmjs.com/package/@storybook/addon-a11y */
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, color, object, optionsKnob } from '@storybook/addon-knobs';

export default {
    title: 'main-button',
    decorators: [withA11y, withKnobs],
};

export const asTemplate = () => {
    const el = document.createElement('div');

    el.innerHTML = `
        <button-zeplin
            primary
            iconBefore="control_point"
        >
        </button-zeplin>
        Ejemplo fuera del boton
    `.trim()

    const $wcUiButton = el.querySelector('button-zeplin');
    $wcUiButton.addEventListener('click', e => action('click')(e))

    return el;

};



export const Hey = () => '<button-zeplin primary></button-zeplin>';

export const Button = () => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = 'Hello Button';
    btn.addEventListener('click', e => console.log(e));
    return btn;
};
