
import { Component } from '../Com/Component.js';
import { File } from '../../tools/File.js';


class Exporter extends Component {

    static template = 'Exporter'
    static events = { 'onclick code': 'exportDaily' }

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
