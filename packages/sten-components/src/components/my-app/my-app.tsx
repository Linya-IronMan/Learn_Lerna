import { Component, Host, Listen, h } from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css',
  shadow: true,
})
export class MyApp {
  @Listen('buttonClick')
  buttonClickHandler() {
    this.clickHandler();
  }
  members = ['cdt', 'dsy', 'hy', 'zyx'];
  clickHandler() {
    this.members.push('jxt');
    this.members = [...this.members];
    console.log('members after click', this.members);
  }
  render() {
    return (
      <Host>
        <my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>
        <sten-button name="Initial Button" msg={{ name: 'cdt', age: 18, sex: 'man' }} members={[...this.members]}>
          Hello World!
        </sten-button>
      </Host>
    );
  }
}
