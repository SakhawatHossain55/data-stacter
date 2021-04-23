class Dictionary {
    constructor() {
        this.Dictionary = {};
    }
    add(key, value) {
        this.Dictionary[key] = value;
    }
    get(key) {
        return this.Dictionary[key];
    }
}

const phoneBook = new Dictionary();
phoneBook.add('Mahi', '01845454545')
phoneBook.add('Porimoni', '01878954545')
phoneBook.add('Purnima', '0184512345')
phoneBook.add('Sabnur', '0184369545')
console.log(phoneBook.Dictionary);
const mahi = phoneBook.get('Mahi');
console.log(mahi);