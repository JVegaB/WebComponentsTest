
class Dater extends HTMLElement {

    constructor () {
        super();
        this.shadow = this.attachShadow({mode: 'closed'});
        this.shadow.appendChild(document.getElementById('Dater').content.cloneNode(true));
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
