class DomElement {
  elementName : string;
  elements: DomElement[];

  constructor(elementName : string) {
    this.elementName = elementName;
    this.elements = [];
  }

  add(element: DomElement) {
    this.elements.push(element);
  }

  print() {
    console.log(`<${this.elementName}>`);
    for (let element of this.elements) {
      element.print();
    }
    console.log(`</${this.elementName}>`);
  }
}

let p1 = new DomElement("p");
let p2 = new DomElement("p");
let div = new DomElement("div");
let html = new DomElement("html");

div.add(p1);
div.add(p2);
html.add(div);

html.print();