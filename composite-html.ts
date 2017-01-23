interface DomElement {
  elements: DomElement[];
  add(elem: DomElement);
  print();
};


class Html implements DomElement {
  elementName: string;
  elements: DomElement[];

  constructor(elementName: string) {
    this.elementName = elementName;
    this.elements = [];
  }

  add(elem: DomElement) {
    this.elements.push(elem);
  }

  print() {
    console.log(`<${this.elementName}>`);
    for (let element of this.elements) {
      element.print();
    }
    console.log(`</${this.elementName}>`);
  }
}

class Div implements DomElement {
  elementName: string;
  elements: DomElement[];

  constructor(elementName: string) {
    this.elementName = elementName;
    this.elements = [];
  }

  add(elem: DomElement) {
    this.elements.push(elem);
  }

  print() {
    console.log(`<${this.elementName}>`);
    for (let element of this.elements) {
      element.print();
    }
    console.log(`</${this.elementName}>`);
  }
}

class P implements DomElement {
  elementName: string;
  elements: DomElement[];

  constructor(elementName: string) {
    this.elementName = elementName;
    this.elements = [];
  }

  add(elem: DomElement) {
    this.elements.push(elem);
  }

  print() {
    console.log(`<${this.elementName}>`);
    for (let element of this.elements) {
      element.print();
    }
    console.log(`</${this.elementName}>`);
  }
}

let html = new Html("html");
let div = new Div("div");
let p1 = new P("p");
let p2 = new P("p");

div.add(p1);
div.add(p2);
html.add(div);

html.print();