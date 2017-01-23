interface DomElement {
  add(elem: DomElement);
  print();
};


class Html implements DomElement {
  elements: DomElement[] = [];

  add(elem: DomElement) {
    this.elements.push(elem);
  }

  print() {
    console.log('<html>');
    for (let element of this.elements) {
      element.print();
    }
    console.log('</html>');
  }
}

class Div implements DomElement {
  elements: DomElement[] = [];

  add(elem: DomElement) {
    this.elements.push(elem);
  }

  print() {
    console.log('<div>');
    for (let element of this.elements) {
      element.print();
    }
    console.log('</div>');
  }
}

class P implements DomElement {
  textContext : string;
  elements: DomElement[];

  constructor(textContent: string) {
    this.textContext = textContent;
  }

  add(elem: DomElement) {
    this.elements.push(elem);
  }

  print() {
    console.log(`<p>${this.textContext}</p>`);
    // should we keep this or remove it for the leaf node?
    // for (let element of this.elements) {
    //   element.print();
    // }
  }
}

let html = new Html();
let div = new Div();
let p1 = new P("Hello");
let p2 = new P("world");

div.add(p1);
div.add(p2);
html.add(div);
html.print();