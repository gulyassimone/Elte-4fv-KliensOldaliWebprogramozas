class LengthyInput extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});
        this.originalSelect = this.firstElementChild;
        shadowRoot.appendChild(this.firstElementChild);
        this.maxLength = this.originalSelect.getAttribute("maxlength");
    }

    connectedCallback() {
        this.collectOptions();
        this.originalSelect.addEventListener('keyup', () => {
            this.collectOptions();
        });
    }

    collectOptions() {
        const currLength = this.originalSelect.value.length;
        console.log(currLength + " Max: " + this.maxLength);
        this.changeColor(currLength);
    }

    changeColor(length) {
        const rate = length / this.maxLength * 100;
        const dataColor = this.originalSelect.dataset.color;
        const color = dataColor !== null && dataColor !== '' ? dataColor : 'orange';

        this.originalSelect.setAttribute("style", "border-image-source: linear-gradient(to right, " + color + " " + rate + "%, hsla(0, 0%, 90%, 1) " + rate + "% 100%); ");
    }
}

customElements.define('lengthy-input', LengthyInput);