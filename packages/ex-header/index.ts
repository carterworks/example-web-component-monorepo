import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ex-header')
export class ExHeader extends LitElement {
  @property({ type: String })
  accessor text = 'Ex Header';

  render() {
    return html`<h1>${this.text}</h1>`;
  }
}
