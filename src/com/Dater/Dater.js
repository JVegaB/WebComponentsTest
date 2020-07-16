
import { Component } from '../Com/Component.js';


class Dater extends Component {

    static template = 'Dater'

    constructor () {
        super();
        const timeTag = this.shadow.querySelector('time');
        const date = new Date().toLocaleDateString('es-MX', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
        });
        this.dataString = timeTag.innerHTML = date.charAt(0).toUpperCase() + date.substr(1, date.length);
    }
}

export {
    Dater
}
