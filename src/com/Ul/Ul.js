
import { Component } from '../Com/Component.js';
import { Storage } from '../../tools/Storage.js';


class Ul extends Component {

    static template = 'Ul'

    constructor () {
        super();
        this.storage = new Storage({ storageKey: this.attributes.id.value });
        this.renderElement();
        this.renderSubmit();
    }

    renderSubmit () {
        const adder = document.createElement('daily-adder');
        adder.label = this.attributes.label.value;
        adder.addCallback = (text) => this.createElement(text);
        this.shadow.appendChild(adder);
    }

    async createElement (text) {
        const element = { text };
        await this.storage.add(element);
        const li = this.createLi(element);
        const ul = this.shadow.querySelector('ul');
        ul.appendChild(li);
        ul.scrollTo(0, ul.scrollHeight);
    }

    async removeElement (id) {
        const elements = Array.from(this.shadow.querySelectorAll('daily-li'));
        const element = elements.find(li => li.id == id);
        if (element) {
            await this.storage.remove(id);
            this.shadow.querySelector('ul').removeChild(element);
        }
    }

    async editElement (id, text) {
        await this.storage.edit(id, { text });
    }

    createLi (element) {
        return Object.assign(document.createElement('daily-li'), element, {
            onDelete: this.removeElement.bind(this, element.id),
            onSave: (edited) => this.editElement(element.id, edited),
        });
    }

    renderElement () {
        for (let element of this.storage.elements) {
            this.shadow.querySelector('ul').appendChild(this.createLi(element));
        }
    }

    toString () {
        let name = this.attributes.id.value.toUpperCase();
        name += ('\n' + '='.repeat(name.length));
        for (let element of this.shadow.querySelectorAll('daily-li')) {
            name += ('\n- ' + element.text);
        }
        name += '\n';
        return name
    }
}

export { Ul }
