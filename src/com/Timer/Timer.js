
class Timer extends HTMLElement {

    constructor () {
        super();
        this.shadow = this.attachShadow({mode: 'closed'});
        this.shadow.appendChild(document.getElementById('Timer').content.cloneNode(true));
        const time = this.shadow.querySelector('time');
        time.innerHTML = new Date().toLocaleTimeString();
        setInterval(() => time.innerHTML = new Date().toLocaleTimeString(), 1000);
    }
}

export { Timer }
