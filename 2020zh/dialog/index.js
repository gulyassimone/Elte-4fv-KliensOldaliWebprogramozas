

class addButton extends HTMLElement {
  constructor() {
    super();
    const template = document.querySelector('template').content;
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template);


  }
  connectedCallback() {
    const button = this.shadowRoot.querySelector('button');
    const input = this.shadowRoot.querySelector('input');
    const h3 = this.shadowRoot.querySelector('h3');

    button.addEventListener('click', () => {
      h3.innerText =input.value;
    });

  }
  disconnectedCallback() {
    console.log('Goodbye cruel world!');
  }
}

customElements.define('togglable-dialog', addButton);