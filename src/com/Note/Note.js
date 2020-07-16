
class Note extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'closed' });
        this.shadow.appendChild(document.getElementById('Note').content.cloneNode(true));
        this.shadow.querySelector('.content').innerHTML = this.innerHTML;
        if (this.attributes.name) {
            this.shadow.querySelector('.name').innerHTML = this.attributes.name.value;
        }
    }

}

export {
    Note
}
