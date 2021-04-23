// LAST IN FIRST OUT ;
class Stack {
    constructor() {
        this.stack = [];
    }
    add(item) {
        this.stack.push(item);
    }
    remove(){
        if(this.stack.length){
            return this.stack.pop();
        }
    }
}

const guest = new Stack();
guest.add("Rahaman");
guest.add("Zaman");
guest.add("Kaman");
guest.add("Kamran");
console.log(guest.stack);
const speker = guest.remove();
console.log(speker);
console.log(guest.stack);