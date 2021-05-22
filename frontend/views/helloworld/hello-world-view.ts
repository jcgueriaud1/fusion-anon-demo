import { showNotification } from '@vaadin/flow-frontend/a-notification';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-text-field';
import { HelloEndpoint } from 'Frontend/generated/HelloEndpoint';
import { customElement, html } from 'lit-element';
import { View } from '../../views/view';

@customElement('hello-world-view')
export class HelloWorldView extends View {
  name: string = '';

  render() {
    return html`<img src="images/logo.png" alt="logo" />
      <vaadin-text-field label="Your name" @value-changed="${this.nameChanged}"></vaadin-text-field>
      <vaadin-button @click="${this.sayHello}">Say hello</vaadin-button>
    `;
  }
  nameChanged(e: CustomEvent) {
    this.name = e.detail.value;
  }

  sayHello() {
    showNotification(`Hello ${this.name}`);
    HelloEndpoint.hello(this.name);
  }
}
