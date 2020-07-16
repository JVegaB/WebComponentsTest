
import { Component } from '../Com/Component.js';


class Timer extends Component {

    static template = 'Timer'

    constructor () {
        super();
        const time = this.shadow.querySelector('time');
        time.innerHTML = new Date().toLocaleTimeString();
        setInterval(() => time.innerHTML = new Date().toLocaleTimeString(), 1000);
    }
}

export { Timer }
