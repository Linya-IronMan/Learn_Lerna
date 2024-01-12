import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'sten-button',
  styleUrl: 'sten-button.css',
  shadow: true,
})
export class StenButton {
  @Element() el: HTMLElement;
  @Prop() name: string;
  @Prop() msg: { name: string; age: number; sex: 'man' | 'woman' };

  @Prop() members: string[] = [];

  @Event() buttonClick: EventEmitter;
  buttonClickHandler() {
    this.buttonClick.emit('buttonClick');
  }

  getListHeight() {
    return this.el.getBoundingClientRect().height;
  }

  clickHandler() {
    const height = this.getListHeight();
    console.log('button bound height', height);
    this.buttonClickHandler();
  }

  @Watch('members.length')
  membersChange() {
    console.log('members change');
  }

  render() {
    return (
      <Host>
        <button class="sten-button" onClick={() => this.clickHandler()}>
          name: {this.msg.name} <br />
          age: {this.msg.age} <br />
          sex: {this.msg.sex} <br />
          <slot></slot>
        </button>
        {this.members.map((item, index) => (
          <div>
            member name{index + 1}: {item}
          </div>
        ))}
      </Host>
    );
  }
}
