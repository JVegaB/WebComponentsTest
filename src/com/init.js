
import { Timer } from './Timer/Timer.js';
import { Dater } from './Dater/Dater.js';
import { Li } from './Li/Li.js';
import { Ul } from './Ul/Ul.js';
import { Adder } from './Adder/Adder.js';
import { Exporter } from './Exporter/Exporter.js';
import { Note } from './Note/Note.js';
import { ThemeChooser } from './ThemeChooser/ThemeChooser.js';
import { Theme } from './Theme/Theme.js';

customElements.define('daily-time', Timer);
customElements.define('daily-date', Dater);
customElements.define('daily-li', Li);
customElements.define('daily-ul', Ul);
customElements.define('daily-adder', Adder);
customElements.define('daily-exporter', Exporter);
customElements.define('daily-note', Note);
customElements.define('daily-theme', Theme);
customElements.define('daily-theme-chooser', ThemeChooser);
