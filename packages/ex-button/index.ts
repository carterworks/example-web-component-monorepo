import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('ex-button')
export class ExButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
    button {
      padding: 8px 16px;
      border-radius: 4px;
      background-color: var(--ex-button-background-color, #007bff);
      color: var(--ex-button-color, white);
      border: none;
      cursor: pointer;
      font-size: inherit;
    }
    button:hover {
      background-color: var(--ex-button-background-color-hover, #0056b3);
    }
  `;

  render() {
    return html`<button><slot></slot></button>`;
  }
}
