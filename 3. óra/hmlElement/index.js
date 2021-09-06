class TogglablePassword extends HTMLElement{
    constructor(){
        super();
        console.log("asdf");
        const template = document.querySelector('template').content;
        const shadowRoot = this.attachShadow({ mode: 'open'}) // elérhető legyen e kívülről a shadowroot
        shadowRoot.appendChild(template);
    }
    connectedCallback(){
        const button = this.shadowRoot.querySelector('button');
        const input = this.shadowRoot.querySelector('input');

        button.addEventListener('click', () => {
            input.type = input.type === 'password' ? 'text' : 'password';
        })
    }
    //akkor fut le, ha létrejön
    disconnectedCallback(){
        const button = this.shadowRoot.querySelector('button');
        button.removeEventListener('click');
    }
    //amikor törlődik

}//hook akkor fut le, ha előre definiált jelenség megtörtént,pl addeventlistener

customElements.define('togglable-password', TogglablePassword);