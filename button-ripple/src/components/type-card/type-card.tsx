import { Component, h } from '@stencil/core';

@Component({
  tag: 'type-card',
  styleUrl: 'type-card.scss',
  shadow: true
})
export class TypeCard {

  render() {
    return (
      <div class="main-card">
        <div class="main-card-1">
          <div class="text-css"><span>Producto</span></div>
          <div class="line-css"></div>
          <div class="text2-css"><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry  Lorem Ipsum has been the industry's standards</span></div>
        </div>
        <div class="main-card-2">
          <div class="button-css"><slot /></div>
        </div>
      </div>

    );
  }

}
