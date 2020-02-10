/** Para documentar los eventos: https://storybook.js.org/docs/addons/introduction/ */
import { action } from '@storybook/addon-actions';

/** Test de accesibilidad: https://www.npmjs.com/package/@storybook/addon-a11y */
import { withA11y } from '@storybook/addon-a11y';

const componentButton = document.createElement('button-zeplin');

// export default {
//     title: 'prueba',
//     component: componentButton,
//     decorators: [],
//     parameters: {}
// }
// export const Basic = () => <componentButton />;

// export default {
//     component: Button,
//     title: 'Button',
// };

export default {
    title: 'Holaaa'
};

export const Hey = () => '<button-zeplin primary></button-zeplin>';

export const Button = () => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = 'Hello Button';
    btn.addEventListener('click', e => console.log(e));
    return btn;
};
