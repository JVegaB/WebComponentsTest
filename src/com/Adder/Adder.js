
import { Component } from '../Com/Component.js';


class Adder extends Component {

    static template = 'Adder';
    static events = {
        'onsubmit form': 'addFromUi',
    }

    set label (value) {
        this.shadow.querySelector('label').innerHTML = value;
    }

    addFromUi (ev) {
        ev.preventDefault();
        const input = ev.currentTarget.querySelector('input');
        const value = input.value;
        input.value = '';
        if (this.addCallback) {
            this.addCallback(value)
        }
    }

}

export { Adder }
