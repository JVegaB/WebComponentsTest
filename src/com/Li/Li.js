

class Li extends HTMLElement {

    constructor () {
        super();
        this.shadow = this.attachShadow({mode: 'closed'});
        this.shadow.appendChild(document.getElementById('Li').content.cloneNode(true));
        this.shadow.querySelector('.edit').onclick = this.editMode.bind(this, true);
        this.shadow.querySelector('.save').onclick = this.saveValue.bind(this);
    }

    saveValue () {
        this.editMode()
        if (!this.onSave) {
            return;
        }
        const value = this.shadow.querySelector('input').value;
        if (!value) {
            return;
        }
        this.text = value;
        this.onSave(value);
    }

    editMode (mode) {
        this.shadow.querySelector('.card').classList.toggle('edit-mode', mode);
        if (mode) {
            this.shadow.querySelector('input').value = this.defaultText;
        }
    }

    markdownit (text) {
        if (window.markdownit) try {
            return markdownit().render(text);
        } catch {}
        return text;
    }

    set text (value) {
        this.defaultText = value;
        this.shadow.querySelector('span').innerHTML = this.markdownit(value);
        for (let link of this.shadow.querySelectorAll('a')) {
            link.target = '_blank';
        }
    }

    get text () {
        return this.shadow.querySelector('span').innerHTML;
    }

    set onDelete (action) {
        this.shadow.querySelector('.del').onclick = action;
    }
}

export {
    Li
}
