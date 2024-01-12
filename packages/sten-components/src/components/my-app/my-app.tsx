import { Component, Host, Listen, State, h } from '@stencil/core';
import { StenFuncComponent } from '../sten-func-component/sten-func-component';
import { StenIcon } from '../sten-icon/sten-icon';
import IconSvg from './time-restore.svg';

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
  @State() members = ['cdt', 'dsy', 'hy', 'zyx'];
  clickHandler() {
    this.members = [...this.members, 'jxt'];
    // this.members = Array.from(this.members);
    // this.members = this.members.slice();
    // this.members = JSON.parse(JSON.stringify(this.members));
    console.log('clickHandler', this.members);
  }

  render() {
    return (
      <Host>
        <StenFuncComponent name="中国人民大团结"></StenFuncComponent>
        {/* <sten-func-component name="中国人民大团结"></sten-func-component> */}

        <my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>
        <sten-button name="Initial Button" msg={{ name: 'cdt', age: 18, sex: 'man' }} members={[...this.members]}></sten-button>
        <StenIcon size="30" rotate={0} styles={{}} color={'red'} svgData={IconSvg} spin={false}></StenIcon>
      </Host>
    );
  }
}
