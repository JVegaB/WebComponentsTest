

class Component extends HTMLElement {

    static template = 'template'

    constructor () {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.appendChild(document.getElementById(this.constructor.template).content.cloneNode(true));
        this.bind(this.constructor.events);
    }

    bind (events) {
        if (events) for (let declaration in events) {
            const parts = declaration.split(' ');
            const event = parts.shift();
            const selector = parts.join(' ');
            const el = this.shadow.querySelector(selector);
            if (el) {
                el[event] = this[events[declaration]].bind(this);
            }
        }
    }
}

export {
    Component
}
