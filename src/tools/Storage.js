
class Storage {

    constructor ({ storageKey, mapper }) {
        this.storageKey = storageKey;
        mapper = mapper || ((value, index) => ({
            text: value.text,
            id: index
        }));
        this.elements = this.fromLocalStorage().map(mapper);
    }

    fromLocalStorage () {
        const storage = localStorage.getItem(this.storageKey);
        if (storage) try {
            return JSON.parse(storage);
        } catch {
            console.error('Failed to render:', this.storageKey);
        }
        return [];
    }

    add ( element ) {
        this.elements.push(element);
        element.id = this.elements.length - 1;
        localStorage.setItem(this.storageKey, JSON.stringify(this.elements));
        return element.id;
    }

    remove ( id ) {
        this.elements = this.elements.filter(element => element.id != id);
        localStorage.setItem(this.storageKey, JSON.stringify(this.elements));
    }

    edit (id, data) {
        data.id = id;
        this.elements.forEach(element => {
            if (element.id == id) {
                Object.assign(element, data);
            }
        });
        localStorage.setItem(this.storageKey, JSON.stringify(this.elements));
    }
}

export {
    Storage
}
