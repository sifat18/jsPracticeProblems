// basic single  linklist making traversing and reverse
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkList {
    constructor(data) {
        this.head = data;
    }

    size() {
        let c = 0;
        let n = this.head;
        while (n) {
            c++;
            n = n.next;
        }
        return c;
    }

    add(data) {
        let n = this.head;
        while (n.next) {
            n = n.next;
        }
        let no = new Node(data);
        n.next = no;
    }
    displ() {
        let n = this.head;
        while (n) {
            console.log(n.data);
            n = n.next;
        }
    }
    //   reverse
    rdispl() {
        let n = this.head;
        let prev, curr = null
        while (n) {
            curr = n
            n = n.next
            curr.next = prev
            prev = curr
        }
        this.head = prev
        let l = this.head
        // console.log({n})
        // l.next=prev
        while (l) {
            console.log(l.data);
            l = l.next;
        }


    }
}

let a = new Node(20);
let list = new LinkList(a);
list.add(10);
list.add(40);
// list.displ()
list.rdispl()
