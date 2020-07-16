
class Adder extends HTMLElement {

    constructor () {
        super();
        this.shadow = this.attachShadow({ mode: 'closed' });
        this.shadow.appendChild(document.getElementById('Adder').content.cloneNode(true));
        this.shadow.querySelector('form').onsubmit = this.addFromUi.bind(this);
    }

    set label (value) {
        this.shadow.querySelector('label').innerHTML = value;
    }

    addFromUi (ev) {
        ev.preventDefault();
        const input = ev.currentTarget.querySelector('input');
        const value = input.value;
        input.value = '';
        if (value && this.addCallback) {
            this.addCallback(value)
        }
    }

}

export { Adder }
