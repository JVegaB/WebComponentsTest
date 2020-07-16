
import { File } from '../../tools/File.js';

class Exporter extends HTMLElement {
    constructor () {
        super();
        this.shadow = this.attachShadow({mode: 'closed'});
        this.shadow.appendChild(document.getElementById('Exporter').content.cloneNode(true));
        this.shadow.querySelector('code').onclick = this.exportDaily.bind(this);
    }

    exportDaily () {
        const content = Array.from(document.querySelectorAll('daily-ul')).map(
            (dailyUl) => dailyUl.toString() + '\n\n\n');
        const name = document.querySelector('daily-date').dataString + '.daily';
        const file = new File({ name, content: content.join('') });
        file.download();
    }
}

export {
    Exporter
}
