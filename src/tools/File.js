
class File {

    constructor ({ name, content }) {
        this.name = name;
        this.setContent(content);
    }

    setContent (content) {
        this.content = 'data:text/plain;charset=utf-8,' + encodeURIComponent(content);
    }

    download () {
        const a = document.createElement('a');
        a.setAttribute('href', this.content);
        a.setAttribute('download', this.name);
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

export {
    File
}
