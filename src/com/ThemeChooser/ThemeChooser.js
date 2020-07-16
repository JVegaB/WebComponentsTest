
import { Schemes } from '../../data/ThemeSchemes.js';
import { ThemeManager } from '../../tools/ThemeManager.js';
import { Component } from '../Com/Component.js';


class ThemeChooser extends Component {

    static template = 'ThemeChooser'

    constructor () {
        super();
        ThemeManager.init();
        this.render();
    }

    render () {
        const ul = this.shadow.querySelector('ul');
        this.childs = [];
        const current = ThemeManager.CurrentScheme;
        for (let scheme in Schemes) {
            const theme = document.createElement('daily-theme');
            theme.update({
                name: scheme,
                color: Schemes[scheme]['--main--'],
            });
            theme.select(scheme == current);
            theme.onclick = () => {
                ThemeManager.Scheme = scheme;
                this.clear();
                theme.select(true);
            };
            this.childs.push(theme);
            ul.appendChild(theme);
        }
    }

    clear () {
        this.childs.forEach(theme => theme.select(false));
    }
}

export {
    ThemeChooser
}
