class ConfirmLink extends HTMLAnchorElement { // a tag
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.addEventListener('click', (e) => this.onClick(e));
    }
  
    onClick(e) {
      const result = confirm(`Biztos hogy el szeretnél navigálni ide: ${this.href}?`);
  
      if (!result) {
        e.preventDefault();
      }
    }
  
  }
  
  customElements.define('confirm-link', ConfirmLink, { extends: 'a' });