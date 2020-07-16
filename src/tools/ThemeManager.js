
import { Schemes } from '../data/ThemeSchemes.js';


class ThemeManager {

    static init () {
        ThemeManager.Scheme = ThemeManager.CurrentScheme || ThemeManager.Schemes[0];
    }

    static get Schemes () {
        return Reflect.ownKeys(Schemes);
    }

    static get CurrentScheme () {
        return localStorage.getItem('ThemeManager.currentScheme');
    }

    static set Scheme (scheme) {
        if (!Schemes[scheme]) {
            return false;
        }
        localStorage.setItem('ThemeManager.currentScheme', scheme);
        scheme = Schemes[scheme];
        for (let color in scheme) {
            document.body.style.setProperty(color, scheme[color]);
        }
    }
}

export {
    ThemeManager
}
