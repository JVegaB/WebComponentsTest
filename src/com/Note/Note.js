
import { Component } from '../Com/Component.js';


class Note extends Component {

    static template = 'Note';

    constructor() {
        super();
        this.shadow.querySelector('.content').innerHTML = this.innerHTML;
        if (this.attributes.name) {
            this.shadow.querySelector('.name').innerHTML = this.attributes.name.value;
        }
    }

}

export {
    Note
}
