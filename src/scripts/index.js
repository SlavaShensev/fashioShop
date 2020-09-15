import '../styles/index.scss';


class App {
    constructor({el}) {
        this.el = el;
        this.elClassList = this.el.classList;
        this.deviceData = null;
        this.deviceOrientation = null;

        window.addEventListener('load', () => this.elClassList.add('app--loaded'));
    }
}

window.App = new App({el: document.getElementById('app')});
