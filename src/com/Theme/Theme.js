
class Theme extends HTMLElement {

    constructor () {
        super();
        this.shadow = this.attachShadow({mode: 'closed'});
        this.shadow.appendChild(document.getElementById('Theme').content.cloneNode(true));
    }

    set onclick (listener) {
        this.shadow.querySelector('article').onclick = listener;
    }

    select (select) {
        const classes = this.shadow.querySelector('article').classList;
        if (select) {
            classes.add('selected');
        } else {
            classes.remove('selected');
        }
    }

    update (theme) {
        this.shadow.querySelector('span').style.backgroundColor = theme.color;
        this.shadow.querySelector('p').innerHTML = theme.name;
    }
}

export {
    Theme
}
