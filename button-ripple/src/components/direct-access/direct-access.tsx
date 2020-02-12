import { Component, h } from '@stencil/core';

@Component({
  tag: 'direct-access',
  styleUrl: 'direct-access.scss',
  shadow: true
})
export class Access {

  render() {
    return (
      <div class="mdc-card my-card mdc-card__primary-action" tabindex="0">
        <div class="my-card-1 material-icons">
          favorite
        </div>
        <div class="my-card-2">
          <slot />
        </div>
      </div>
    );
  }

}


